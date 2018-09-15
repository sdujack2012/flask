import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";

import { Layout } from "UI/Layout";

export class HomePageComponent extends Component {
  render() {
    return (
      <Layout>
        <h1>Home</h1>
      </Layout>
    );
  }
}

HomePageComponent.propTypes = {};

HomePageComponent.defaultProps = {};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

const enhance = compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
);

const HomePage = enhance(HomePageComponent);
export { HomePage };
