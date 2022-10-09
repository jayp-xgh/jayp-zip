import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Blog } from "../pages/home";
import { Regex } from "../pages/regex";

export default function AppRoutes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Blog} />
        <Route path="/regex" component={Regex} />
      </Switch>
    </Router>
  );
}