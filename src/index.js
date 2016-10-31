import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';

var environment = process.env.NODE_ENV;
var products;

if (environment === "development") {
  // Since this is a reasonably small and static data feed, I chose to
  // pull the full set of data into cache for ease of use and speed
  products = require('./data/products.json');
} else {
  // handle production ajax requests
}

ReactDOM.render(
  <App  products={products} />,
  document.getElementById('root')
);
