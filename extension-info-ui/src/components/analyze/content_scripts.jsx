import {connect} from "react-redux";
import React, {Component} from 'react'

class ContentScript extends Component {

  constructor(props) {
    super(props)

  }

  render() {
    const contentScriptData = this.props.analyze.result.content_scripts

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
        {/*<ul className='list-group col-md-6'>*/}
          {/*<li className='list-group-item active bg-dark'>JS</li>*/}
          {/*{renderListJS}*/}
        {/*</ul>*/}
        {/*<ul className='list-group col-md-6'>*/}
          {/*<li className='list-group-item active bg-dark'>MATCHES</li>*/}
          {/*{renderListMATCHES}*/}
        {/*</ul>*/}
      </div>
    )

    // const contentScriptData = this.props.analyze.result.content_scrips
    // return (
    //   <div>
    //     {contentScriptData.map((contentScript, index) => {
    //       console.log(contentScript, index)
    //       return (
    //         <div className='row'>
    //           <table className='table table-bordered'>
    //             <thead class="thead-dark">
    //             <tr>
    //               <th>JS</th>
    //               <th>MATCHES</th>
    //             </tr>
    //             </thead>
    //             <tbody>
    //             {
    //               contentScript.js.length > contentScript.js.length ?
    //                 (
    //                   contentScript.js.map((js, j) => {
    //                     return <tr>
    //                       <td></td>
    //                     </tr>
    //                   })
    //                 ) :
    //                 (
    //                   contentScript.matches.map((match, j) => {
    //
    //                   })
    //                 )
    //             }
    //             <tr>
    //               <td>{contentScript.js}</td>
    //               <td>{contentScript.matches}</td>
    //             </tr>
    //             </tbody>
    //           </table>
    //         </div>
    //       )
    //     })}
    //   </div>
    // )
  }

  renderTable(listJss, listMatches) {
    let table = <table></table>

  }
}

const mapStateToProps = state => ({
  ...state
})

export default connect(mapStateToProps)(ContentScript)