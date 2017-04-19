import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

class SearchForm extends Component {
  state = {
    term: '',
    sent: false
  };
  handleChange = (e) => {
    this.setState({
      term: e.target.value
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      sent: true
    });
  }
  render(){
    if(this.state.sent) return <Redirect to={`/search/${this.state.term}`} />
    return(
      <form onSubmit={this.handleSubmit} className="form-inline">
        <div className="form-group">
          <input className="form-control" type="text" placeholder="search" value={this.state.term} onChange={this.handleChange} />
        </div>
        <button className="btn btn-default" type="submit"><i className="fa fa-search" aria-hidden="true"></i> Search</button>
      </form>
    )
  }
}

export default SearchForm;
