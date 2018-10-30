import React, { Component } from 'react';
import * as api from '../../Helpers/apiCaller.js';

class Movie extends Component {
  constructor() {
    super();
  }


  render() {

    const imgURL = 'https://image.tmdb.org/t/p/original';

    const { movie } = this.props;

    return (

      <article className="movie-card">
        <section className='img-box'>
          <img className="movie-img" src={`${imgURL}${movie.poster}`} />
        </section>
        <h3 className="movie-title">{movie.title.toLowerCase()}</h3>
        <section className="date-box">
          {/* <section className="release"> {movie.release_date}</section> */}
          <p className="movie-overview">{movie.overview.toLowerCase()}</p>
        </section>
      </article>

    )
  }
}


export default Movie;
