import React, { useState } from "react";
import PropTypes from "prop-types";
import pp from "../pp.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faArrowUp,
  faShareAlt,
} from "@fortawesome/free-solid-svg-icons";
import "./components.css";
import Comment from "./comment";

function Post(props) {
  const [commentList, setcommentList] = useState([]);

  function postComment(name, pitchID, comment) {}

  function likePost(name, pitchID) {}

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
        <button>
          <FontAwesomeIcon className="shareIcon" icon={faShareAlt} />
          Connect
        </button>
      </div>
      <div className="commentSection">
        {props.comments <= 0 ? (
          <div> </div>
        ) : commentList == [] ? (
          <button>See the discussion...</button>
        ) : (
          commentList.map((val, key) => {
            return (
              <Comment
                name={val.name}
                pp={val.pp}
                comment={val.comment}
              ></Comment>
            );
          })
        )}
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
