import React from "react";

import Bubble from "../../module-components/bubbles-components/Bubbles";

import "./TestPad.scss";

class TestPad extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="application">
        <section className="testpad">
          <Bubble />
        </section>
      </div>
    );
  }
}

export default TestPad;
