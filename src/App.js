import React from "react";
import FoodDb from "./container/FoodDb";
import NavBar from "./NavBar";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

export default function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/foodsearch" component={FoodDb} />
        </Switch>
      </div>
    </Router>
  );
}
