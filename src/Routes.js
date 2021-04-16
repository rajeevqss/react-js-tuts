import React from "react";
import { Switch, Route, HashRouter, Redirect } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Products from "./Products";

function Routes() {
  return (
    <HashRouter>
      <Switch>
        
        <Route
          exact={true}
          path="/about"
          render={(e, props) => <About {...e} data={props} />}
        />

        <Route
          exact={true}
          path="/home" // always loads first
          render={(e, props) => <Home {...e} data={props} />}
        />

        <Route
          exact={true}
          path="/" // always loads first
          render={(e, props) => <Products {...e} data={props} />}
        />
        

        
      </Switch>
    </HashRouter>
  );
}

export default Routes;
