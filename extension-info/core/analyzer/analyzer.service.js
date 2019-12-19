const path = require('path')
const util = require('util')
const fs = require('fs')
const execFile = util.promisify(require('child_process').execFile);
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');


class AnalyzerService {
    static async analyzeLink(link) {
        const analyzePyPath = path.resolve(__dirname, 'analyzer.py')
        let { stderr, stdout } = await execFile('python3', [analyzePyPath, '-l', link], { shell: true, cwd: path.resolve(__dirname) }) //stdout == Output(Ext)
        if (stderr) {
            throw new Error("Error at analyze ext. Analyzer.service.js")
        } else {
            stdout = stdout.replace(/\r?\n|\r/g, "")
                // Connection URL
            const url = 'mongodb://localhost:27017';
            // Database Name
            const dbName = 'Thesis';
            try {
                const client = await MongoClient.connect(url);
                const db = client.db(dbName);
                const collection = db.collection('Analyzer');
                console.log('Stdout', stdout)
                const outputData = await collection.findOne({ id: stdout });
                //console.log('Output', outputData)
                client.close();
                return { data: outputData }
            } catch (err) {
                console.log('Err' + err)
                return { data: null }
            }

            // const outputFilePath = path.resolve(__dirname,stdout)
            // const outputFileData = fs.readFileSync(outputFilePath).toString()
            //need to understand this
        }
    }

    static async DynamicAnalyzer(link) {
        const analyzePyPath = path.resolve(__dirname, 'source\\sandbox\\sandbox.py')
        let { stderr, stdout } = await execFile('python3', [analyzePyPath, '-l', link], { shell: true, cwd: path.resolve(__dirname) }) //stdout == Output(Ext)
        if (stderr) {
            throw new Error("Error at analyze ext. Analyzer.service.js")
        } else {
            var searchTerm = "@@@"
            stdout = stdout.replace(/\r?\n|\r/g, "");
            console.log("DynamicAnalyzer stdout:" + stdout)
            if (stdout == "None") {
                return { data: null }
            }

            const regx = /@@@(.+)@@@/
            const value = regx.exec(stdout)[1];
            //console.log(value)
            //console.log(stdout)
            // Connection URL
            const url = 'mongodb://localhost:27017';
            // Database Name
            const dbName = 'ChromeExtension';
            try {
                const client = await MongoClient.connect(url);
                const db = client.db(dbName);
                const collection_report = db.collection('REPORT_FINAL');
                const collection_dns = db.collection('DNS');
                const collection_network = db.collection('NETWORK');
                const outputData_report = await collection_report.findOne({ id: value });
                const outputData_dns = await collection_dns.find({ idx: value }).toArray()
                const outputData_network = await collection_network.findOne({ idx: value });
                let outputData = {}
                outputData.Report = outputData_report
                outputData.Network = outputData_network
                outputData.Dns = outputData_dns
                    //console.log(outputData)
                client.close();
                return { data: outputData }
            } catch (err) {
                console.log('Err' + err)
                return { data: null }
            }

            // const outputFilePath = path.resolve(__dirname,stdout)
            // const outputFileData = fs.readFileSync(outputFilePath).toString()
            //need to understand this
        }
    }
}

module.exports = AnalyzerService