import * as React from "react";
import PropTypes from "prop-types";
import Container from "reactstrap/lib/Container";
import { TicketListItem } from "./TicketListItem";
import { TicketListSummary } from "./TicketListSummary";
import "./styles.scss";

class TicketList extends React.Component {
  render() {
    const { tickets } = this.props;
    return (
      <React.Fragment>
        <div className="list-ticket__container">
          <Container>
            <TicketListItem tickets={tickets} />
            <TicketListSummary tickets={tickets} fees={30} />
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

TicketList.propTypes = {
  tickets: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      price: PropTypes.string,
      admits: PropTypes.shape({
        section: PropTypes.string,
        row: PropTypes.string,
        name: PropTypes.string
      }),
      priceCategoryCode: PropTypes.string,
      priceCategoryName: PropTypes.string,
      priceTypeCode: PropTypes.string,
      priceTypeName: PropTypes.string,
      name: PropTypes.string,
      date: PropTypes.string,
      venue: PropTypes.string
    })
  ).isRequired
};

export { TicketList };
