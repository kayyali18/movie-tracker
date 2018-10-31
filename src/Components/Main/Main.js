import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import MovieContainer from '../MovieContainer/MovieContainer';
import FavesContainer from '../FavesContainer/FavesContainer';

const Main = (props) =>{
  return(
    <div className="Main">

      <Route exact path='/favs' render={(props)=>{
        return <FavesContainer props={props}/>
      }}
      />

      <Route exact path='/main' props={props} component={MovieContainer} />



    </div>
  )
}

export default Main;
