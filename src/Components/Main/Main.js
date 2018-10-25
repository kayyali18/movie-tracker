import React, { Component } from 'react';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import MovieContainer from '../MovieContainer/MovieContainer';
import { Route, NavLink } from 'react-router-dom';

const Main = () =>{
  return(
    <div className="App">
      <Header />
      <Nav />
      <MovieContainer />
    </div>
  )
}

export default Main;
