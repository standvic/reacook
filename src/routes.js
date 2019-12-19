import React from "react";
import { Route, Switch } from "react-router-dom";
import Recipes from "./components/recipes/recipes";
import Prescription from "./components/prescription/prescription";
import Home from "./components/home/home";

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/recipes">
          < Recipes/>
        </Route>
        <Route path="/prescription">
          <Prescription/>
        </Route>
      </Switch>
    </div>
  )
}

export default Routes
