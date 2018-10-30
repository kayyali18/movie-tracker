import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import MovieContainer from '../MovieContainer/MovieContainer';

const Main = () =>{
  return(
    <div className="Main">
      <Header />
      <Nav />
      <MovieContainer />
    </div>
  )
}

export default Main;
