import {connect} from "react-redux";
import React, {Component} from 'react'
import ReactTable from 'react-table'
import Highlight from 'react-highlight'
import '../../../node_modules/highlight.js/styles/googlecode.css'

class API extends Component {
  constructor(props) {
    super(props)

    this.state = {
      table: {
        columns: [
          {
            Header: 'API',
            maxWidth: 200,
            accessor: 'api'
          },
          {
            Header: 'Behavior',
            accessor: 'behavior',
            style: {'whiteSpace': 'unset'}
          },
          {
            Header: 'Risk',
            maxWidth: 200,
            accessor: 'risk',
            style: {'whiteSpace': 'unset'},
            Cell: row => {
              switch (row.original.risk) {
                case 'Low risk':
                  return <div className='text-black-50'>Low Risk</div>
                case 'Medium risk':
                  return <div className='text-warning'>Medium Risk</div>
                case 'High risk':
                  return <div className='text-danger'>High Risk</div>
                default:
              }
            }
          },
        ],
        subTable: {
          columns: [
            {
              Header: 'file',
              accessor: 'file',
              minWidth: 100,
              maxWidth: 150,
            },
            {
              Header: 'Line',
              // accessor: 'line_number',
              minWidth: 50,
              maxWidth: 50,
              Cell: row => {
                return row.original.lines.map((line, index) => {
                  if (line[`code_${(index + 1)}`])
                    return <Highlight className="javascript hljs m-0">{line[`line_${(index + 1)}`]}</Highlight>
                })
              }
            },
            {
              Header: 'Code',
              accessor: 'code',
              Cell: row => {
                return row.original.lines.map((line, index) => {
                  if (line[`code_${(index + 1)}`])
                    return <Highlight className="javascript hljs m-0">{line[`code_${(index + 1)}`]}</Highlight>
                })
              }
            }
          ]
        }
      }
    }
  }

  render() {
    const rawApiData = this.props.analyze.result.api
    console.log(rawApiData)
    const apiData = Object.keys(rawApiData).map(i => {
      return Object.assign({}, {api: i}, rawApiData[i])
    })
    console.log(apiData)
    return (
      <ReactTable
        showPagination={false}
        defaultPageSize={apiData ? apiData.length : 5}
        data={apiData}
        columns={this.state.table.columns}
        SubComponent={row => {
          console.log(row.original)
          return (
            <div style={{padding: '20px'}}>
              <ReactTable
                data={row.original.lines_found}
                columns={this.state.table.subTable.columns}
                defaultPageSize={5}
              />
            </div>
          )
        }}/>
    )
  }
}

const mapStateToProps = state => ({
  ...state
})

export default connect(mapStateToProps)(API)