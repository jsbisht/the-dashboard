import React, { PropTypes } from 'react';
import {connect} from 'react-redux';

import Card from '../../common-components/card-component/Card';

import '../../../styles/css/styles.css';

class App extends React.Component {
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
              <h2 className="cards-title">Your Cards</h2>
              <div className="cards">
                <Card />
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
