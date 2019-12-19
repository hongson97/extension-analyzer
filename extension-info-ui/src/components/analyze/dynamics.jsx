import {connect} from "react-redux";
import React, {Component} from 'react'
import {Pie} from 'react-chartjs-2'
import ReactTable from 'react-table'
import dynamicReport from './dynamicReport.json'

class Dynamic extends Component {

  constructor(props) {

    super(props)

    this.state = {
      data:  dynamicReport,
      topApiCol: [
        {
          Header: 'name',
          accessor: 'name',
          className: 'text-center'
        },
        {
          Header: 'quantity',
          accessor: 'quantity',
          className: 'text-center'
        }
      ],
      topExtensionCol: [
        {
          Header: 'id',
          accessor: 'id',
          className: 'text-center'
        },
        {
          Header: 'quantity',
          accessor: 'quantity',
          className: 'text-center'
        }, 
        {
            Header: 'behavior',
            accessor: 'behavior',
            className: 'text-center'
        }
        
      ],
      TopBehaviorCol: [
        {
          Header: 'name',
          accessor: 'name',
          className: 'text-center'
        },
        {
          Header: 'quantity',
          accessor: 'quantity',
          className: 'text-center'
        }
      ],
      
    }
  }

  
  render() {
    console.log(this.state.data.Total)
    //where to produce tables
    let topApiTbl =[]
    const topApiData = this.state.data.top_10_api_called
    for (const property in topApiData) {
      topApiTbl.push({name: property, quantity: topApiData[property] })
    }
    const  topExtensionTbl = this.state.data.top_10_extension_malicious.map(i => {
      return {
        id: i.id,
        quantity: i.count,
        behavior: i.behavior.reduce((re, cur)=> re + ', ' + cur)
      }
    })
    const topBehaviorTbl = this.state.data.top_behavior_sorted.map(i => {
      return {
        name: i.name,
        quantity: i.count
      }
    })
    console.log(this.state.data.top_10_extension_malicious, topExtensionTbl, topApiTbl, topBehaviorTbl)

    const pieChartData = {
      labels: [
        'Malicious',
        "Suspicious",
        "Clean",
      ],
      datasets: [
        {
          data: [dynamicReport.Malicious, dynamicReport.Suspicious, dynamicReport.Clean],
          backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
          ],
          hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
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
          <div className="col-md-6">
            <center>
              <h3>Top 10 Extensions malicious</h3>
            </center>
            <ReactTable
              className="table table-light text-center"
              defaultPageSize={topExtensionTbl.length}
              showPagination={false}
              data={topExtensionTbl}
              columns={this.state.topExtensionCol}
            />
          </div>
          <div className="col-md-6">
            <center>
              <h3>Top API called</h3>
            </center>
            <ReactTable
              className="table table-light text-center"
              defaultPageSize={topApiTbl.length}
              showPagination={false}
              data={topApiTbl}
              columns={this.state.topApiCol}
            />
          </div>
          <div className="col-md-6">
            <center>
              <h3>
                Top 10 Behevior sort
              </h3>
            </center>
            <ReactTable
              className="table table-light text-center"
              defaultPageSize={topBehaviorTbl.length}
              showPagination={false}
              data={topBehaviorTbl}
              columns={this.state.TopBehaviorCol}
            />
          </div>

          <div className="col-md-6">
            <Pie data={pieChartData} legend={{ position: "bottom" }}  />
          </div>
        </div>


        
      </div>
      );
  }
}
const mapStateToProps = state => ({})
export default connect(mapStateToProps)(Dynamic)