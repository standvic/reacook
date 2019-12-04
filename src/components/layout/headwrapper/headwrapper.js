import React, { Component } from "react"
import styles from "./headwrapper.css"
import Header from "./header/header"

class HeadWrapper extends Component {

  render() {
    return (
      <div className={styles.headwrapper}>
        <Header />
      </div>
    )
  }
}

export default HeadWrapper
