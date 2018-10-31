import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import MovieContainer from '../MovieContainer/MovieContainer';
import FavesContainer from '../FavesContainer/FavesContainer';

const Main = (props) =>{
  return(
    <div className="Main">
      <Route exact path='/main/favs' props={props} component={FavesContainer} />
      <Route exact path='/main' props={props} component={MovieContainer} />



    </div>
  )
}

export default Main;
