import React, { Component } from "react"
import style from "./layout.css"
import HeadWrapper from "./headwrapper/headwrapper"
import Content from "./content/content";

function Layout() {
  return (
    <div className={style}>
      <HeadWrapper/>
      <Content/>
    </div>
  )
}

export default Layout
