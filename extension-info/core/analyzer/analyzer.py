#!/usr/bin/python3
from GLib import *
from mongodb import *
import time
import os

def main():
    parser = argparse.ArgumentParser(prog='analyzer.py')
    parser.add_argument("-l", "--link",help="Link to analyze",required=False)
    parser.add_argument("-i", "--id",help="ID to analyze",required=False)
    parser.add_argument("-n", "--name",help="Name of Extension",required=False)
    parser.add_argument("-a", "--all",help="All",required=False)
    args = parser.parse_args()
    if args.link:
        ID, Name = GetExtID(args.link)   #get ID, ext name

        Extdir = DownloadAndExtractExt(ID, Name)   #return result in DB
        if Extdir == "Already":  #Already in DB
            pass

        elif Extdir != "Error":
            # collection = ConnectMongoDB("Analyzer")
            # ExtensionAnalyzer(collection, ID, Extdir)
            if (CheckMongoDB(ID) == None):
                collection = ConnectMongoDB("Analyzer")
                ExtensionAnalyzer(collection, ID, Extdir)
        else:
            print("Error when download and extract Ext")
            return
        print(ID)

        # ExtensionAnalyzer(ID, 'G:\\New\\Extensions\\SOURCE\\WEB\\extension-info\\core\\analyzer\\Data\\shard=0&numshards=992\\' + Ext)
    elif args.all:
        collection = ConnectMongoDB("Analyzer")
        get_count = collection.estimated_document_count()
        print(get_count)
        start = time.time()
        # PutReportIntoDB(GenReport(collection))
        # try:
        #     #get_count
        #     for count in range(get_count, len(GetListExt(database))):   
        #         ID, Ext = GetListExt(database)[count]

        #         if CheckMongoDB(ID):
        #             continue
        #         else:
        #             # InsertMongoDB(ID)
        #             ExtensionAnalyzer(collection, ID, Ext) 
        #             count += 1
        #             print("Extension #{}".format(count))    
        #             if count == get_count + 1000: #13337
        #                 break    
        # except Exception as E: 
        #     print(E)
        #     print(ID, Ext, sep=" - ",end="\n")
        # finally:
        result = GenReport(collection) #result is a dict
        PutReportIntoDB(result)
        print("Finish: %d"%(time.time()- start))
            # os.system('shutdown -s')
    elif args.id:
        result = SearchByID(args.id)
        print(result)
    elif args.name:
        result = SearchByName(args.name)
    else:
        print('Nothing to show')

if __name__ == "__main__":
    main()