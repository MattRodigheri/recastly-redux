import React from 'react';
import Search from './../components/Search.js';
import { connect } from 'react-redux';
import thunk from 'redux-thunk';
import handleSearchChange from '../actions/search.js';

var SearchContainer = () => {};

//TODO: define a SearchContainer component which will hook up your action
// dispatchers with your search component props.
//HINT: use react-redux 'connect' method to generate a container component from
//state and dispatch mappings.


//mapStateToProps to get data from state and make data available to our component as props
//The default value for this key of state is an empty array, and it is set in the initial state of our application
//mapDispatchToProps to get the actions functions and make them available to our component under this.props.actions.

//export default connect(mapStateToProps, mapDispatchToProps)(app)