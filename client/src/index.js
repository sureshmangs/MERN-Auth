import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './index.css';
import App from './App';
import Homepage from './components/Homepage';

import reportWebVitals from './reportWebVitals';

const routing = (
  <Router>
    <Switch>
      <App>
        <Route exact path="/" component={Homepage} />
      </App>
    </Switch>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
