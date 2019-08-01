import React from 'react';
import { Link } from 'react-router-dom';
export default () => (
  <div className="App-intro">
    <ul>
      <li>
        <Link to="/bar-chart">Bar Chart</Link>
      </li>
      <li>
        <Link to="/donut-chart">Donut Chart</Link>
      </li>
      <li>
        <Link to="/bar-chart/animated">Animated Bar Chart</Link>
      </li>
    </ul>
  </div>
);
