import PropTypes from "prop-types";
import pp from "../pp.png";

function Comment(props) {
  return (
    <div className="comment">
      <div className="row">
        <img src={pp} /> <h2>{props.name}</h2>
      </div>
      <p className="commentBody">{props.comment}</p>
    </div>
  );
}

Comment.propTypes = {
  name: PropTypes.string,
  comment: PropTypes.string,
};

export default Comment;
