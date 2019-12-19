import React, { Component } from "react"
import styles from "./header.css"
import Recipes from "../../../recipes/recipes"

//class Header extends Component {

function Header() {
  function findHandler(e) {
    //e.preventDefault();
    e.stopPropagation();
    e.target.classList.toggle("change");
    console.log(e.target.classList)
  }
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.hamburger}></div>
      </div>
      <div className={styles.search_line}>
        <input type="text" placeholder="Find something to cook..."/>
      </div>
      <div className={styles.button}>
        <button className={styles.find}>FIND</button>
      </div>
      <div className={styles.powered_logo_holder}>
        <div id="edamam-badge" data-color="transparent"></div>
      </div>
    </header>
  )
}

export default Header
