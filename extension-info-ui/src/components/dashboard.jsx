import {connect} from "react-redux";
import React, {Component} from 'react'

import Permission from './analyze/permission'
import CSP from './analyze/csp'
import ContentScript from './analyze/content_scripts'
import API from './analyze/api'
import Statistics from './analyze/statistics'
import Result from './analyze/dynamic/result'
import Network from './analyze/dynamic/network'
import Dynamic from './analyze/dynamics'
import APICalled from './analyze/dynamic/APICalled'
import DNS from './analyze/dynamic/DNS'
class Dashboard extends Component {

  render() {
    const state = this.props.analyze.state
    console.log(state)
    console.log('PROPS', this.props)

    switch (state) {
      case -1:
        return (
          <div>
            <div className="d-flex justify-content-center">
              <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
            <div className="text-center">
              <h3>You need to calm down. Just wait for a second ;)</h3>
            </div>
          </div>
        );
      case 1:
        return <Permission />;
      case 2:
        return <CSP />;
      case 3:
        return <ContentScript />;
      case 4:
        return <API />;
      case 5:
        return <Statistics />;
      case 6:
        return <Result />;
      case 7:
        return <APICalled />;
      case 8:
      //   raiseInvoiceClicked(){
      //     // your axios call here
      //     localStorage.setItem("pageData", "Data Retrieved from axios request")
      //     // route to new page by changing window.location
      //     window.open(newPageUrl, "_blank") //to open new page
      //  }
        return <Network />;
      case 9:
      return <DNS />;
      case 10:
      return <Dynamic />;
      default:
        return (
          <div className="d-flex justify-content-center flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
            <h1 className="h1">
              <i
                className="icon-arrow-up52 label-icon-lg mr-3"
                style={{ fontSize: "1em" }}
              >
              </i>
              Please submit an extension above to begin
            </h1>
          </div>
        );
    }
  }
}

const mapStateToProps = state => ({
  ...state
})

export default connect(mapStateToProps)(Dashboard)