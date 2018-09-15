import React, { Component } from "react";
import PropTypes from "prop-types";
import Container from "reactstrap/lib/Container";
import Row from "reactstrap/lib/Row";
import Col from "reactstrap/lib/Col";
import "./styles.scss";

class StepInfoBar extends Component {
  render() {
    const { stepDescription, currentStep, totalSteps } = this.props;
    return (
      <div className="step-info-container">
        <div className="step-info">
          <Container>
            <Row>
              <Col className="step-info-description" md="10">
                {stepDescription}
              </Col>
              <Col className="step-info-step" md="2">
                Step {currentStep} of {totalSteps}
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

StepInfoBar.propTypes = {
  stepDescription: PropTypes.string.isRequired,
  currentStep: PropTypes.number.isRequired,
  totalSteps: PropTypes.number.isRequired
};

export { StepInfoBar };
