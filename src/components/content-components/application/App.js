import React, { PropTypes } from "react";
import { connect } from "react-redux";

import Card from "../../common-components/card-component/Card";

import "./App.scss";
import "../../../styles/css/styles.css";

class App extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      cards: []
    };

    this.addCard = this.addCard.bind(this);
  }
  addCard() {
    const cards = [...this.state.cards];
    cards.push({ title: "Title Hai" });
    this.setState({ cards });
  }
  render() {
    return (
      <div className="application">
        <header>
          <h1 className="site-name">The Dashboard</h1>
          <h3 className="greetings">
            <span className="greet-user">Welcome Jagdeep. </span>
            <span className="daily-motivation">Today is gonna be awesome.</span>
          </h3>
        </header>
        <section className="dashboard">
          <div className="action-bar">
            <h2 className="title-text cards-title">Cards</h2>
            <div className="title-action">
              <button className="add-card" onClick={this.addCard}>
                +
              </button>
            </div>
          </div>
          <div className="cards">
            {this.state.cards.map(card => <Card card={card} />)}
          </div>
        </section>
        <footer className="footer">
          <div>{JSON.stringify(this.props.cards)}</div>
          <h2 className="copyright">Bhai mast dashboard banaye ho !!!</h2>
          <h3 className="copyright">&copy; 2018</h3>
        </footer>
      </div>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  cards: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    cards: state.cards
  };
}

export default connect(mapStateToProps)(App);
