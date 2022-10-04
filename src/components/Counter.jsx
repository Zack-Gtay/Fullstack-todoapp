import React, { Component } from "react";

export default class Counter extends Component {
  render() {
    let styles = this.handleBadgeStyle();
    let decrementStyles = this.handleDecrementStyles();
    return (
      <div className="row">
        <div className="col-1 ">
          <span className={styles}>{this.formatCount()}</span>
        </div>
        <div className="col">
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            type="button"
            className="btn btn-secondary m-3 btn-sm"
          >
            +
          </button>
          <button
            onClick={() =>
              this.props.counter.value > 0
                ? this.props.onDecrement(this.props.counter)
                : ""
            }
            type="button"
            className={decrementStyles}
          >
            -
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm m-2"
          >
            x
          </button>
        </div>
      </div>
    );
  }

  handleBadgeStyle() {
    let styles = "badge p-2 m-3 badge-";
    styles += this.props.counter.value !== 0 ? "primary" : "warning";
    return styles;
  }
  handleDecrementStyles() {
    let decrementStyles = "btn btn-secondary m-3 btn-sm ";
    decrementStyles += this.props.counter.value === 0 ? "disabled" : "";
    return decrementStyles;
  }
  formatCount() {
    const { value } = this.props.counter;

    return value === 0 ? "Zero" : value;
  }
}
