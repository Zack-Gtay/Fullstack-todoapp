import React, { Component } from "react";

export default class Counter extends Component {
  render() {
    let styles = this.handleBadgeStyle();
    return (
      <div>
        {this.props.children}
        <span className={styles}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          type="button"
          className="btn btn-secondary m-3 btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  handleBadgeStyle() {
    let styles = "badge p-2 m-3 badge-";
    styles += this.props.counter.value !== 0 ? "primary" : "warning";
    return styles;
  }
  formatCount() {
    const { value } = this.props.counter;

    return value === 0 ? "Zero" : value;
  }
}
