import React from "react";

import "./Bubbles.scss";

class Bubbles extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="bubbles-container">
        <div className="bubbles-in-air">
          <div className="bubble" />
        </div>
        <div className="bubbles-on-ground">
          <div className="bubble" />
        </div>
      </div>
    );
  }
}

export default Bubbles;
