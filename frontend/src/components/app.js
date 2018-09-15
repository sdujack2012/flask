import React, { Component } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import { HomePage } from "Pages/homePage";
import "bootstrap/dist/css/bootstrap.min.css"; // tslint:disable-line

export class AppComponent extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/home" exact component={HomePage} />
        </Switch>
      </BrowserRouter>
    );
  }
}
