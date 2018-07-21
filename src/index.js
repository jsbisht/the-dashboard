import React from 'react';
import { render } from 'react-dom';

import './styles/css/styles.css';

import Card from './components/common-components/card-component/Card';

render(
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
        <Card />
        <Card />
        <Card />
      </div>
    </section>
    <footer className="footer">
      <h2 className="copyright">Bhai mast dashboard banaye ho !!!</h2>
      <h3 className="copyright">&copy; 2018</h3>
    </footer>
  </div>,
  document.getElementById('app')
);
