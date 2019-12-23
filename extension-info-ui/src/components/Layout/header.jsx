import { connect } from "react-redux";
import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import { Link } from "react-router";
import { sendAnalyzeRequest } from "../../actions/analyze.action";

class Header extends Component {
  // constructor(props) {
  //   super(props)

  // }

  componentDidMoutn() {}
  handleChange(e) {
    e.preventDefault();
    // console.log(e)

    if (e.keyCode === 13) {
      this.handleOnAnalyze(e);    
    }
  }
  render() {
    return (
      <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
        <ToastContainer />

        <Link
          to="/"
          className="navbar-brand col-sm-3 col-md-2 mr-0 text-center tarnish-logo text-white"
        >
          Chrome Extension Analyzer
        </Link>

        <input
          ref="link"
          id="ext_link"
          // value='https://chrome.google.com/webstore/detail/onenote-web-clipper/gojbdfnpnhogfdgjbigejoaolejmgdhk?hl=vi'
          className="chrome-extension-input form-control form-control-dark w-100"
          type="text"
          //  value="https://chrome.google.com/webstore/detail/save-to-facebook/jmfikkaogpplgnfjmbjdpalkhclendgd?utm_source=chrome-ntp-icon"
          placeholder="https://chrome.google.com/webstore/detail/example-extension-name/kbfnbca..."
          onKeyUp={e => this.handleChange(e)}
        />
        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap">
            <button
              className="btn btn-dark"
              onClick={e => {
                var linkbox = document.getElementById("ext_link").value;
                if (linkbox === "") {
                  alert("Link is empty, please input an extension link!");
                  return false;
                }
                this.handleOnAnalyze(e);
              }}
            >
              Analyze Chrome Extension
              <i className="icon-arrow-right32 position-right"></i>
            </button>
          </li>
        </ul>
      </nav>
    );
  }

  handleOnAnalyze() {
    this.props.dispatch(sendAnalyzeRequest(this.refs.link.value));
  }
}

const mapStateToProps = state => ({
  ...state
});

export default connect(mapStateToProps)(Header);
