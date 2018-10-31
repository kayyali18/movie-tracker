import React, { Component } from 'react';
import Movie from '../Movie/Movie';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'
import Nav from '../Nav/Nav'
import { favsLocalThunk } from '../../Thunks/favsLocal.js';
import PropTypes from 'prop-types';
import Faves from '../Faves/Faves';

class MovieContainer extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    const { user, getUserFavs } = this.props;
    getUserFavs(user.id)
  }

  resetFavs = () => {
    const { user, getUserFavs } = this.props;
    getUserFavs(user.id)
  }

  makeMovies = () => {
    const { latestMovies } = this.props;

    const movies = latestMovies.map(movie => {
      return <Movie movie={movie} resetFavs={this.resetFavs} key={movie.id} />
    })
    return movies;
  }

  makeFaves = () => {
    const { faveMovies } = this.props;

    const movies = faveMovies.map(movie => {
      return <Faves movie={movie} resetFavs={this.resetFavs} key={movie.id} />
    })

    return movies;
  }

  render() {
    if (this.props.faveSelected && this.props.faveMovies.length) {
      return (
        <section>
          <section className="even-bigger-movie-box">
            <section className="text-box">
              <Nav />
            </section>
            <section className='movie-box'>
              {this.makeFaves()}
            </section>
            <div className="arrow" />
          </section>
        </section>
      )
    } else {
      return (
        <section>
          <section className="even-bigger-movie-box">
            <section className="text-box">
              <Nav />
            </section>
            <section className='movie-box'>
              {this.makeMovies()}
            </section>
            <div className="arrow" />
          </section>
        </section>
      )
    }
  }
}


const mapStateToProps = ({ movies, favs, user, faveSelected }) => ({
  latestMovies: movies,
  faveMovies: favs,
  user,
  faveSelected

})

const mapDispatchToProps = (dispatch) => ({
  getUserFavs: id => dispatch(favsLocalThunk(id))
})


export default connect(mapStateToProps, mapDispatchToProps)(MovieContainer);

MovieContainer.propTypes = {
  movies: PropTypes.object,
  user: PropTypes.object,
  faveMovies: PropTypes.object,
  movie_id: PropTypes.number
}