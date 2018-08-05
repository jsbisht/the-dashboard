import React, { PropTypes } from "react";
import { connect } from "react-redux";

import Input from "../input-component/Input";
import * as CardActions from "../../../utility/actions/Card.Action";

import "./Card.scss";

class Card extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.onClickSave = this.onClickSave.bind(this);
    this.onTitleChange = this.onTitleChange.bind(this);
  }

  onTitleChange(event) {
    const card = this.state.card;
    card.title = event.target.value;
    this.setState({ card: card });
  }

  onClickSave(event) {
    this.props.dispatch(CardActions.createCard(this.state.card));
  }

  render() {
    return (
      <div className="card">
        <Input value={this.props.card.title} titleChange={this.onTitleChange} />
        <button type="submit" onClick={this.onClickSave}>
          Save
        </button>
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
//export default Card;
