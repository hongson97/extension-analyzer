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
            Header: 'Order',
            maxWidth: 100,
            accessor:"api"
          },
          {
            Header: 'Timeline',
            maxWidth: 200,
            accessor:"time"
          },
          {
            Header: 'Request',
            style: {'whiteSpace': 'unset'},
            accessor: "request.source"
          },
          {
            Header: 'Response',
            style: {'whiteSpace': 'unset'},
            accessor:"response.source_ip"
          },
        ]
      }
    }
  }

  render() {
    const rawApiData = this.props.analyze.result_dynamic.result.Dns    //change this when have database
    console.log("rawApiData")
    //console.log(rawApiData)
    const apiData = Object.keys(rawApiData).map(i => {
      return Object.assign({}, {api: i}, rawApiData[i])
    })
    const newApiData = apiData.map(item => {
      return {
        ...item,
        request: {
          ...item.request,
          source: `${item.request.source_ip}:${item.request.source_port}`
        }
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

export default connect(mapStateToProps)(API)