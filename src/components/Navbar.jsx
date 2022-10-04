import React, { Component } from "react";

const Navbar = (props) => {
  const { totalCounters } = props;
  console.log("Navbar - Rendered");
  return (
    <nav className="navbar navbar-light bg-warning">
      <a className="navbar-brand" href="#">
        Navbar
        <span className="badge badge-pill badge-secondary ml-3">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default Navbar;
