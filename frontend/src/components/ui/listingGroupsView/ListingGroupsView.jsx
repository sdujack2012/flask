import React, { Component } from "react";
import PropTypes from "prop-types";
import Container from "reactstrap/lib/Container";
import Col from "reactstrap/lib/Col";
import Row from "reactstrap/lib/Row";
import Input from "reactstrap/lib/Input";
import Button from "reactstrap/lib/Button";
import { Link } from "react-router-dom";
import { LoaderWrapper } from "../loaderWrapper";
import { VerticleScrollBar } from "../../ui/scrollbars";
import "./styles.scss";

class ListingGroupsView extends Component {
  componentDidMount() {
    this.props.loadListingGroups();
    this.props.setSelectedListingGroupIds({});
  }

  handleListingGroupSelected = (
    event,
    listingGroupId,
    selectedListingGroupIds = {},
    setSelectedListingGroupIds
  ) => {
    const updatedSelectedListingGroupIds = { ...selectedListingGroupIds };
    if (event.target.checked) {
      updatedSelectedListingGroupIds[listingGroupId] = true;
    } else {
      delete updatedSelectedListingGroupIds[listingGroupId];
    }
    setSelectedListingGroupIds(updatedSelectedListingGroupIds);
  };

  loadMoreListingGroups = () => {
    const { loadMoreListingGroups, isLoading, next } = this.props;

    if (!isLoading && next) {
      loadMoreListingGroups(next);
    }
  };

  renderListingGroupViewHeader = () => {
    return (
      <Row>
        <Col md="3">Quantity</Col>
        <Col md="2">Section</Col>
        <Col md="2">Row</Col>
        <Col md="2">Price</Col>
        <Col md="3">
          <i className="fa fa-sort" />
        </Col>
      </Row>
    );
  };

  renderListingGroupViewViewBody = (
    listingGroups,
    selectedListingGroupIds,
    setSelectedListingGroupIds
  ) => {
    const hasSelectedAnyListingGroup = Object.keys(selectedListingGroupIds)
      .length;
    return listingGroups.map(ListingGroup => (
      <Row key={ListingGroup.listingGroupId}>
        <Col md="3">{ListingGroup.quantity}</Col>
        <Col md="2">{ListingGroup.section}</Col>
        <Col md="2">{ListingGroup.row}</Col>
        <Col md="2">{ListingGroup.price}</Col>
        <Col md="3">
          <Input
            type="checkbox"
            checked={selectedListingGroupIds[ListingGroup.listingGroupId]}
            onChange={event =>
              this.handleListingGroupSelected(
                event,
                ListingGroup.listingGroupId,
                selectedListingGroupIds,
                setSelectedListingGroupIds
              )
            }
            disabled={
              hasSelectedAnyListingGroup &&
              !selectedListingGroupIds[ListingGroup.listingGroupId]
            }
          />
        </Col>
      </Row>
    ));
  };

  render() {
    const {
      listingGroups,
      selectedListingGroupIds,
      setSelectedListingGroupIds,
      next,
      isLoading,
      proceedToPayment
    } = this.props;

    const selectedListingGroupNumber = Object.keys(selectedListingGroupIds)
      .length;

    return (
      <div className="listing-groups-container">
        <Container>
          <div className="listing-groups-header">
            {this.renderListingGroupViewHeader()}
          </div>
          <div
            style={{
              height: 360,
              overflow: "auto"
            }}
          >
            <VerticleScrollBar
              className="listing-groups-body"
              loadMore={this.loadMoreListingGroups}
            >
              {this.renderListingGroupViewViewBody(
                listingGroups,
                selectedListingGroupIds,
                setSelectedListingGroupIds
              )}
              <LoaderWrapper
                height="30px"
                color="#0288d1"
                loading={isLoading}
              />
              {!next &&
                !isLoading && (
                  <Row className="border-bottom pb-2 pt-2">
                    <div className="loader loadmore">
                      No {listingGroups.length ? "More" : ""} Listings
                    </div>
                  </Row>
                )}
            </VerticleScrollBar>
          </div>
          <div className="listing-groups-next-btn">
            <p md="12" className="text-right">
              <Button
                disabled={selectedListingGroupNumber === 0}
                color="success"
                onClick={proceedToPayment}
              >
                Next Step
              </Button>
            </p>
          </div>
        </Container>
      </div>
    );
  }
}

ListingGroupsView.propTypes = {
  // selectedProductId: PropTypes.string.isRequired,
  listingGroups: PropTypes.arrayOf(
    PropTypes.shape({
      quantity: PropTypes.number,
      row: PropTypes.string,
      section: PropTypes.string,
      groupId: PropTypes.string,
      price: PropTypes.string
    })
  ),
  setSelectedListingGroupIds: PropTypes.func.isRequired,
  selectedListingGroupIds: PropTypes.instanceOf(Object).isRequired,
  proceedToPayment: PropTypes.func.isRequired,
  loadListingGroups: PropTypes.func.isRequired,
  loadMoreListingGroups: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  next: PropTypes.string
};

export { ListingGroupsView };
