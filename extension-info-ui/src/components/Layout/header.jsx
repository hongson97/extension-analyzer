import {connect} from "react-redux";
import React, {Component} from 'react'
import {ToastContainer} from 'react-toastify'
import {Link} from 'react-router'
import {sendAnalyzeRequest} from "../../actions/analyze.action";

class Header extends Component {
  // constructor(props) {
  //   super(props)

  // }

  componentDidMoutn() {
  }

  render() {
    return (
      <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
        <ToastContainer/>

        <Link target='/' className="navbar-brand col-sm-3 col-md-2 mr-0 text-center tarnish-logo text-white">    {/* Back-end will handle this */}
          Chrome Extension Analyzer
        </Link>

        <input ref="link"
               // value='https://chrome.google.com/webstore/detail/onenote-web-clipper/gojbdfnpnhogfdgjbigejoaolejmgdhk?hl=vi'
               className="chrome-extension-input form-control form-control-dark w-100"
               type="text"
               value="https://chrome.google.com/webstore/detail/save-to-facebook/jmfikkaogpplgnfjmbjdpalkhclendgd?utm_source=chrome-ntp-icon"
               placeholder="https://chrome.google.com/webstore/detail/example-extension-name/kbfnbca..."/>
        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap">
            <button className="btn btn-dark" onClick={(e) => this.handleOnAnalyze(e)}>
              Analyze Chrome Extension
              <i className="icon-arrow-right32 position-right"></i>  
            </button>
          </li>
        </ul>
        {/*<div className="row">*/}
        {/*<div className="col-md-3 text-white bg-slate text-center" style={{background: '#263238', color: '#ffffffff'}}>*/}
        {/*<h6>EXTENSION INFO</h6>*/}
        {/*</div>*/}
        {/*<div className="col-md-6" style={{background: '#66666666'}}>*/}
        {/*<input className="form-control"/>*/}
        {/*</div>*/}
        {/*<div className="col-md-3 bg-slate" style={{background: '#263238', color: '#ffffffff'}}>*/}
        {/*<button className="btn btn-flat text-slate-800 mt-5">*/}
        {/*Analyze Chrome Extension*/}
        {/*<i className="icon-arrow-right32 position-right"></i>*/}
        {/*</button>*/}
        {/*</div>*/}
        {/*</div>*/}

        {/*<div className="navbar-header">*/}
        {/*<Link className="navbar-brand" href="/Dashboard"></Link>*/}
        {/*</div>*/}
        {/*<div className="row">*/}
        {/*<div className="col-md-7 ml-10">*/}
        {/*<input className="form-control"/>*/}
        {/*</div>*/}
        {/*<div className="nav navbar-nav navbar-right">*/}
        {/*<button className="btn btn-flat text-slate-800 mt-5">*/}
        {/*Analyze Chrome Extension*/}
        {/*<i className="icon-arrow-right32 position-right"></i>*/}
        {/*</button>*/}
        {/*</div>*/}

        {/*</div>*/}
        {/*<div className="collapse navbar-collapse">*/}
        {/*/!*<input className="form-control"/>*!/*/}
        {/*</div>*/}
      </nav>
    )
  }

  handleOnAnalyze() {
    this.props.dispatch(sendAnalyzeRequest(this.refs.link.value))
  }
}

const mapStateToProps = state => ({
  ...state
})

export default connect(mapStateToProps)(Header)