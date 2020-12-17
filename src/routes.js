import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "./pages/AuthenticationPages/Login/";
import Registro from "./pages/AuthenticationPages/Registro/";
import Forgot from "./pages/AuthenticationPages/Forgot/";
import Dashboard from "./pages/Dashboard";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/registro" component={Registro} />
        <Route path="/forgot" component={Forgot} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
}
