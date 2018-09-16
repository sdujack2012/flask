import React, { Component } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import { HomePage } from "Pages/homePage";
import { LoginPage } from "Pages/loginPage";
import { RegisterPage } from "Pages/registerPage";

import "bootstrap/dist/css/bootstrap.min.css"; // tslint:disable-line

export class AppComponent extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/home" exact component={HomePage} />
          <Route path="/login" exact component={LoginPage} />
          <Route path="/register" exact component={RegisterPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}
