import React, { PropTypes } from "react";
import { connect } from "react-redux";

import Input from "../input-component/Input";
import * as CardActions from "../../../utility/actions/Card.Action";

import "./Card.scss";

class Card extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  onEnter(event) {
    //this.props.dispatch(CardActions.createCard(card));
  }

  render() {
    return (
      <div className="card">
        {this.props.card.items.map((item, index) => (
          <div key={index}>
            <input defaultValue={item} onKeyUp={this.onEnter} />
            <span>{item}</span>
          </div>
        ))}
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    cards: state.cards
  };
}

Card.propTypes = {
  dispatch: PropTypes.func.isRequired,
  card: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(Card);
