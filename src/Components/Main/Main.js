import React from 'react';
import { Route } from 'react-router-dom';
import MovieContainer from '../MovieContainer/MovieContainer';
import PropTypes from 'prop-types';


const Main = (props) => {
  return (
    <div className="Main">
      <Route exact path='/main' props={props} component={MovieContainer} />

    </div>
  )
}

export default Main;

Main.propTypes = {
  props: PropTypes.object
}