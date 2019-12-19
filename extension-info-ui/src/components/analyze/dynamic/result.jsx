import {connect} from "react-redux";
import React, {Component} from 'react'
import ReactTable from 'react-table'
import Highlight from 'react-highlight'
import '../../../../node_modules/highlight.js/styles/googlecode.css'

class API extends Component {
  constructor(props) {
    super(props)

    this.state = {
      table: {
        columns: [
          {
            Header: "API name",
            width: 800,
            accessor: "api"
          },
          {
            Header: "Times",
            width: 200,
            accessor: "rawApiData"
          }
        ]
      },
      behavior_table: {
        columns: [
          {
            Header: "Behavior name",
            width: 800,
            accessor: "name"
          },
          {
            Header: "Times",
            width: 800,
            accessor: "times"
          }
        ]
      },
      subTable: {
        columns: [
          {
            //1st columnn
            Header: 'Type',
            accessor: 'type',
            width: 800
          },
          {
            //2nd columnn
            Header: 'value',
            minWidth: 50,
            maxWidth: 50,
            accessor: "value"
          },
        ]
      },
      subTableHTTP: {
        columns: [
          {
            //1st columnn
            Header: 'Domain',
            accessor: 'domain',
            width: 800
          },
          {
            //2nd columnn
            Header: '4xx Error Code',
            minWidth: 150,
            maxWidth: 150,
            accessor: "errCode"
          },
        ]
      }
    };
  }

  render() {
    const rawApiData = this.props.analyze.result_dynamic.result.Report.apis   //change this when have database
    console.log(rawApiData)
    let apiData = [];
    Object.keys(rawApiData).forEach(i => {
      apiData.push({
        api : i,
        rawApiData: rawApiData[i]
      })
    })
    console.log(apiData)
    let behaviorNames = ['uninstall_other_extension', 'prevents_extension_uninstall', 'keylogging_functionality', 'steal_information_form', 'block_antivirus_site', 
    'deleted_response_headers', 'injects_dynamic_javascript', 'get_all_cookies', 'http_request_4xx'];
  
    let behavior = behaviorNames.map(behaviorName=> {
      return {
        name: behaviorName,
        times: this.props.analyze.result_dynamic.result.Report[behaviorName].length
      }
    })

    let  behaviorData = {};
    behaviorNames.forEach(behaviorName => {
      let rawApiData =  this.props.analyze.result_dynamic.result.Report[behaviorName]
      if (behaviorName =='http_request_4xx'){
      console.log(behavior) }
      let myData = rawApiData.map(e => {
        if(behaviorName !== "http_request_4xx")
        return {
          type: e.activityType,
          value: e.apiCall,
        }
        return {
          domain: Object.keys(e)[0],
          errCode: Object.values(e)[0],
        }
      })
      behaviorData = {
        ...behaviorData,
        [behaviorName] : myData,

      }
    })


    return (
      <div>
        <h2 className="text-center">Numbers of API has called: {this.props.analyze.result_dynamic.result.Report.total_api} </h2>
      <h4>API name</h4>
      <ReactTable
        showPagination={false}
        defaultPageSize={apiData ? apiData.length : 5}
        data={apiData}
        columns={this.state.table.columns}/>
        <br></br>

      <h4> Behaviors</h4>
        <ReactTable
        showPagination={false}
        defaultPageSize={behavior.length !== 0 ? behavior.length : 5}
        data={behavior}
        columns={this.state.behavior_table.columns}
        SubComponent={row => {
          if(row.original.name === "http_request_4xx"){
            return (
              <div style={{padding: '20px'}}>
                <ReactTable
                  data={behaviorData[row.original.name]}
                  columns={this.state.subTableHTTP.columns}
                  defaultPageSize={behaviorData[row.original.name].length}
                />
              </div>
            )
          }
          return  (
            <div style={{padding: '20px'}}>
              <ReactTable
                data={behaviorData[row.original.name]}
                columns={this.state.subTable.columns}
                defaultPageSize={behaviorData[row.original.name].length}
              />
            </div>
          )
        }}
        />
        </div>
    )
  }
}
const mapStateToProps = state => ({
  ...state
})

export default connect(mapStateToProps)(API)