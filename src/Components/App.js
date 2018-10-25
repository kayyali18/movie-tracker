import React, { Component } from 'react';
import Login from './Login/Login';
import Header from './Header/Header';
import Nav from './Nav/Nav';
import MovieContainer from './MovieContainer/MovieContainer';
import { Route, NavLink } from 'react-router-dom';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path='/' render={()=>{
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

export default App;
