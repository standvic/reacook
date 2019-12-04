import React, { Component } from "react"
import style from "./layout.css"
import HeadWrapper from "./headwrapper/headwrapper"

class Layout extends Component {

  render() {
    return (
      <div className={style}>
        <HeadWrapper/>
      </div>
    )
  }
}

export default Layout
