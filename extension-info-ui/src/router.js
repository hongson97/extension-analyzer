import React, { Component } from 'react'
import { Route, Router } from 'react-router'
import Statistics from "./components/analyze/statistics";
import Home from "./components/home";
import {connect} from "react-redux";

class CustomRouter extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log(this.props)
    return (
      <main>
        <Router history={this.props.history}>
          <Route path='/dashboard' component={Home}></Route>
          <Route path='/result' component={Statistics}></Route>
          <Route path='/' component={Home}></Route>
        </Router>
      </main>
    )
  }
}

CustomRouter = connect(function (state) {
  return {...state}
})(CustomRouter);

export default CustomRouter