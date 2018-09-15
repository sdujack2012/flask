import React, { Component } from "react";
import Form from "reactstrap/lib/Form";
import InputGroup from "reactstrap/lib/InputGroup";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import InputGroupAddon from "reactstrap/lib/InputGroupAddon";
import Input from "reactstrap/lib/Input";
import Button from "reactstrap/lib/Button";
import "./styles.scss"; // eslint-disable-line

class SearchHeaderComponent extends Component {
  handleKeywordChange = e => {
    this.props.handleKeywordChange(e.target.value);
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleSearchKeywordSubmit();
  };

  render() {
    return (
      <div className="search-header__wrapper">
        <Form className="search-header__form" onSubmit={this.handleSubmit}>
          <InputGroup className="search-header__input-group">
            <InputGroupAddon addonType="append">
              <Input
                name="search"
                id="search"
                className="search-header__input"
                placeholder="Search for events or venues"
                value={this.props.keyword}
                onChange={this.handleKeywordChange}
              />
              <Button className="search-header__submit" color="success">
                <i className="fa fa-search" />
              </Button>
            </InputGroupAddon>
          </InputGroup>
        </Form>
      </div>
    );
  }
}

SearchHeaderComponent.propTypes = {
  handleKeywordChange: PropTypes.func.isRequired,
  handleSearchKeywordSubmit: PropTypes.func.isRequired,
  keyword: PropTypes.string.isRequired
};

export const SearchHeader = withRouter(SearchHeaderComponent);
