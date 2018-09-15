import React from "react";
import PropTypes from "prop-types";
import Card from "reactstrap/lib/Card";
import CardHeader from "reactstrap/lib/CardHeader";
import CardBody from "reactstrap/lib/CardBody";
import Row from "reactstrap/lib/Row";
import Col from "reactstrap/lib/Col";
import { DetailInput } from "../DetailInput";
import "./styles.scss";

const PaymentCard = ({
  cardnumber,
  holdername,
  month,
  year,
  ccv,
  savecard,
  changeField
}) => {
  return (
    <Card className="billing-info__card">
      <CardHeader className="billing-info__card--header">
        <h4>Payment details</h4>
      </CardHeader>
      <CardBody>
        <Row>
          <DetailInput
            type="number"
            name="cardnumber"
            placeholder="Card Number"
            value={cardnumber}
            onChange={changeField}
          />
        </Row>
        <Row className="mt-3">
          <DetailInput
            name="holdername"
            placeholder="Name on card"
            value={holdername}
            onChange={changeField}
          />
        </Row>
        <Row className="mt-3">
          <DetailInput
            xs={4}
            type="number"
            name="month"
            placeholder="Month"
            value={month}
            onChange={changeField}
          />
          <DetailInput
            xs={4}
            type="number"
            name="year"
            placeholder="Year"
            value={year}
            onChange={changeField}
          />
          <DetailInput
            xs={4}
            type="number"
            name="ccv"
            placeholder="CCV"
            value={ccv}
            onChange={changeField}
          />
        </Row>
        <Row className="mt-2">
          <Col>
            <div className="float-right">
              <a href="#">Find CCV</a>
            </div>
          </Col>
        </Row>

        <Row className="mt-2">
          <DetailInput
            type="checkbox"
            name="savecard"
            value={savecard}
            onChange={changeField}
            labelText="Securely save card details"
          />
        </Row>
      </CardBody>
    </Card>
  );
};

PaymentCard.propTypes = {
  cardnumber: PropTypes.string,
  holdername: PropTypes.string,
  month: PropTypes.string,
  year: PropTypes.string,
  ccv: PropTypes.string,
  savecard: PropTypes.string,
  changeField: PropTypes.func
};

export { PaymentCard };
