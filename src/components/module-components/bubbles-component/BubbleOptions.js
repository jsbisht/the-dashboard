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

    this.state = {
      visible: true
    };
  }

  toggleBubbleOptions = () => {
    //this.setState({ visible: !this.state.visible });
  };

  render() {
    return (
      <ul className="circle-container">
        <li>
          <FontAwesomeIcon icon="check" />
        </li>
        <li>
          <FontAwesomeIcon icon="check" />
        </li>
        <li>
          <FontAwesomeIcon icon="check" />
        </li>
        <li>
          <FontAwesomeIcon icon="check" />
        </li>
        <li>
          <FontAwesomeIcon icon="check" />
        </li>
        <li>
          <FontAwesomeIcon icon="check" />
        </li>
        <li>
          <FontAwesomeIcon icon="check" />
        </li>
        <li>
          <FontAwesomeIcon icon="check" />
        </li>
      </ul>
    );
  }
}

export default BubbleOptions;
