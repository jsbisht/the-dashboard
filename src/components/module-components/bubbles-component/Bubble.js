import React from "react";
import BubbleOptions from "./BubbleOptions";

import "./Bubble.scss";

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
      <div
        className="bubble-container"
        onMouseEnter={this.toggleBubbleOptions}
        onMouseLeave={this.toggleBubbleOptions}
      >
        {this.state.visible ? (
          <BubbleOptions visible={this.state.visible} />
        ) : null}
        <div className="bubble" />
      </div>
    );
  }
}

export default Bubble;
