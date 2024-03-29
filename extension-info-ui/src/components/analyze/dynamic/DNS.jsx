import {connect} from "react-redux";
import React, {Component} from 'react'
import ReactTable from 'react-table'
import Highlight from 'react-highlight'
import '../../../../node_modules/highlight.js/styles/googlecode.css'
import moment from 'moment'
class DNS extends Component {
  constructor(props) {
    super(props)

    this.state = {
      table: {
        columns: [
          {
            Header: 'No.',
            maxWidth: 100,
            accessor:"api"
          },
          {
            Header: 'Timeline',
            maxWidth: 200,
            accessor:"time"
          },
          {
            Header: 'Client local',
            style: {'whiteSpace': 'unset'},
            accessor: "request.source"
          },
          {
            Header: 'Domain',
            style: {'whiteSpace': 'unset'},
            accessor: "request.qname"
          },
          {
            Header: 'DNS Server',
            style: {'whiteSpace': 'unset'},
            accessor:"response.source"
          },
          {
            Header: 'CName',
            style: {'whiteSpace': 'unset'},
            accessor: "response.cname_domain"
          },
          {
            Header: 'IP Server',
            style: {'whiteSpace': 'unset'},
            accessor: "response.ip_server"
          },
          
        ]
      }
    }
  }

  render() {
    const rawApiData = this.props.analyze.result_dynamic.Dns    //change this when have database
    console.log("rawApiData")
    console.log(rawApiData)
    const apiData = Object.keys(rawApiData).map(i => {
      return Object.assign({}, {api: i}, rawApiData[i])
    })
    console.log("apiData")
    console.log(apiData)
    const newApiData = apiData.map(item => {
      if(typeof item.response === 'undefined')
      {
        return {
          ...item,
          request: {
            ...item.request,
            source: `${item.request.source_ip}:${item.request.source_port}`
            
          },
          response: {
            ...item.response,
               source: ``
               
          },
          time: moment.unix(item.time).format('D/M/YY H:m:s')
        }
      }
      let result = item.response.resolver.IP
      if(item.response.resolver.IP.length > 1)
      {
        result = item.response.resolver.IP.reduce((temp,item)=> {
          return temp +item+', '
        },"")
      }

      let result_cname = item.response.resolver.CNAME
      if(item.response.resolver.CNAME.length > 1)
      {
        result_cname = item.response.resolver.CNAME.reduce((temp,item)=> {
          return temp +item.substr(0,item.length -1 )+', '
        },"")
      }


      return {
        ...item,
        request: {
          ...item.request,
          source: `${item.request.source_ip}:${item.request.source_port}`
        },
        response: {
          ...item.response,
            source: `${item.response.source_ip}:${item.response.source_port}`,
            ip_server: result,
            cname_domain : result_cname
        },
        time: moment.unix(item.time).format('D/M/YY H:m:s')
      }
    })
    console.log(newApiData)

    

    return (
      <ReactTable
        showPagination={false}
        defaultPageSize={newApiData ? newApiData.length : 5}
        data={newApiData}
        columns={this.state.table.columns}
        />
    )
  }

}

const mapStateToProps = state => ({
  ...state
})

export default connect(mapStateToProps)(DNS)