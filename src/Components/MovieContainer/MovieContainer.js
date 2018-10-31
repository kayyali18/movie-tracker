import React, { Component } from 'react';
import Movie from '../Movie/Movie';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'
import Nav from '../Nav/Nav'
import { favsLocalThunk } from '../../Thunks/favsLocal.js';

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

  render() {

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


const mapStateToProps = ({ movies, faveMovies, user }) => ({
  latestMovies: movies,
  faveMovies,
  user

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