import React from "react";
import PropTypes from "prop-types";
import Button from "./button";
import "./login.css";
import logo from "../logo.png";
import image from "../landing.png";

import { useState } from "react";

function Login(props) {
  const [register, setregister] = useState(true);

  return register ? (
    <div className="main">
      <div className="navBar">
        <div className="logo">
          <img className="logoImage" alt="logo" src={logo}></img>
        </div>
        <div className="buttons">
          <button className="purpleMid" onClick={() => setregister(true)}>
            Register
          </button>
          <button className="greyMid" onClick={() => setregister(false)}>
            Login
          </button>
        </div>
      </div>

      <div className="loginBody">
        <div className="form">
          <h1>Welcome To PitchStart!</h1>
          <h4>
            Join the PitchStart community to meet budding entrepreneurs and
            bring your startup ideas to reality!
          </h4>
          <select>
            <option>Western University</option>
            <option>Queens University</option>
            <option>University of Toronto</option>
          </select>
          <input type="text" placeholder="Full Name"></input>
          <input type="text" placeholder="Email"></input>
          <input type="text" placeholder="Password"></input>
          <button className="purpleLarge">Register</button>
        </div>
        <div className="image"></div>
      </div>
    </div>
  ) : (
    <div className="main">
      <div className="navBar">
        <div className="logo">
          <img className="logoImage" alt="logo" src={logo}></img>
        </div>
        <div className="buttons">
          <button className="greyMid" onClick={() => setregister(true)}>
            Register
          </button>
          <button className="purpleMid" onClick={() => setregister(false)}>
            Login
          </button>
        </div>
      </div>

      <div className="loginBody">
        <div className="form">
          <h1>Welcome To PitchStart!</h1>
          <h4>
            Are you ready to realize your entrepreneurial dreams? Get pitching!
          </h4>
          <input type="text" placeholder="Email"></input>
          <input type="text" placeholder="Password"></input>
          <button className="purpleLarge">Login</button>
        </div>
        <div className="image"></div>
      </div>
    </div>
  );
}

Login.propTypes = {};

export default Login;
