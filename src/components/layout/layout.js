import React, { Component } from "react"
import style from "./layout.css"
import HeadWrapper from "./headwrapper/headwrapper"
import Content from "./content/content";

import Routes from "../../routes"
import { Router } from "react-router-dom"
import { createBrowserHistory } from 'history'
import { Provider } from 'react-redux';

const history = createBrowserHistory()

function Layout() {
  return (
    <div className={style}>
      <HeadWrapper/>
     {/* <Content/>*/}
      <Router history={history}>
        <Routes />
      </Router>
    </div>
  )
}

export default Layout
