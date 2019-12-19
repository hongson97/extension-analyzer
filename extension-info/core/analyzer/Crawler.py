import requests, os, zipfile, urllib, xml.etree.ElementTree as ET
import sqlite3
from multiprocessing.dummy import Pool as ThreadPool
import multiprocessing
import time

#sitemap = "https://chrome.google.com/webstore/sitemap"
database = "G:\\New\\Extensions\\SOURCE\\WEB\\extension-info\\core\\analyzer\\ExtensionDb.db"

def ConnectDB(db):
	conn = sqlite3.connect(db)
	return conn

def InserttoDB(conn, cursor, ID, name, path):
	try:
		lock.acquire(True)
		cursor.execute('INSERT INTO Extensions VALUES ("{0}", "{1}", "{2}")'.format(ID, name, path))
	#time.sleep()
	except Exception as E:
		print "Error when insert: {}".format(E)
		return
	# finally:
	lock.release()
	conn.commit()

def CheckDownloaded(cursor, ID):
	cursor.execute("SELECT ID FROM Extensions WHERE ID='{0}'".format(ID))
	if cursor.fetchone() == None:
		return False
	return True
	
def CloseDB(conn):
	conn.close()

def CreateDir(directory):
	if not os.path.exists(directory):
		os.makedirs('\\\\?\\' + directory)

def GetRequests(url):
	try:
		r = requests.get(url)
		return r.text
	except Exception as e:
		print '[!]Couldn\'t request to {0}'.format(url)
		return None
def ParseXML(xmlFile):
	try:
		tree = ET.parse(xmlFile)
		root = tree.getroot()
		group = []
		for child in root:
			group.append(child[0].text)
		return group
	except Exception as e:
		print "[!]Couldn\'t parse XML file: {0}".format(e)
		return None

def WriteXML(xmlFile, data):
	with open(xmlFile, "w") as f:
			f.write(data)
	f.close()

def GetExtID(arg):
	if arg.startswith('http://'):
		arg = arg.replace('http://', 'https://')
	if arg.startswith('https://'):
		return arg.split('/')[-1:][0], arg.split("/")[-2:][0]
	return arg

def GetCrxUrl(extension_id):
	if '?' in extension_id:
		extension_id = extension_id[:extension_id.find('?')]
	return ('https://clients2.google.com/service/update2/crx?response=redirect&prodversion=49.0'
			'&x=id%3D{extension_id}%26installsource%3Dondemand%26uc'.format(extension_id=extension_id))

def DownloadAndExtractExt(URL):
	ExtID, ExtName = GetExtID(URL)
	connDB = ConnectDB(database)
	c = connDB.cursor()
	if CheckDownloaded(c, ExtID):
		print "[!]Already downloaded"
		return None
	crx_url = GetCrxUrl(ExtID)
	folder = tmp
	print "*" * 20
	print '[+]Downloading {crx_url}\n'.format(crx_url=crx_url)
	try:
		req = requests.get(crx_url, stream=True)
		status_code = req.status_code
	except Exception as e:
		print '[!]Couldn\'t request the crx file ({0})'.format(e)
		return None
	if status_code == 200:
		filename = '{0}.crx'.format(ExtName)
		dst_path = folder + "\\" + filename
		try:
			with open(dst_path, 'wb') as fd:
				for chunk in req.iter_content(chunk_size=128):
					fd.write(chunk)
		except Exception as e:
			print '[!]Couldn\'t download the crx file ({0})'.format(e)   #Something wrong?
			return None
		else:
			print '[*]Chrome extension crx file downloaded successfully'
			print "[*]Save to " + dst_path
			"""if len(dst_path) < 255:
				ExtractCRX(filename, dst_path, folder)
			else:
				print "[!]Error path is too long"""
			dst_dir = folder + "\\" + filename[:-4]
			ExtractCRX(filename, dst_path, dst_dir)
			InserttoDB(connDB, c, ExtID, filename[:-4], dst_dir)
			os.remove(dst_path)
			CloseDB(connDB)
	else:
		print '[!]Couldn\'t download the crx file (status code: {0})'.format(status_code)
		return None

def ExtractCRX(filename, path, dst_dir):
	CreateDir(dst_dir)
	print '[+]Directory {dir} created'.format(dir=filename[:-4])
	try:
		print '[+]Extracting the contents of {0}...'.format(filename)
		zip_ref = zipfile.ZipFile(path, 'r')
		zip_ref.extractall(dst_dir)
		zip_ref.close()
	except Exception as e:
		print '[!]Couldn\'t extract the contents of the crx file ({0})'.format(e)
		return False
	else:
		print '[*]Extracted successfully'
		return True

def Crawler():
	#WriteXML("sitemap.xml",GetRequests(sitemap))
	GroupExt = ParseXML("sitemap.xml")    
	DataDir = "G:\\New\\Extensions\\SOURCE\\WEB\\extension-info\\core\\analyzer\\Data\\"
	CreateDir(DataDir)  #
	global tmp
	
	for i in range(1463, len(GroupExt)):     #Better if run from folder we want. DONE! Next, 1345 (992). Now run 4(991)
		# filename = i[i.find("?")+1:]
		j = GroupExt[i]
		print j
		filename = j[j.find("?")+1:]
		path = DataDir + filename
		CreateDir(path)     #Create folder
		try:
			WriteXML(path + "\\" + filename + ".xml",GetRequests(j))
		except Exception as e:
			print '[!]Error: {0}'.format(e)
		ExtList = ParseXML(path + "\\" + filename + ".xml")
		tmp = path
		pool = ThreadPool(20)
		try:
			pool.map(DownloadAndExtractExt, ExtList)
		except Exception as e:
			print '[!]Error: {0}'.format(e)
		
		"""for Ext in ExtList:
			DownloadAndExtractExt(Ext, path)
			ExtCount += 1"""
		pool.close()
		pool.join() 
	print "-" * 30

if __name__ == "__main__":
	lock = multiprocessing.dummy.Lock()
	Crawler()