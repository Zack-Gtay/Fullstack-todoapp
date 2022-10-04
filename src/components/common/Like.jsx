import React, { Component } from "react";

export default class Like extends Component {
  render() {
    let classes = "fa fa-heart";
    if (!this.props.Liked) {
      classes += "-o";
    }
    return (
      <i
        className={classes}
        aria-hidden="true"
        style={{ cursor: "pointer" }}
        onClick={this.props.onCLick}
      ></i>
    );
  }
}
