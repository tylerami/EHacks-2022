import React, { useState, useEffect } from "react";
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
import Axios from "axios";

function Post(props) {
  const [commentList, setcommentList] = useState(props.comments);
  const [showComments, setshowComments] = useState(false);
  const [likes, setlikes] = useState(props.likes);

  const [comment, setcomment] = useState("");

  function postComment(author, body, pitchID) {
    Axios.put("http://localhost:5000/api/comment", {
      author: author,
      body: body,
      pitchID: pitchID,
    })
      .then((response) => {
        setcommentList([{ author: author, body: body }, ...commentList]);
      })
      .catch((err) => {
        console.log(err.toString());
      });
  }

  function likePost(name, pitchID) {
    setlikes(likes + 1);
    Axios.put("http://localhost:5000/api/pitch")
      .then((response) => {})
      .catch((err) => {
        console.log(err.toString());
      });
  }

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
          <h4>{commentList.length}</h4>
        </div>
        <div className="likes" onClick={() => likePost()}>
          <FontAwesomeIcon icon={faArrowUp} />
          <h4>{likes}</h4>
        </div>
        <button>
          <FontAwesomeIcon className="shareIcon" icon={faShareAlt} />
          Connect
        </button>
      </div>
      <div className="commentSection">
        {showComments ? (
          commentList
            .map((val, key) => {
              return <Comment key={key} name={val.author} comment={val.body} />;
            })
            .reverse()
        ) : (
          <button onClick={() => setshowComments(true)}>
            See the discussion...
          </button>
        )}
        {showComments ? (
          <div className="newComment">
            <textarea
              onChange={(event) => setcomment(event.target.value)}
              placeholder="Add a comment..."
            ></textarea>
            <button
              onClick={() => postComment(props.user, comment, props.id)}
              className="pitch"
            >
              Post comment
            </button>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

Post.propTypes = {
  user: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string,
  comments: PropTypes.array,
  likes: PropTypes.number,
  id: PropTypes.string,
};

export default Post;
