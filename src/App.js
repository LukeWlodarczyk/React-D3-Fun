import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Home from './views/home';
import BarChart from './views/bar-chart';
import AnimatedBarChart from './views/bar-chart/animated-chart';
import DonutChart from './views/donut-chart';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav className="App-nav">
            <Link to="/">Home</Link>
          </nav>
          <Route exact path="/" component={Home} />
          <Route exact path="/bar-chart" component={BarChart} />
          <Route
            exact
            path="/bar-chart/animated"
            component={AnimatedBarChart}
          />
          <Route exact path="/donut-chart" component={DonutChart} />
        </div>
      </Router>
    );
  }
}

export default App;
