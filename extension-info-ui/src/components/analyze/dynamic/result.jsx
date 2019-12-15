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
            maxWidth: 500,
            accessor: 'apis'
          },
          {
            Header: "Times",
            accessor: 'apis.value',
            style: {'whiteSpace': 'unset', 
                      'text-center': 'set'}
          },

        ],
        
      }
    }
  }

  render() {
    const rawApiData = this.props.analyze.result_dynamic.result.Report.apis   //change this when have database
    console.log(this.props.Report)
    console.log(rawApiData)
    const apiData = Object.keys(rawApiData).map(i => {
      return Object.assign({}, {api: i}, rawApiData[i])
    })
    console.log(apiData)
    return (
      
      <div>
        <h2>Number has called: {this.props.analyze.result_dynamic.result.Report.total_api} </h2>
      <h2> 123</h2>
      <ReactTable
        showPagination={false}
        defaultPageSize={apiData ? apiData.length : 5}
        data={apiData}
        columns={this.state.table.columns}/>
        <br></br>
      <h5> ABC</h5>
        <ReactTable
        showPagination={false}
        defaultPageSize={apiData ? apiData.length : 5}
        data={apiData}
        columns={this.state.table.columns}/>
        </div>
    )
  }

}

const mapStateToProps = state => ({
  ...state
})

export default connect(mapStateToProps)(API)