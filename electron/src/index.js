import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter, Route } from "react-router";
import App from "./App";
import SearchResults from "./SearchResults";
import "./index.css";

const Main = props => {
  return (
    <MemoryRouter>
      <section className="App container">
        <Route exact path="/" component={App} />
        <Route path="/search/:term" component={SearchResults} />
        {props.children}
      </section>
    </MemoryRouter>
  );
};

ReactDOM.render(<Main />, document.getElementById("root"));
