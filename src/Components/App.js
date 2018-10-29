import React, { Component } from 'react';
import {connect} from 'react-redux';
import {latestMovies} from '../Actions/movieActions'
import Login from './Login/Login';
import Header from './Header/Header';
import Nav from './Nav/Nav';
import Movie from './Movie/Movie';
import MovieContainer from './MovieContainer/MovieContainer';
import * as api from '../Helpers/apiCaller';
import { Route, withRouter, Link, Redirect } from 'react-router-dom';
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props)
  }

async componentDidMount() {
  const {latestMovies} = this.props
  const nowPlaying = await api.fetchNowPlaying()

  latestMovies(nowPlaying)

}
  render() {
    return (
      <div>
        <Route exact path='/login' render={()=>{
          return(
            <div className="App">
              <Login />
            </div>
          )
        }}
      />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) =>({
  latestMovies: (movies) => dispatch(latestMovies(movies))
})

const moviesProps = withRouter(connect(null, mapDispatchToProps)(App));

export default moviesProps;
