import React, { Component } from 'react';
import * as api from '../../Helpers/apiCaller.js';
import { connect } from 'react-redux';
import { addFavThunk } from '../../Thunks/addFav';
import { favsLocalThunk } from '../../Thunks/favsLocal.js';




class Movie extends Component {
  constructor() {
    super();
  }

  toggleFav = () => {
    const { toggleFav, movie, userID, resetFavs } = this.props
    toggleFav(movie, userID)
    resetFavs()

  }

  render() {

    const imgURL = 'https://image.tmdb.org/t/p/original';

    const { movie } = this.props;

    return (

      <article className="movie-card">
        <section className='img-box'>
          <div className="fave-star" onClick={this.toggleFav} />
          <img className="movie-img" src={`${imgURL}${movie.poster}`} />
        </section>
        <h3 className="movie-title">{movie.title.toLowerCase()}</h3>
        <section className="date-box">
          <p className="movie-overview">{movie.overview.toLowerCase()}</p>
        </section>
      </article>

    )
  }
}

export const mapStateToProps = state => ({
  userID: state.user.id
})

export const mapDispatchToProps = dispatch => ({
  toggleFav: (movie, userID) => dispatch(addFavThunk(movie, userID))

})
export default connect(mapStateToProps, mapDispatchToProps)(Movie);

Movie.propTypes = {
  toggleFav: PropTypes.func,
  movie: PropTypes.object,
  movieID: PropTypes.number,
  userID: propTypes.number,
  resetFavs: propTypes.func
}