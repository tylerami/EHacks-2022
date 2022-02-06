import React from "react";
import PropTypes from "prop-types";
import logo from "../logo.png";
import pp from "../pp.png";
import { useState, useEffect } from "react";
import "./dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faCaretUp,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import Post from "./post";
import Axios from "axios";

function Dashboard(props) {
  const [tab, settab] = useState("Pitch Discussions");
  const [dropDown, setdropDown] = useState(false);
  const [postList, setpostList] = useState([]);

  function logout() {
    props.setUid(null);
  }

  useEffect(() => {
    Axios.get("/api/pitch")
      .then((response) => {
        setpostList(
          response.data.map((val, key) => {
            return (
              <Post
                name={val.name}
                title={val.title}
                body={val.body}
                comments={val.comments}
                likes={val.likes}
              />
            );
          })
        );
      })
      .catch((err) => {
        console.log(err.toString());
      });
  }, []);

  function postPitch(name, title, body) {
    Axios.post("/api/pitch", {
      name: name,
      title: title,
      body: body,
      likes: 0,
      comment: 0,
    })
      .then((response) => {
        setpostList(
          <Post name={name} title={title} body={body} comments={[]} likes={0} />
        );
      })
      .catch((err) => {
        console.log(err.toString());
      });
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
        <input type="text" placeholder="Title your pitch..."></input>
        <textarea placeholder="Share your latest startup idea..."></textarea>
        <button className="pitch">PITCH IT </button>
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
  name: PropTypes.string,
};

export default Dashboard;
