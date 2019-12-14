import {connect} from "react-redux";
import React, {Component} from 'react'
import ReactTable from 'react-table'

class Permission extends Component {
  constructor(props) {
    super(props)

    this.state = {
      table: {
        columns: [
          {
            Header: 'Permission',
            maxWidth: 200,
            accessor: 'permission'
          },
          {
            Header: 'Description',
            accessor: 'description',
            style: {'whiteSpace': 'unset'}
          },
          {
            Header: 'Warning',
            maxWidth: 200,
            accessor: 'warning',
            style: {'whiteSpace': 'unset'},
          },
        ]
      }
    }
  }

  render() {
    const permissionsData = this.props.analyze.result.permissions

    let data = []

    if (permissionsData) {
      data = Object.keys(permissionsData).map(i => {
        return Object.assign({}, {permission: i}, permissionsData[i])
      })
    }

    console.log(data)
    return (
      <ReactTable
        showPaginationBottom={false}
        defaultPageSize={data ? data.length : 5}
        columns={this.state.table.columns}
        data={data}/>
    )
  }
}

const mapStateToProps = state => ({
  ...state
})

export default connect(mapStateToProps)(Permission)