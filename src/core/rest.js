// api credentials
const NUTRITION_APP_ID = 'a9c23c4d'
const NUTRITION_APP_KEY = 'f3f52e29db6c73da2f3a79b16f8904d3'
const FOOD_APP_ID = '85d335b9'
const FOOD_APP_KEY = '4fb3e18fb3e10ac4fcd43d054e929b6e'
const RECIPE_APP_ID = 'ccf39dae'
const RECIPE_APP_KEY = '677e76190a057c1bdb78e3690187bc4c'

//REST API methods class
export default class Rest {

  constructor() {
  }

  static searchRecipes(params) {
    const url = new URL("https://api.edamam.com/search");

    params.app_id = RECIPE_APP_ID
    params.app_key = RECIPE_APP_KEY

    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))

    return fetch(url)
  }
}
