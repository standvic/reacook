import { RECIPE_SEARCH_RESULT } from "./action-types";
import { RECIPE_SEARCH_REQUEST } from "./action-types";

export function recipeSearch(searchResult) {
  return {type: RECIPE_SEARCH_RESULT, searchResult}
};

export function setSearchRecipeRquest(searchRequest) {
  return {type: RECIPE_SEARCH_REQUEST, searchRequest}
};
