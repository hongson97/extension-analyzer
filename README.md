# extension-analyzer

The tool that helps users submit and analyze Google Chrome extensions and identify malicious
extensions. The tool was built to combine both static and dynamic analysis, giving it the most
accurate results

# Requirement
- Winpcap
- Java 
- Nodejs
- Python3


# Install
Make sure:
- Add certificate of Browsermod to Certificate store. Path of certficate `extension-info\core\analyzer\source\sandbox\proxy\browsermob-proxy-2.1.4\ssl-support`

- Version Google Chrome browser math chromedriver in `extension-info\core\analyzer\source\sandbox\driver\chromedriver.exe`

1. Install extension monitor in Google Chrome browser
Drag and drop folder : extension-info\core\analyzer\source\extension_Monitor to chrome://extension

2. Running web-api server to listen request from extension

```sh
cd extension-info\core\analyzer\source\sandbox\web_api\
python webapi.py
```

3. Install package and start them

```sh
cd extension-analyzer-master\extension-info-ui
npm install
npm start
cd C:\Users\CoreMember\Downloads\extension-analyzer-master\extension-info
npm install
node app.js
```

