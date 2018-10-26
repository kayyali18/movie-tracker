import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, NavLink } from 'react-router-dom';
import { fetchNowPlaying } from '../../Helpers/apiCaller';

class App extends Component {
  async componentDidMount() {
    const nowPlaying = await fetchNowPlaying();
    console.log(nowPlaying);
  }
}

export default App;