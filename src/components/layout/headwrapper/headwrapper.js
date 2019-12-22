import React, { Component } from "react"
import styles from "./headwrapper.css"
import Header from "./header/header"

class HeadWrapper extends Component {

  render() {
    return (
      <div className={styles.headwrapper}>
        <Header />
        <div className={styles.analisys}>
          <button>ANALYZE</button>&nbsp;
          <span>... YOUR MEAL</span>
          <textarea placeholder rows="4" value="For example:
                                    1 cup orange juice
                                    3 tablespoons olive oil
                                    2 carrots"></textarea>
        </div>
      </div>
    )
  }
}

export default HeadWrapper
