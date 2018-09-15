import React from "react";
import PropTypes from "prop-types";
import Col from "reactstrap/lib/Col";
import Input from "reactstrap/lib/Input";
import FormGroup from "reactstrap/lib/FormGroup";
import Label from "reactstrap/lib/Label";

const DetailInput = ({
  xs,
  sm,
  md,
  lg,
  xl,
  type = "text",
  name,
  placeholder,
  value,
  dataCategory,
  onChange,
  billingDetailType,
  labelText = ""
}) => {
  if (type === "checkbox") {
    return (
      <Col>
        <FormGroup check>
          <Label check>
            <Input
              type="checkbox"
              name="savecard"
              id="savecard"
              data-category={billingDetailType}
              checked={value}
              onChange={onChange}
            />{" "}
            <strong>{labelText}</strong>
          </Label>
        </FormGroup>
      </Col>
    );
  }
  return (
    <Col {...xs} {...sm} {...md} {...lg} {...xl}>
      <Input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        data-category={dataCategory}
        value={value}
        onChange={onChange}
      />
    </Col>
  );
};

DetailInput.propTypes = {
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  xl: PropTypes.number,
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  dataCategory: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  billingDetailType: PropTypes.string,
  labelText: PropTypes.string
};

export { DetailInput };
