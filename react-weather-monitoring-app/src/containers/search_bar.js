import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';
import axios from 'axios';


class SearchBar extends Component {

constructor (props) {
  super(props);
  this.state = {term:''};
  this.onInputChange = this.onInputChange.bind(this); //since the callback function for onchange is 'this' function we have to bind the function to instance of SearchBar which is 'this' like we did!
  this.onFormSubmit = this.onFormSubmit.bind(this);
}

onFormSubmit(event) {
  event.preventDefault();
  this.props.fetchWeather(this.state.term);
  this.setState({term : ''});
}

//when we use form element multiple event handlers aren't required. like no need two event handlers like onEnter and onSubmit but preventDefault() is required as a post call will be called everytime by default and it has to be prevented.
  render() {
    return (
      <form onSubmit = {this.onFormSubmit} className = "input-group">
      <input placeholder = "Get forecast in your favourite cities"
      className = "form-control"
      value = {this.state.term}
      onChange = {this.onInputChange}/>
      <span className= "input-group-btn">
        <button type = "submit" className = "btn btn-secondary">Submit</button>
      </span> 
      </form>
    );
  }

//all dom events like onChange,onFocus, etc., will come with event obj.
  onInputChange(event) {
    this.setState({term: event.target.value});
  }
}
  function mapDispathToProps (dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
  }

  export default connect(null, mapDispathToProps)(SearchBar);
