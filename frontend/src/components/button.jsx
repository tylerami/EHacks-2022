import React from "react";
import PropTypes from "prop-types";

function Button(props) {
  return (
    <button className={props.class} onClick={props.callback}>
      {props.text}
    </button>
  );
}

Button.propTypes = {
  class: PropTypes.string,
  callback: PropTypes.func,
  text: PropTypes.string,
};

export default Button;
