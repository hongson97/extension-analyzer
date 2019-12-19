import {connect} from "react-redux";
import React, {Component} from 'react'
import {Pie} from 'react-chartjs-2'
import ReactTable from 'react-table'
import Report from './Report.json'

class Statistics extends Component {

  constructor(props) {

    super(props)

    this.state = {
      data:  Report,
      perms_columns: [
        {
          Header: 'Permission',
          accessor: 'criteria',
          className: 'text-center'
        },
        {
          Header: 'Quantity',
          accessor: 'quantity',
          className: 'text-center'
        }
      ],
      id_columns: [
        {
          Header: 'Extension ID',
          accessor: 'criteria',
          className: 'text-center'
        },
        {
          Header: 'Quantity',
          accessor: 'quantity',
          className: 'text-center'
        }
      ],
      api_columns: [
        {
          Header: 'API',
          accessor: 'criteria',
          className: 'text-center'
        },
        {
          Header: 'Quantity',
          accessor: 'quantity',
          className: 'text-center'
        }
      ]
    }
  }

  render() {
    //where to produce tables
    const top_ext_perms_table = this.state.data.top_10_ext_perms.map(i => {
      return Object.assign({}, {criteria: i[0]}, {quantity: i[1]})
    })
    const top_ext_warn_perms_table = this.state.data.top_10_ext_warn_perms.map(i => {
      return Object.assign({}, {criteria: i[0]}, {quantity: i[1]})
    })
    const top_ext_high_risk_table = this.state.data.top_10_ext_high_risk.map(i => {
      return Object.assign({}, {criteria: i[0]}, {quantity: i[1]})
    })
    const top_perms_table = this.state.data.top_perms.map(i => {
      return Object.assign({}, {criteria: i[0]}, {quantity: i[1]})
    })

    const top_warn_perms_table = this.state.data.top_warn_perms.map(i => {
      return Object.assign({}, {criteria: i[0]}, {quantity: i[1]})
    })

    const top_api_table = this.state.data.top_api.map(i => {
      return Object.assign({}, {criteria: i[0]}, {quantity: i[1]})
    })

    
    const pieChartData = {
      labels: [
        'Above 50',
        "Above 30",
        "Above 15",
        "Below 15",
        'Safe'
      ],
      datasets: [
        {
          data: [9407, 11704, 111812, 70263, 77146],
          backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#61ff73',
            '#123543'
          ],
          hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#61ff73',
            '#123543'
          ]
        }
      ],
      position: "bottom"
    }
    return (
      <div className="unstarted-dashboard">
        {/* row 1 */}
        {/* Add more tables below here */}
        <div className="row">
          <div className="col-md-4">
            <center>
              <h3>Top 10 Extensions with the most permissions</h3>
            </center>
            <ReactTable
              className="table table-light text-center"
              defaultPageSize={top_warn_perms_table.length}
              showPagination={false}
              data={top_ext_perms_table}
              columns={this.state.id_columns}
            />
          </div>
          <div className="col-md-4">
            <center>
              <h3>Top 10 Extensions with the most warn permissions</h3>
            </center>
            <ReactTable
              className="table table-light text-center"
              defaultPageSize={top_ext_warn_perms_table.length}
              showPagination={false}
              data={top_ext_warn_perms_table}
              columns={this.state.id_columns}
            />
          </div>
          <div className="col-md-4">
            <center>
              <h3>
                Top 10 Extensions with <br></br>highest risk
              </h3>
            </center>
            <ReactTable
              className="table table-light text-center"
              defaultPageSize={top_ext_high_risk_table.length}
              showPagination={false}
              data={top_ext_high_risk_table}
              columns={this.state.id_columns}
            />
          </div>
        </div>

        {/* row 2 */}
        <div className="row">
          <div className="col-md-6">
            <center>
              <h3>Top 10 Permissions</h3>
            </center>
            <ReactTable
              className="table table-bordered"
              data={top_perms_table}
              defaultPageSize={top_perms_table.length}
              showPagination={false}
              columns={this.state.perms_columns}
            />
          </div>
          <div className="col-md-6">
            <center>
              <h3>Top 10 Permission With Warning</h3>
            </center>
            <ReactTable
              className="table table-light"
              data={top_warn_perms_table}
              defaultPageSize={top_warn_perms_table.length}
              showPagination={false}
              columns={this.state.perms_columns}
            />
          </div>
        </div>

        {/* Row 3 */}
        <div className="row">
          <div className="col-md-4">
            <center>
              <h4>
                Dangerous Api Average: <span>{this.state.data.api_avg}</span>
              </h4>
            </center>
            <ReactTable
              className="table table-light"
              defaultPageSize={top_warn_perms_table.length}
              showPagination={false}
              data={top_api_table}
              columns={this.state.api_columns}
            />
          </div>
          <div className="col-md-8">
            <Pie data={pieChartData} legend={{ position: "bottom" }} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 justify-content-center">
            <h4>
              Permissions Average: <span>{this.state.data.perms_avg}</span>
            </h4>
          </div>
          <div className="col-md-4 justify-content-center">
            <h4>Extension Request The Most Permissions:</h4>
            <h6>
              {this.state.data.perms_highest.name}:{" "}
              <span>{this.state.data.perms_highest.quantity}</span> permissions
            </h6>
          </div>
          <div className="col-md-4 justify-content-center">
            <h4>
              Permission With Warning Average:{" "}
              <span>{this.state.data.warn_perms_avg}</span>
            </h4>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({})
export default connect(mapStateToProps)(Statistics)