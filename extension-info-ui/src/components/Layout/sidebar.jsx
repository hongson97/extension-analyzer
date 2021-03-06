import { connect } from "react-redux";
import React, { Component } from "react";
// import {Link} from 'react-router'
import { changeViewState } from "../../actions/analyze.action";
import Logo  from "./Logo_UIT_In.jpg"

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() { }

  renderAnalyzeResult() { }

  render() {
    const isShowResultItem = this.props.analyze.analyzeItem.isShow;
    const state = this.state;
    let analyzeResultList = [
      <li key="1" className="nav-item permissions-nav">
        <h5 className="text-center">
          {this.props.analyze.result.name
            ? this.props.analyze.result.name
            : null}
        </h5>
      </li>,
      <li key="2">
        <div>
          <hr />

          <h6
            className="sidebar-heading justify-content-between align-items-center text-center text-muted"
            style={{ marginTop: "1px !important" }}
          >
            <span>STATIC ANALYSE</span>
          </h6>

          <hr />
        </div>
      </li>,
      <li
      key="3"
        style={{ cursor: 'pointer' }}
        className="nav-item permissions-nav" onClick={() => this.handleOnChangeView(1)}>
        <a className={`nav-link`}>

          {" "}
          <i className="icon-paragraph-left2 mr-1"></i> Permission
        </a>
      </li>,
      <li key="4" style={{ cursor: 'pointer' }}
        className="nav-item" onClick={() => this.handleOnChangeView(2)}>
        <a className="nav-link">
          {" "}
          <i className="icon-shield-notice mr-1"></i> CSP
        </a>
      </li>,
      <li key="5" style={{ cursor: 'pointer' }} className="nav-item" onClick={() => this.handleOnChangeView(3)}>
        <a className="nav-link">
          {" "}
          <i className="icon-code mr-1"></i> Content Scripts
        </a>
      </li>,
      <li key="6" style={{ cursor: 'pointer' }} className="nav-item" onClick={() => this.handleOnChangeView(4)}>
        <a className="nav-link">
          {" "}
          <i className="icon-accessibility mr-1"></i> API
        </a>
      </li>,
      <li key="7">
        <div>
        <hr />

        <h6
          className="sidebar-heading justify-content-between align-items-center text-center text-muted"
          style={{ marginTop: "1px !important" }}
        >
          <span>DYNAMIC ANALYSE</span>
        </h6>

        <hr />
      </div>
      </li>,

      <li
      key="8"
        style={{ cursor: 'pointer' }} className="nav-item permissions-nav" onClick={() => this.handleOnChangeView(6)}>
        <a className="nav-link">
          {" "}
          <i className="icon-paragraph-left2 mr-1"></i> Result
      </a>
      </li>,
      <li key="9" style={{ cursor: 'pointer' }} className="nav-item" onClick={() => this.handleOnChangeView(7)}>
        <a className="nav-link">
          {" "}
          <i className="icon-shield-notice mr-1"></i> API Calls
      </a>
      </li>,
      <li key="11" style={{ cursor: 'pointer' }} className="nav-item" onClick={() => this.handleOnChangeView(9)}>
        <a className="nav-link">
          {" "}
          <i className="icon-code mr-1"></i> DNS
    </a>
      </li>,
      <li key="12">
      <div>
        <hr />

        <h6
          className="sidebar-heading justify-content-between align-items-center text-center text-muted"
          style={{ marginTop: "1px !important" }}
        >
          <span>ABOUT</span>
        </h6>
        <hr />
        <li className="justify-content-between text-center font-weight-bold"> Chrome Extension Analyzer</li>
        {" "}
        <img className="rounded mx-auto d-block" src={Logo} height="200" weight="200" ></img>
      </div>
    </li>,
    ];

    return (
      <nav className="col-md-2 d-none d-md-block bg-light sidebar">
        <div className="sidebar-sticky">
          {!isShowResultItem && (
            <>
              <ul className="nav flex-column mb-2">
                <li
                  style={{ cursor: "pointer" }}
                  className="nav-item manifest-viewer-link-nav"
                  onClick={() => this.handleOnChangeView(5)}
                >
                  <a className="nav-link">
                    {" "}
                    <i className="fa fa-pie-chart" aria-hidden="true"></i> Static Statistics
              </a>
                </li>
              </ul>

              <ul className="nav flex-column mb-2">
                <li
                  style={{ cursor: "pointer" }}
                  className="nav-item manifest-viewer-link-nav"
                  onClick={() => this.handleOnChangeView(10)}
                >
                  <a className="nav-link">
                    {" "}
                    <i className="fa fa-pie-chart" aria-hidden="true"></i> Dynamic Statistics
              </a>
                </li>
              </ul>
            </>
          )}
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
