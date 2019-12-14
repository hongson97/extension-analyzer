import React from 'react';
import {render} from 'react-dom'
import thunkMiddleware from 'redux-thunk'
import {applyMiddleware, createStore, compose} from "redux";
import rootReducer from './reducers'
import {Provider} from "react-redux";
import {Route, Router, browserHistory} from "react-router";
import {syncHistoryWithStore} from "react-router-redux";
// import axios from 'axios'

import './assets/css/icons/icomoon/styles.css'
import './assets/css/bootstrap.css'
import './assets/css/dashboard.css'
import './assets/css/icons/fontawesome/styles.min.css'

//IMPORT REAT-TOAST CSS
import 'react-toastify/dist/ReactToastify.css'

//IMPORT REACT-TABLE CSS
import "react-table/react-table.css"

//IMPORT REACT_SELECT CSS
import 'react-select/dist/react-select.min';

//IMPORT CONTAINERS
import Home from './components/home'
// import Result from './components/result'

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunkMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

// const store = require('./configStore')
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={Home}></Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)