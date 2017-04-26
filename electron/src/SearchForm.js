import React, { Component } from 'react';
import './SearchForm.css';

class SearchForm extends Component {
  state = {
    term: ''
  };
  handleChange = (e) => {
    this.setState({
      term: e.target.value
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleForm(this.state.term);
  }
  render(){
    return(
      <form onSubmit={this.handleSubmit} className="SearchForm form-inline">
        <div className="form-group">
          <input className="form-control" type="text" placeholder="search" value={this.state.term} onChange={this.handleChange} />
        </div>
        <button className="btn btn-default" type="submit"><i className="fa fa-search" aria-hidden="true"></i> Search</button>
      </form>
    )
  }
}

export default SearchForm;
