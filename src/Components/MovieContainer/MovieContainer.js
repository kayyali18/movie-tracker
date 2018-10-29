import React, { Component } from 'react';
import Movie from '../Movie/Movie';
import {connect} from 'react-redux';
import Data from '../../Helpers/Datacleaner.js';

class MovieContainer extends Component{
  constructor(){
    super();
  }

  makeMovies = () =>{
    const { latestMovies } = this.props;

    const movies = latestMovies.map(movie=>{
      return <Movie movie={movie} key={movie.id}/>
    })

    return movies;
  }

  render(){

    return(
      <section>
        {this.makeMovies()}
      </section>
    )
  }
}


const mapStateToProps = ({movies}) =>({
  latestMovies: movies
})

export default connect(mapStateToProps, null)(MovieContainer);
