import {connect} from "react-redux";
import React, {Component} from 'react'

class CSP extends Component {
  render() {
    let data = []
    const rawCSP = this.props.analyze.result.csp
    if (rawCSP)
      data = rawCSP.split(';')
    console.log(data)

    let renderData = []

    for (let i = 0; i < data.length; i++) {
      renderData.push(<li className="list-group-item">{`${data[i]}`}</li>)
    }

    return (
      <ul className='list-group' style={{fontFamily: 'Roboto'}}>
        {renderData}
      </ul>
    )
  }
}

const mapStateToProps = state => ({
  ...state
})

export default connect(mapStateToProps)(CSP)