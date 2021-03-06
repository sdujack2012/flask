import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";
import { Container } from "reactstrap";

import { Layout } from "UI/Layout";
import { Login } from "UI/login";

export class HomePageComponent extends Component {
  render() {
    return (
      <Layout>
        <Container>
          <Login />
        </Container>
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
