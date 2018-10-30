import React, { Component } from 'react';
import * as api from '../../Helpers/apiCaller.js';

class Movie extends Component {
  constructor() {
    super();
  }


  render() {

    const imgURL = 'https://image.tmdb.org/t/p/w500';

    const { movie } = this.props;

    return (

      <article className="movie-card">
        <img className="movie-img" src={`${imgURL}${movie.poster}`} />
        <h3 className="movie-title">{movie.title.toLowerCase()}</h3>
        <section className="date-box">
          <section dateTime={movie.release_date}>Release date: {movie.release_date}</section>
          <p>Overview: {movie.overview}</p>
        </section>
      </article>

    )
  }
}


export default Movie;
