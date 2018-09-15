import React from "react";
import PropTypes from "prop-types";

import { Footer, Header } from "./";

import "./styles.scss";

export class Layout extends React.PureComponent {
  static propTypes = {};

  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="content">{this.props.children}</div>
        <Footer />
      </React.Fragment>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};
