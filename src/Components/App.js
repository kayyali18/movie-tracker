import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';

import Login from './Login/Login';
import Header from './Header/Header';
import Nav from './Nav/Nav';
import Movie from './Movie/Movie';
import MovieContainer from './MovieContainer/MovieContainer';
import * as api from '../Helpers/apiCaller'
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props)
  }

async componentDidMount() {
  const nowPlaying = await api.fetchNowPlaying()
  console.log (nowPlaying)
}
  render() {
    return (
      <div>
        <Route exact path='/' render={()=>{
          return(
            <div className="App">
              <MovieContainer /> 
            </div>
          )
        }}
      />
      </div>

    );
  }

}

const mapDispatchToProps = (dispatch) =>({
  fetchMovies: () => {

  }
})

export default App;
