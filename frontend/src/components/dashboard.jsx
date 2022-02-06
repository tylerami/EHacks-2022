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
  const [title, settitle] = useState("");
  const [body, setbody] = useState("");

  function logout() {
    props.setUid(null);
  }

  function loadPitches() {
    Axios.get("https://pitch-start.herokuapp.com/api/pitch")
      .then((response) => {
        console.log(response.data);
        setpostList(response.data.reverse());
      })
      .catch((err) => {
        console.log(err.toString());
      });
  }

  useEffect(() => {
    loadPitches();
  }, []);

  function postPitch(name, title, body) {
    Axios.post("https://pitch-start.herokuapp.com/api/pitch", {
      author: name,
      title: title,
      body: body,
      likes: 0,
      comment: 0,
    })
      .then((response) => {
        loadPitches(); /* setpostList([
          <Post
            user={props.name}
            name={name}
            title={title}
            body={body}
            comments={[]}
            likes={0}
          />,
          ...postList,
        ]); */
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
        <input
          onChange={(event) => settitle(event.target.value)}
          type="text"
          placeholder="Title your pitch..."
        ></input>
        <textarea
          onChange={(event) => setbody(event.target.value)}
          placeholder="Share your latest startup idea..."
        ></textarea>
        <button
          className="pitch"
          onClick={() => postPitch(props.name, title, body)}
        >
          PITCH IT{" "}
        </button>
        {postList.map((val, key) => {
          return (
            <Post
              user={props.name}
              key={key}
              name={val.author}
              title={val.title}
              body={val.body}
              likes={val.likes}
              comments={val.comments}
              id={val._id}
            />
          );
        })}
      </div>
    </div>
  );
}

const posts = [
  <Post
    name="Jennifer Marshall"
    title="Mental Health App"
    body="An app where you get reminded about water intake, meditation, exercise etc..."
    likes={43}
    comments={[
      { name: "Tyler Amirault", comment: "So cool!" },
      {
        name: "Jack Cochran",
        comment: "Would love to discuss this with you",
      },
    ]}
  />,
  <Post
    name="Jennifer Marshall"
    title="Mental Health App"
    body="An app where you get reminded about water intake, meditation, exercise etc..."
    likes={43}
    comments={[]}
  />,
  <Post
    name="Jennifer Marshall"
    title="Mental Health App"
    body="An app where you get reminded about water intake, meditation, exercise etc..."
    likes={43}
    comments={[]}
  />,
  <Post
    name="Jennifer Marshall"
    title="Mental Health App"
    body="An app where you get reminded about water intake, meditation, exercise etc..."
    likes={43}
    comments={[]}
  />,
];

Dashboard.propTypes = {
  setUid: PropTypes.func,
  name: PropTypes.string,
};

export default Dashboard;
