import React from "react";
import PropTypes from "prop-types";
import pp from "../pp.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faArrowUp,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";
import "./components.css";

function Post(props) {
  return (
    <div className="mainCard">
      <div className="topRow">
        <img src={pp} /> <h2>{props.name}</h2>
      </div>
      <h2 className="title">{props.title}</h2>
      <p>{props.body}</p>
      <div className="bottomRow">
        <div className="comments">
          <FontAwesomeIcon icon={faComment} />
          <h4>{props.comments}</h4>
        </div>
        <div className="likes">
          <FontAwesomeIcon icon={faArrowUp} />
          <h4>{props.likes}</h4>
        </div>
      </div>
    </div>
  );
}

Post.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string,
  comments: PropTypes.number,
  likes: PropTypes.number,
};

export default Post;
