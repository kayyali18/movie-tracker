import React, { Component } from 'react';
import * as api from '../../Helpers/apiCaller.js';
import { connect } from 'react-redux';
import { toggleFavReducer } from '../../Reducers/toggleFavReducer.js';
import { addFav } from '../../Actions/index.js';

class Movie extends Component {
  constructor() {
    super();
  }

  toggleFav = () => {
    const {toggleFav, movie, userID} = this.props
    console.log (userID)
    console.log ('hi')
    toggleFav(movie, userID)
  }

  render() {

    const imgURL = 'https://image.tmdb.org/t/p/original';

    const { movie } = this.props;

    return (

      <article className="movie-card">
        <section className='img-box'>
          <div className="fave-star" onClick={this.toggleFav}/>
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

export const mapStateToProps = state => ({
  userID: state.user.id
})

export const mapDispatchToProps = dispatch => ({
  toggleFav: (fav, userID) => dispatch(addFav(fav, userID))
})
export default connect(mapStateToProps, mapDispatchToProps)(Movie);
