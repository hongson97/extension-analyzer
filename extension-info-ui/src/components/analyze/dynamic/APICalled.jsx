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
            accessor: "pageTitle"
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
    
    const newApiData = rawApiData.api_called.map(item => {
        
        if(typeof item.pageTitle === 'undefined')
        {
            console.log(item.pageTitle)
            return {
            ...item,
            pageTitleEmpty: ``
            }   
        }
        return {
          ...item,
        }
      })

    console.log(rawApiData.api_called)
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

export default connect(mapStateToProps)(APICalled)