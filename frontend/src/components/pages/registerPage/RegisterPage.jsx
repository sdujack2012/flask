import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";
import { Container } from "reactstrap";

import { Layout } from "UI/Layout";
import { Login } from "UI/login";

export class RegisterPageComponent extends Component {
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

RegisterPageComponent.propTypes = {};

RegisterPageComponent.defaultProps = {};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

const enhance = compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
);

const RegisterPage = enhance(RegisterPageComponent);
export { RegisterPage };
