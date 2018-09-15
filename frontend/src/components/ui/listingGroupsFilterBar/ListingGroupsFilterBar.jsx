import React from "react";
import PropTypes from "prop-types";
import Container from "reactstrap/lib/Container";
import Col from "reactstrap/lib/Col";
import Row from "reactstrap/lib/Row";
import ButtonDropdown from "reactstrap/lib/ButtonDropdown";
import DropdownToggle from "reactstrap/lib/DropdownToggle";
import DropdownMenu from "reactstrap/lib/DropdownMenu";
import DropdownItem from "reactstrap/lib/DropdownItem";
import "./styles.scss";

class ListingGroupsFilterBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantiyDropdownOpen: false,
      areaDropdownOpen: false,
      selectedArea: undefined
    };
  }

  toggleAreaDropdown = () => {
    this.setState({
      areaDropdownOpen: !this.state.areaDropdownOpen
    });
  };

  toggleQuantiyDropdownOpen = () => {
    this.setState({
      quantiyDropdownOpen: !this.state.quantiyDropdownOpen
    });
  };

  onSelectArea = event => {
    this.setState({
      areaDropdownOpen: false,
      selectedArea: event.target.innerText
    });
  };

  onSelectQuantiy = event => {
    this.props.setSelectedQuantity(Number.parseInt(event.target.innerText, 10));
    this.props.loadListingGroups();
  };

  render() {
    return (
      <div className="listing-filter-container">
        <Container>
          <Row>
            <Col md="2">
              <ButtonDropdown
                isOpen={this.state.areaDropdownOpen}
                toggle={this.toggleAreaDropdown}
              >
                <DropdownToggle caret>
                  {this.state.selectedArea ? this.state.selectedArea : "Area"}
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>Dummy Area 1</DropdownItem>
                  <DropdownItem>Dummy Area 2</DropdownItem>
                  <DropdownItem>Dummy Area 3</DropdownItem>
                </DropdownMenu>
              </ButtonDropdown>
            </Col>
            <Col md="4">
              <ButtonDropdown
                isOpen={this.state.quantiyDropdownOpen}
                toggle={this.toggleQuantiyDropdownOpen}
              >
                <DropdownToggle caret>
                  {this.props.selectedQuantity
                    ? this.props.selectedQuantity
                    : "QUANTITY"}
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem onClick={this.onSelectQuantiy}>1</DropdownItem>
                  <DropdownItem onClick={this.onSelectQuantiy}>2</DropdownItem>
                  <DropdownItem onClick={this.onSelectQuantiy}>3</DropdownItem>
                  <DropdownItem onClick={this.onSelectQuantiy}>4</DropdownItem>
                  <DropdownItem onClick={this.onSelectQuantiy}>5</DropdownItem>
                  <DropdownItem onClick={this.onSelectQuantiy}>6</DropdownItem>
                  <DropdownItem onClick={this.onSelectQuantiy}>7</DropdownItem>
                  <DropdownItem onClick={this.onSelectQuantiy}>8</DropdownItem>
                  <DropdownItem onClick={this.onSelectQuantiy}>9</DropdownItem>
                  <DropdownItem onClick={this.onSelectQuantiy}>10</DropdownItem>
                </DropdownMenu>
              </ButtonDropdown>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

ListingGroupsFilterBar.propTypes = {
  selectedQuantity: PropTypes.number,
  setSelectedQuantity: PropTypes.func.isRequired,
  loadListingGroups: PropTypes.func.isRequired
};

ListingGroupsFilterBar.defaultProps = {
  selectedQuantity: 0
};

export { ListingGroupsFilterBar };
