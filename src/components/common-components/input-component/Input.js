import React from "react";

import "./Input.scss";

class Input extends React.Component {
    render() {
        return (
          <div className="input-field">
            <label htmlFor=""></label>
            <input type="text" value={this.props.value} onChange={this.props.titleChange}/>
          </div>
        );
    }
}

export default Input;
