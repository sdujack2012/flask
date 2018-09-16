import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";
import { Container } from "reactstrap";

import { Layout } from "UI/Layout";
import { Login } from "UI/login";

export class LoginPageComponent extends Component {
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

LoginPageComponent.propTypes = {};

LoginPageComponent.defaultProps = {};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

const enhance = compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
);

const LoginPage = enhance(LoginPageComponent);
export { LoginPage };
