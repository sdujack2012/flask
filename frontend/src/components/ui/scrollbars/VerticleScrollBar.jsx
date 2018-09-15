import React, { Component } from "react";
import { Scrollbars } from "react-custom-scrollbars";

export class VerticleScrollBar extends Component {
  renderView = ({ style, ...props }) => {
    return (
      <div
        className="box"
        style={{ ...style, ...this.props.style, overflowX: "hidden" }}
      >
        {this.props.children}
      </div>
    );
  };

  renderThumb = ({ style, ...props }) => {
    const thumbStyle = {
      backgroundColor: "darkgrey",
      borderRadius: 5
    };
    return <div style={{ ...style, ...thumbStyle }} />;
  };

  handleUpdate = ({ scrollTop, scrollHeight, clientHeight }) => {
    if (scrollTop + clientHeight === scrollHeight) {
      this.props.loadMore();
    }
  };

  render() {
    return (
      <Scrollbars
        renderView={this.renderView}
        renderThumbHorizontal={() => <div />}
        renderThumbVertical={this.renderThumb}
        onUpdate={this.handleUpdate}
        {...this.props}
      />
    );
  }
}
