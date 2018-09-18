import React from "react";
import BubbleOptions from "./BubbleOptions";

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
      visible: true
    };
  }

  toggleBubbleOptions = () => {
    //this.setState({ visible: !this.state.visible });
  };

  render() {
    return (
      <div
        className="bubble-container"
        onMouseEnter={this.toggleBubbleOptions}
        onMouseLeave={this.toggleBubbleOptions}
      >
        <BubbleOptions />
        <div className="bubble" />
      </div>
    );
  }
}

export default Bubble;
