import React from "react";
import "./App.css";
import Counters from "./components/Counters";
import Navbar from "./components/Navbar";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="container pt-3">
        <Counters />
      </div>
    </React.Fragment>
  );
}

export default App;
