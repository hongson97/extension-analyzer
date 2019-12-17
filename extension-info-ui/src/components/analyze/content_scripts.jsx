import {connect} from "react-redux";
import React, {Component} from 'react'

class ContentScript extends Component {

  constructor(props) {
    super(props)

  }

  render() {
    const contentScriptData = this.props.analyze.result.content_scripts

    if (contentScriptData.length !== 0) {
    return (
 
      <div>
        {
          contentScriptData.map(contentScript => {
            return (
              <div className='row justify-content-center mb-2'>
                <ul className='list-group col-md-6'>
                  <li className='list-group-item active bg-dark'>JS</li>
                  {
                    contentScript.js.map(js=><li className='list-group-item'>{js}</li>)
                  }
                </ul>
                <ul className='list-group col-md-6'>
                  <li className='list-group-item active bg-dark'>MATCHES</li>
                  {contentScript.matches.map(match=><li className='list-group-item'>{match}</li>)}
                </ul>
                <hr/>
              </div>
            )
          })
        }

      </div>
    )
      }
      else 
      return (
        <div className="text-center">
          <h1>This extension does not have Content Script</h1>
        </div>
      );
  }

  renderTable(listJss, listMatches) {
    let table = <table></table>

  }
}

const mapStateToProps = state => ({
  ...state
})

export default connect(mapStateToProps)(ContentScript)