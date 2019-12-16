import pymongo
import json
import os
def init_database(collection):
    myclient = pymongo.MongoClient("mongodb://localhost:27017/")
    mydb = myclient["ChromeExtension"]
    mycol = mydb[collection]
    return mycol

mycol = init_database("DNS")
extension_folder = r"C:\Users\navi\Desktop\KhoaLuan\extensions"
extension_list = next(os.walk(extension_folder))[1]
for idx in extension_list:
    collection_dns = mycol.find({"idx":idx})
    dns_domain_whitelist = []

    with open("white_list_dns.json", 'r') as f:
        entry = json.load(f)

    dns_domain_whitelist = entry["domain"]
    for col in collection_dns:
        qname = col['request']['qname'][:-1]
        if(qname not in dns_domain_whitelist):
            print(qname)        
            dns_domain_whitelist.append(qname)
    dns_whitelist_loggin = {}
    dns_whitelist_loggin["domain"] = dns_domain_whitelist

    json_parse = json.dumps(dns_whitelist_loggin, indent=4)
    open("white_list_dns.json", "w").write(json_parse)