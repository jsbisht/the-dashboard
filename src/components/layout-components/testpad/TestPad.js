import React from "react";

import Bubbles from "../../module-components/bubbles-component/Bubbles";

import "./TestPad.scss";

class TestPad extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="application">
        <section className="testpad">
          <Bubbles />
        </section>
      </div>
    );
  }
}

export default TestPad;
