import React, { Component } from "react";
import ReactDOM from "react-dom";
import Layout from "./components/layout/layout";

import { Provider } from 'react-redux'
import store from './store'
/*
import Routes from "./routes"
import { Router } from "react-router-dom"
import { createBrowserHistory } from 'history'

const history = createBrowserHistory()

ReactDOM.render(
  <Router history={history}>
    <Routes />
  </Router>,
  document.getElementById("root")
)
*/


ReactDOM.render(
  <Provider store={store}>
    <Layout />
  </Provider>,
  document.querySelector("#root"));
