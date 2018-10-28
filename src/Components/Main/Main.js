import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';

import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import MovieContainer from '../MovieContainer/MovieContainer';
import Login from '../Login/Login';

const Main = () =>{
  return(
    <div className="App">
      <Header />
      <Nav />
      <MovieContainer />
      <Login />
    </div>
  )
}

export default Main;
