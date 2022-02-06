import PropTypes from "prop-types";
import pp from "../logo.png";

function Comment(props) {
  return (
    <div>
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
