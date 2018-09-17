import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Bubble.scss";

class Bubble extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="bubble-container">
        <div className="bubbles-options">
          <div className="done">
            <FontAwesomeIcon icon="check" />
          </div>
          <div className="drop" />
        </div>
        <div className="bubble" />
      </div>
    );
  }
}

export default Bubble;
