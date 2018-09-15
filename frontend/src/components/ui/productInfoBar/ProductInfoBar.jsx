import React, { Component } from "react";
import PropTypes from "prop-types";
import Container from "reactstrap/lib/Container";
import "./styles.scss";

class ProductInfoBar extends Component {
  render() {
    let { productInfo } = this.props;
    if (process.env.NODE_ENV === "development" && !productInfo) {
      productInfo = {
        address: "Sydney Olympic Park, NSW",
        contentId: "SACPARKI11",
        date: "2020-03-23T07:30:00Z",
        displayDate: "Mon 23rd Mar 2020",
        displayTime: "6:30 PM",
        id: "ESAP0000016MJ",
        isBlacklisted: undefined,
        showId: "32632",
        venue: "ANZ Stadium"
      };
    }

    return (
      <div className="product-info-container">
        <div className="product-info">
          <Container>
            <p className="product-info-name">{productInfo.venue}</p>
            <p className="product-info-date">{productInfo.date}</p>
            <p className="product-info-location">{productInfo.address}</p>
          </Container>
        </div>
      </div>
    );
  }
}

ProductInfoBar.propTypes = {
  productInfo: PropTypes.shape({
    name: PropTypes.string,
    date: PropTypes.string,
    venue: PropTypes.string
  })
};

export { ProductInfoBar };
