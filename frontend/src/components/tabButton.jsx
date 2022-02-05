import React from "react";
import PropTypes from "prop-types";
import "./components.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faList,
  faTag,
  faComment,
  faQuestionCircle,
  faHeart,
  faRibbon,
} from "@fortawesome/free-solid-svg-icons";

function TabButton(props) {
  const [selected, setselected] = useState(initialState);

  var icons = {
    pitches: faList,
    topics: faTag,
    projects: faRibbon,
    pitches: faQuestionCircle,
    engagement: faComment,
    likes: faHeart,
  };

  return (
    <button className={selected ? "selectedTab" : "tab"}>
      <FontAwesomeIcon icon={icons[props.icon]} />
      {props.text}
    </button>
  );
}

TabButton.propTypes = {
  icon: PropTypes.string,
  callback: PropTypes.func,
  text: PropTypes.string,
};

export default TabButton;
