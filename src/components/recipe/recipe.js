import React, { Component } from "react";
import s from "./recipe.css";
import Rest from "../../core/rest.js"

class Recipe extends Component {
  constructor() {
    super()
    this.state = { data: null };
  }

  componentDidMount() {
    /*var url = new URL("https://api.edamam.com/search"),
        params = { q: 'chicken',
                   app_id: CREDENTIALS.RECIPE_APP_ID,
                   app_key: CREDENTIALS.RECIPE_APP_KEY,
                   from: '0',
                   to: '3',
                   calories: '591-722',
                   health: 'alcohol-free' };

    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
    fetch(url)
      .then(res => res.json())
      .then(result => this.setState({ data: result }))
      .catch(error => console.log(error));*/

    var params = { q: 'chicken',
      from: '0',
      to: '3',
      calories: '591-722',
      health: 'alcohol-free' }

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

export default Recipe;
