import React from 'react';
import Search from './../components/Search.js';
import { connect } from 'react-redux';
import thunk from 'redux-thunk';
import handleSearchChange from '../actions/search.js';

const mapStateToProps = () => {};

const mapDispatchToProps = (dispatch) => ({
  handleSearchInputChange: (q) => {
    dispatch(handleSearchChange(q));
  }
});

var SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);

export default SearchContainer;