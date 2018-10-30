import React, { Component } from 'react';
import Movie from '../Movie/Movie';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'
import Nav from '../Nav/Nav'

import Data from '../../Helpers/Datacleaner.js';

class MovieContainer extends Component {
  constructor() {
    super();
  }

  makeMovies = () => {
    const { latestMovies } = this.props;

    const movies = latestMovies.map(movie => {
      return <Movie movie={movie} key={movie.id} />
    })

    return movies;
  }

  render() {

    return (
      <section>
        <nav>

        </nav>
        <section className="even-bigger-movie-box">
          <section className="text-box">
            <Nav />
          </section>
          <div className="arrow" />

          <section className='movie-box'>
            {this.makeMovies()}
          </section>
        </section>
      </section>
    )
  }
}


const mapStateToProps = ({ movies }) => ({
  latestMovies: movies
})

export default connect(mapStateToProps, null)(MovieContainer);
