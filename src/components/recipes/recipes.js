import React, { Component } from "react";
import s from "./recipe.css";
import Rest from "../../core/rest.js"

class Recipes extends Component {
  constructor(props) {
    super(props)
    this.state = { data: null };
  }

  componentDidMount() {
    var params = { q: 'Pancake'
      /*from: '0',
      to: '10',
      calories: '591-722',
      health: 'alcohol-free'*/ }

      Rest.searchRecipes(params)
        .then(res => res.json())
        .then(result => this.setState({ data: result }))
        .catch(error => console.log(error))
  }

  render() {
    return (
        <div>
          { this.state.data ?
              <div>
                <h4 className={s.intro}>{this.state.data.hits[0].recipe.label}</h4>
                <img src={this.state.data.hits[0].recipe.image}/>
              </div>:
              <div>Loading...</div> }
        </div>
    )
  }
}

export default Recipes;
