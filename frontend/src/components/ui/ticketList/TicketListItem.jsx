import * as React from "react";
import Container from "reactstrap/lib/Container";
import Row from "reactstrap/lib/Row";
import Col from "reactstrap/lib/Col";

class TicketListItem extends React.Component {
  render() {
    return (
      <div className="ticket-list">
        {this.props.tickets.map((ticket, idx) => {
          return this.renderTicket(ticket, idx);
        })}
      </div>
    );
  }

  renderAdmit = ({ name, row, section }, idx) => {
    return (
      <div key={idx} className="mb-3">
        <Row>
          <Col md="4">
            <div className="ticket-list__content content">{section}</div>
          </Col>
          <Col md="4">
            <div className="ticket-list__content content">{row}</div>
          </Col>
          <Col md="4">
            <div className="ticket-list__content content">{name}</div>
          </Col>
        </Row>
      </div>
    );
  };

  renderLabels = labelData => {
    return (
      <Row>
        {labelData.map(({ title, colSpan }, idx) => {
          return (
            <Col md={colSpan}>
              <div className="ticket-list__content label">{title}</div>
            </Col>
          );
        })}
      </Row>
    );
  };

  renderAdmits = admits => {
    const admitLabelData = [
      { title: "Section", colSpan: 4 },
      { title: "Row", colSpan: 4 },
      { title: "Seat", colSpan: 4 }
    ];
    return (
      <div>
        {this.renderLabels(admitLabelData)}
        {admits.map((admit, idx) => this.renderAdmit(admit, idx))}
      </div>
    );
  };

  renderTicketInfo = (price, numberOfSeats) => {
    const ticketInfoLabelData = [
      { title: "Price per ticket", colSpan: 4 },
      { title: "Quantity", colSpan: 4 },
      { title: "Delivery", colSpan: 4 }
    ];

    return (
      <div>
        {this.renderLabels(ticketInfoLabelData)}
        <Row>
          <Col md="4">
            <div className="ticket-list__content content">${price}</div>
          </Col>
          <Col md="4">
            <div className="ticket-list__content content">{numberOfSeats}</div>
          </Col>
          <Col md="4">
            <div className="ticket-list__content content">Free</div>
          </Col>
        </Row>
      </div>
    );
  };

  renderTicket = (ticket, idx) => {
    return (
      <div key={idx} className="pt-3 border-bottom pb-2">
        {this.renderAdmits(ticket.admits)}
        {this.renderTicketInfo(ticket.price, ticket.admits.length)}
      </div>
    );
  };
}

export { TicketListItem };
