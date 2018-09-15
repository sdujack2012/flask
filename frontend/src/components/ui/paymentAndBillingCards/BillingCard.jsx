import React from "react";
import PropTypes from "prop-types";
import Card from "reactstrap/lib/Card";
import CardHeader from "reactstrap/lib/CardHeader";
import CardBody from "reactstrap/lib/CardBody";
import Row from "reactstrap/lib/Row";
import { DetailInput } from "../DetailInput";
import "./styles.scss";

const BillingCard = ({
  firstname,
  lastname,
  address,
  suburb,
  state,
  mobile,
  postcode,
  changeField
}) => {
  return (
    <Card className="billing-info__card">
      <CardHeader className="billing-info__card--header">
        <h4>Billing details</h4>
      </CardHeader>
      <CardBody>
        <Row>
          <DetailInput
            name="firstname"
            placeholder="First name"
            dataCategory="billingDetails"
            value={firstname}
            onChange={changeField}
          />
          <DetailInput
            name="lastname"
            placeholder="Last name"
            dataCategory="billingDetails"
            value={lastname}
            onChange={changeField}
          />
        </Row>
        <Row className="mt-3">
          <DetailInput
            name="address"
            placeholder="Address"
            dataCategory="billingDetails"
            value={address}
            onChange={changeField}
          />
        </Row>
        <Row className="mt-3">
          <DetailInput
            xs={5}
            name="suburb"
            placeholder="Suburb"
            dataCategory="billingDetails"
            value={suburb}
            onChange={changeField}
          />
          <DetailInput
            xs={3}
            name="state"
            placeholder="State"
            dataCategory="billingDetails"
            value={state}
            onChange={changeField}
          />
          <DetailInput
            xs={4}
            type="number"
            name="postcode"
            placeholder="Post Code"
            dataCategory="billingDetails"
            value={postcode}
            onChange={changeField}
          />
        </Row>
        <Row className="mt-3">
          <DetailInput
            name="mobile"
            placeholder="Mobile"
            dataCategory="billingDetails"
            value={mobile}
            onChange={changeField}
          />
        </Row>
      </CardBody>
    </Card>
  );
};

BillingCard.propTypes = {
  firstname: PropTypes.string,
  lastname: PropTypes.string,
  address: PropTypes.string,
  suburb: PropTypes.string,
  state: PropTypes.string,
  mobile: PropTypes.string,
  postcode: PropTypes.string,
  changeField: PropTypes.func
};

export { BillingCard };
