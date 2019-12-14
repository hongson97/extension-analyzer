import React, {Component} from 'react';
import Header from "./Layout/header";
import SideBar from "./Layout/sidebar";
import Dashboard from './dashboard'
import {connect} from "react-redux";

class Home extends Component {
  // constructor(props) {
  //   super(props)
  // }
  render() {
    return (
      <div>
        <Header/>
        <div className="container-fluid">
          <div className="row">
            <SideBar/>
            <div className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
              <div className="unstarted-dashboard">
                <Dashboard/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({...state})

export default connect(mapStateToProps)(Home)