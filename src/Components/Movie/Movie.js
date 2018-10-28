import React, { Component } from 'react';
import * as api from '../../Helpers/apiCaller.js';

class Movie extends Component{
  constructor(){
    super();
  }


  render(){

    const imgURL = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2';

    const { movie } = this.props;

    return(

      <article>
      <h3>Title: {movie.title}</h3>
      <time dateTime={movie.release_date}>Release date: {movie.release_date}</time>
      <p>Overview: {movie.overview}</p>
      <img src={`${imgURL}${movie.poster}`}/>
      </article>

    )
  }
}


export default Movie;
