import React, { Component } from 'react';
import * as api from '../../Helpers/apiCaller.js';

class Movie extends Component {
  constructor() {
    super();
  }


  render() {

    const imgURL = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2';

    const { movie } = this.props;

    return (

      <article class="movie-card">
        <img src={`${imgURL}${movie.poster}`} />
        <h3 className="movie-title">Title: {movie.title}</h3>
        <time dateTime={movie.release_date}>Release date: {movie.release_date}</time>
        <p>Overview: {movie.overview}</p>
      </article>

    )
  }
}


export default Movie;
