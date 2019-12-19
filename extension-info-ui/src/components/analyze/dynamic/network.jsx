import {connect} from "react-redux";
import React, {Component} from 'react'
import ReactTable from 'react-table'
import Highlight from 'react-highlight'
import '../../../../node_modules/highlight.js/styles/googlecode.css'

class API extends Component {
  constructor(props) {
    super(props)

    this.state = {
      
    }
  }
    rawMarkup(){
        var rawMarkup = this.props.content
        return { __html: rawMarkup };
    }
    render(){
        return(
                <div className="modal-body">
                  
                     <span dangerouslySetInnerHTML={this.rawMarkup()} />

                </div>
            )
    }
}


const mapStateToProps = state => ({
  ...state
})

export default connect(mapStateToProps)(API)