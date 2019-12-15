import {connect} from "react-redux";
import React, {Component} from 'react'
import ReactTable from 'react-table'
import Highlight from 'react-highlight'
import '../../../../node_modules/highlight.js/styles/googlecode.css'

class APICalled extends Component {
  constructor(props) {
    super(props)

    this.state = {
      table: {
        columns: [
          {
            Header: 'Timeline',
            maxWidth: 200,
            accessor:"time"
          },
          {
            Header: 'ActivityType',
            style: {'whiteSpace': 'unset'},
            accessor: "activityType"
          },
          {
            Header: 'ApiCall',
            style: {'whiteSpace': 'unset'},
            accessor: "apiCall"
          },
          {
            Header: 'Args',
            style: {'whiteSpace': 'unset'},
            accessor:"args"
          },
          {
            Header: 'Page Title',
            style: {'whiteSpace': 'unset'},
            accessor: "args"
          },
          {
            Header: 'Page Url',
            style: {'whiteSpace': 'unset'},
            accessor: "args"
          },
          {
            Header: 'Other',
            style: {'whiteSpace': 'unset'},
            accessor: "args"
          },
          
        ]
      }
    }
  }

  render() {
    const rawApiData = this.props.analyze.result_dynamic.result.Report    //change this when have database
    console.log(rawApiData.api_called)
    //console.log(rawApiData)
    
    const apiData = Object.keys(rawApiData.api_called).map(i => {
      return Object.assign({}, {api: i.api_called},   [i.api_called])
    })

    console.log(rawApiData.api_called)
    return (
      <ReactTable
        showPagination={false}
        defaultPageSize={rawApiData.api_called ? rawApiData.api_called.length : 5}
        data={rawApiData.api_called}
        columns={this.state.table.columns}
        />
    )
  }

}

const mapStateToProps = state => ({
  ...state
})

export default connect(mapStateToProps)(APICalled)