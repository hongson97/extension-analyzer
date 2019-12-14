import React from 'react'
import {Link} from 'react-router'

function Sidebar(Component) {
  class Siderbar extends React.Component {
    constructor(props){
      super(props);
    }

    render() {
      return (
        <nav className="col-md-2 d-none d-md-block bg-light sidebar">
          <div className="sidebar-sticky">
            <ul className="nav flex-column">
              <li className="nav-item extension-name-nav">
              </li>
            </ul>
            <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted"
                style={{'margin-top': '1px !important'}}>
              <span>CHROME EXTENSION TOOLS</span>
            </h6>

            <hr/>

            <ul className="nav flex-column mb-2">
              <li className="nav-item manifest-viewer-link-nav">
                <Link to='/result'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                       stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                       className="feather feather-code">
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                  <code>Result</code>
                  <Component {...this.props}/>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      )
    }
  }

}