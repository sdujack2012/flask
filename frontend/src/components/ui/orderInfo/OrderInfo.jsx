import * as React from "react";
import PropTypes from "prop-types";
import Container from "reactstrap/lib/Container";
import Row from "reactstrap/lib/Row";
import Col from "reactstrap/lib/Col";
import Button from "reactstrap/lib/Button";
import { Link } from "react-router-dom";
import "./styles.scss";

class OrderInfo extends React.Component {
  render() {
    const { orderNumber, numberOfTickets, totalCost } = this.props;
    return (
      <div className="Order-info-contianer">
        <Container className="mb-4 mt-3 mt-1 pb-2">
          <div className="mt-4 mb-4">
            <Row className="label">
              <Col md="10">Order number</Col>
              <Col md="2" className="text-right">
                <div className="fa fa-print print" />
              </Col>
            </Row>
            <Row className="content">
              <Col>{orderNumber}</Col>
            </Row>
          </div>
          <div className="mt-4 mb-4">
            <Row className="label">
              <Col>We sent you email outlining your purchase</Col>
            </Row>
            <Row className="content">
              <Col>
                View your tickets at{" "}
                <a href="#">
                  <span className="my-account">My Account</span>
                </a>
              </Col>
            </Row>
          </div>
          <div className="mt-4 mb-4">
            <Row className="label">
              <Col>You purchased</Col>
            </Row>
            <Row className="content">
              <Col md="10">
                <span className="number-of-tickets">
                  {numberOfTickets} ticket(s)
                </span>{" "}
                for a total cost of{" "}
                <span className="total-price">${totalCost}</span>
              </Col>
              <Col md="2" className="text-right">
                <Link to="/">
                  <Button color="success">BACK HOME</Button>
                </Link>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}

OrderInfo.propTypes = {
  orderNumber: PropTypes.string.isRequired,
  numberOfTickets: PropTypes.number.isRequired,
  totalCost: PropTypes.number.isRequired
};

export { OrderInfo };
