import * as types from '../Actions/userActions';
import * as movieData from '/Users/Cierra/Documents/TP/movie-tracker/movie-tracker/src/Helpers/apiCaller.js';

const movieReducer = (state = [], action) =>{
  switch(action.type){
    case 'NOW_PLAYING':
      return [movieData.movieInfo()]
    default:
      return state;
  }
}

export const favorites = (state = [], action) =>{
  switch(action.type){
    case 'ADD_FAVORITE':
      return undefined
    case 'REMOVE_FAVORITE':
    default:
      return state
  }
}

export default movieReducer;
