import React from 'react';
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
