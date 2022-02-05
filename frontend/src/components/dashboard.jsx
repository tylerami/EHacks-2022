import React from "react";
import PropTypes from "prop-types";
import logo from "../logo.png";
import pp from "../pp.png";
import { useState } from "react";
import "./dashboard.css";

function Dashboard(props) {
  const [tab, settab] = useState("Pitch Discussions");

  return (
    <div>
      <div>
        <div className="navBar">
          <img src={logo} className="logo"></img>
          <h3>{tab}</h3>
        </div>
      </div>
      <div className="sideNav"></div>
    </div>
  );
}

Dashboard.propTypes = {};

export default Dashboard;
