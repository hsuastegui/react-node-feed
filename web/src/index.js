import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import App from './App';
import SearchResults from './SearchResults';
import './index.css';

const Main = () => {
  return(
    <Router>
      <div>
        <Route exact path="/" component={App}/>
        <Route path="/search/:term" component={SearchResults}/>
      </div>
    </Router>
  );
}
ReactDOM.render(
  <Main />,
  document.getElementById('root')
);
