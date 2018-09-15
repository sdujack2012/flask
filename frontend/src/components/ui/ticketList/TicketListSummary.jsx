import React from "react";
import Container from "reactstrap/lib/Container";
import Row from "reactstrap/lib/Row";
import Col from "reactstrap/lib/Col";

const TicketListSummary = ({ tickets, fees }) => {
  const totalPrice = tickets.reduce(
    (sum, ticket) => sum + ticket.admits.length * ticket.price,
    0
  );

  return (
    <div className="mt-4 mt-1 pb-2">
      <Row>
        <Col>
          <div className="ticket-list__content label">Tickets</div>
        </Col>
        <Col>
          <div className="ticket-list__content label">Fees</div>
        </Col>
        <Col>
          <div className="ticket-list__content label">Total Price</div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="ticket-list__content content">${totalPrice}</div>
        </Col>
        <Col>
          <div className="ticket-list__content content">${fees}</div>
        </Col>
        <Col>
          <div className="ticket-list__content content">
            ${fees + totalPrice}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export { TicketListSummary };
