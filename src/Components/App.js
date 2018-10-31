import React, { Component } from 'react'
import { connect } from 'react-redux'
import { latestMovies, isAuthenticated } from '../Actions';
import { Route, withRouter, Redirect } from 'react-router-dom';
import Main from './Main/Main';
import Login from './Login/Login'
import * as api from '../Helpers/apiCaller'
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props)

  }

  async componentDidMount() {
    const { latestMovies } = this.props;
    const nowPlaying = await api.fetchNowPlaying()
    latestMovies(nowPlaying)
  }

  render() {
    return (
      <div>
        {this.props.isAuthenticated ? <Redirect to='/main' /> : <Redirect to='/login' />}
        <Route exact path='/main' props={this.props} component={Main} />
        <Route exact path='/login' component={Login} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.isAuthenticated,
})

const mapDispatchToProps = (dispatch) => ({
  latestMovies: movies => dispatch(latestMovies(movies)),
})

const exportWithRouter = withRouter(connect(mapStateToProps, mapDispatchToProps)(App))

export default exportWithRouter;
