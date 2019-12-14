import { connect } from "react-redux";
import React, { Component } from "react";
// import {Link} from 'react-router'
import { changeViewState } from "../../actions/analyze.action";

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  renderAnalyzeResult() {}

  render() {
    const isShowResultItem = this.props.analyze.analyzeItem.isShow;
    
    let analyzeResultList = [
      <li className="nav-item permissions-nav">
        <h5 className="text-center">
          {this.props.analyze.result.name
            ? this.props.analyze.result.name
            : null}
        </h5>
      </li>,
      <li
        className="nav-item permissions-nav" onClick={() => this.handleOnChangeView(1)}>
        <a className="nav-link">
          {" "}
          <i className="icon-paragraph-left2 mr-1"></i> Permission
        </a>
      </li>,
      <li className="nav-item" onClick={() => this.handleOnChangeView(2)}>
        <a className="nav-link">
          {" "}
          <i className="icon-shield-notice mr-1"></i> CSP
        </a>
      </li>,
      <li className="nav-item" onClick={() => this.handleOnChangeView(3)}>
        <a className="nav-link">
          {" "}
          <i className="icon-code mr-1"></i> Content Script
        </a>
      </li>,
      <li className="nav-item" onClick={() => this.handleOnChangeView(4)}>
        <a className="nav-link">
          {" "}
          <i className="icon-accessibility mr-1"></i> API
        </a>
      </li>,
      

      <li
      className="nav-item permissions-nav" onClick={() => this.handleOnChangeView(6)}>
      <a className="nav-link">
        {" "}
        <i className="icon-paragraph-left2 mr-1"></i> Result
      </a>
      </li>,
    <li className="nav-item" onClick={() => this.handleOnChangeView(7)}>
      <a className="nav-link">
        {" "}
        <i className="icon-shield-notice mr-1"></i> API Calls
      </a>
    </li>,
    <li className="nav-item" onClick={() => this.handleOnChangeView(8)}>
      <a className="nav-link">
        {" "}
        <i className="icon-code mr-1"></i> Network
      </a>
    </li>,
    <li className="nav-item" onClick={() => this.handleOnChangeView(9)}>
    <a className="nav-link">
      {" "}
      <i className="icon-code mr-1"></i> DNS
    </a>
  </li>,
    ];

    return (
      <nav className="col-md-2 d-none d-md-block bg-light sidebar">
        <div className="sidebar-sticky">
          <ul className="nav flex-column mb-2">
            <li
              className="nav-item manifest-viewer-link-nav"
              onClick={() => this.handleOnChangeView(5)}
            >
              <a className="nav-link">
                {" "}
                <i className="fa fa-pie-chart" aria-hidden="true"></i>{" "}
                Statistics
              </a>
            </li>
          </ul>
          <hr />

          <h6
            className="sidebar-heading justify-content-between align-items-center text-center text-muted"
            style={{ marginTop: "1px !important" }}
          >
            <span>CHROME EXTENSIONS</span>
          </h6>

          <hr />

          <ul className="nav flex-column mb-2">
            {isShowResultItem ? analyzeResultList : null}
          </ul>
        </div>
      </nav>
    );
  }

  handleOnChangeView(state) {
    this.props.dispatch(changeViewState(state));
  }
}

const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps)(SideBar);
