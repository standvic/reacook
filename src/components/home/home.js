import React, { Component } from "react";
import { Link } from "react-router-dom";
import s from "./home.css";

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = { data: null };
  }

  render() {
    return (
      <div>
        <h2>Home</h2>
        <Link to="/prescription">Prescription</Link><br />
        <Link to="/recipes">Recipes</Link>
      </div>
    )
  }
}

export default Home;
