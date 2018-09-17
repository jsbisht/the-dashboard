import React from "react";

import Bubble from "./Bubble";

import "./Bubbles.scss";

class Bubbles extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="bubbles-container">
        <div className="bubbles-in-air">
          <Bubble />
        </div>
        <div className="bubbles-on-ground">
          <Bubble />
        </div>
      </div>
    );
  }
}

export default Bubbles;
