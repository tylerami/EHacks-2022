import React from "react";
import PropTypes from "prop-types";

function Post(props) {
  return (
    <div className="main">
      <div className="topRow"></div>
      <h2 className="title"></h2>
      <p></p>
      <div className="bottomRow"></div>
    </div>
  );
}

Post.propTypes = {};

export default Post;
