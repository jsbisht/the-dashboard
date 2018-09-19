import React from "react";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./BubbleOptions.scss";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faArrowDown } from "@fortawesome/free-solid-svg-icons";

library.add(faCheck);
library.add(faArrowDown);

class BubbleOptions extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <ul
        className={"circle-container" + (this.props.visible ? " visible" : "")}
      >
        <li>
          <FontAwesomeIcon icon="check" />
        </li>
        <li />
        <li>
          <FontAwesomeIcon icon="check" />
        </li>
      </ul>
    );
  }
}

export default BubbleOptions;
