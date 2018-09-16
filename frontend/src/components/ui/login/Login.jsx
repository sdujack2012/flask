import React from "react";
import PropTypes from "prop-types";
import { Col, Button, Form, FormGroup, Label, Input } from "reactstrap";

export class Login extends React.PureComponent {
  static propTypes = {};

  render() {
    return (
      <div className="p-4">
        <Form>
          <FormGroup row className="justify-content-center">
            <Label for="exampleEmail" sm={2}>
              Email
            </Label>
            <Col sm={4}>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="with a placeholder"
              />
            </Col>
          </FormGroup>
          <FormGroup row className="justify-content-center">
            <Label for="examplePassword" sm={2}>
              Password
            </Label>
            <Col sm={4}>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="password placeholder"
              />
            </Col>
          </FormGroup>
          <FormGroup row className="justify-content-center">
            <Col sm={4} className="text-center">
              <Button color="success">Submit</Button>
            </Col>
            <Col sm={4} className="text-center">
              <a
                className="btn text-white btn-success"
                color="success"
                href="/register"
              >
                Register
              </a>
            </Col>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

Login.propTypes = {};
