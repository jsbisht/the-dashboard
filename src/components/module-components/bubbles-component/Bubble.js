import React from "react";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Bubble.scss";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faArrowDown } from "@fortawesome/free-solid-svg-icons";

library.add(faCheck);
library.add(faArrowDown);

class Bubble extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      visible: false
    };
  }

  toggleBubbleOptions = () => {
    this.setState({ visible: !this.state.visible });
  };

  render() {
    return (
      <div className="bubble-container">
        <div
          className={"bubble-options" + (this.state.visible ? " visible" : "")}
        >
          <div className="option done">
            <FontAwesomeIcon icon="check" />
          </div>
          <div className="option drop">
            <FontAwesomeIcon icon="arrow-down" />
          </div>
        </div>
        <div
          className="bubble"
          onMouseEnter={this.toggleBubbleOptions}
          onMouseLeave={this.toggleBubbleOptions}
        />
      </div>
    );
  }
}

export default Bubble;
