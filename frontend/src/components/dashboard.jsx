import React from "react";
import PropTypes from "prop-types";
import logo from "../logo.png";
import pp from "../pp.png";
import { useState } from "react";
import "./dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faCaretUp,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import Post from "./post";

function Dashboard(props) {
  const [tab, settab] = useState("Pitch Discussions");
  const [dropDown, setdropDown] = useState(false);

  function logout() {
    props.setUid(null);
  }

  return (
    <div>
      <div className="dashboardNav">
        <div className="logoDiv">
          <img src={logo} className="logo" />
        </div>
        <h3>{tab}</h3>
        <button className="profileIcon" onClick={() => setdropDown(!dropDown)}>
          <img src={pp} className="" />
          <FontAwesomeIcon icon={dropDown ? faCaretUp : faCaretDown} />
          {dropDown ? (
            <div className="dropDown">
              <button>Profile</button>
              <button onClick={() => logout()}>Log out</button>
            </div>
          ) : (
            <div></div>
          )}
        </button>
      </div>
      <div className="feed">
        <textarea placeholder="Share your latest startup idea..."></textarea>
        <button>PITCH IT </button>
        <Post
          name="Jennifer Marshall"
          title="Mental Health App"
          body="An app where you get reminded about water intake, meditation, exercise etc..."
          likes={43}
          comments={23}
        />
        <Post
          name="Jennifer Marshall"
          title="Mental Health App"
          body="An app where you get reminded about water intake, meditation, exercise etc..."
          likes={43}
          comments={23}
        />
        <Post
          name="Jennifer Marshall"
          title="Mental Health App"
          body="An app where you get reminded about water intake, meditation, exercise etc..."
          likes={43}
          comments={23}
        />
        <Post
          name="Jennifer Marshall"
          title="Mental Health App"
          body="An app where you get reminded about water intake, meditation, exercise etc..."
          likes={43}
          comments={23}
        />
      </div>
    </div>
  );
}

Dashboard.propTypes = {
  setUid: PropTypes.func,
};

export default Dashboard;
