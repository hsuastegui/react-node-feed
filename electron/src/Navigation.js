import React from "react";
import SearchForm from "./SearchForm";

const Navigation = props => {
  const handleClick = e => {
    e.preventDefault();
    props.history.push("/");
  };
  return (
    <div className="row">
      <div className="col-xs-12 col-sm-6">
        <ul className="nav nav-pills">
          <li className={props.match.path === "/" ? "" : "active"}>
            <a href="#" onClick={handleClick}>
              <i className="fa fa-home" /> Home
            </a>
          </li>
        </ul>
      </div>
      <div className="col-xs-12 col-sm-6 text-right">
        <SearchForm />
      </div>
    </div>
  );
};

export default Navigation;
