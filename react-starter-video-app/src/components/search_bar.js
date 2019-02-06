import React, { Component } from 'react';

//{ Component } means React.Component. From react pull Component property and assign to Component variable.

/* Function Component */
/*const SearchBar = () => {
return <input />; //React.create
}*/

/**Class  Component*/

//Instead using React.Component import {Component}
class SearchBar extends Component {

//define or initialise state. State is a plain JS object which exists on any class based component.
//Each instance of Class Based component has its own copy of state. 
constructor(props) {
  super(props); // calling parent constructor

  this.state = { term : '' }; //creating state by creating an object   and assigining to this.state

}


 render() {

   //return <input onChange = {this.onInputChange} />;
  
  // with ES6 syntax using arrow functions
 // you cannot set state as this.state.term = 'someValue..'. It should  always be manipulated with this.setState. This is beacuse to maintain congnivity. React will know that state has been changed. By updating state we make entire component re-render.
 // only for reference this.state.term can be used but not for update.
 //with value = {this.state.term} we are making it is a controlled component whose value will be changed only when state changes.
   return (
     <div className="search-bar">
     <input value = {this.state.term} onChange = { event => 
     this.onInputChange(event.target.value)} />
     </div>
     );
 }

     onInputChange = (term) => {
       this.setState({term});
      this.props.onSearchTermChange(term);  
     }
 

/*
 // Event Handler for onChange of input field
 onInputChange(event) {
   console.log(event.target.value)
 }
 */

}

export default SearchBar;