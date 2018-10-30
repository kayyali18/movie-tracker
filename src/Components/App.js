import React, { Component } from 'react'
import { connect } from 'react-redux'
import PrivateRoute from '/Users/Cierra/Documents/TP/movie-tracker/movie-tracker/src/Components/PrivateRoute.js';
import { latestMovies } from '../Actions/movieActions';
import { isAuthenticated } from '/Users/Cierra/Documents/TP/movie-tracker/movie-tracker/src/Actions/TheActionMan.js';
import { BrowserRouter, Route, withRouter, Switch, Redirect } from 'react-router-dom';
import Main from './Main/Main';
import Nav from './Nav/Nav';
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
<<<<<<< HEAD
    return (
      <div>

        <Route
          exact
          path="/"
          render={() => {
            return (
              <div className="App">
                <MovieContainer />
              </div>
            )
          }}
        />
        <Route
          exact
          path="/login"
          render={() => {
            return (
              <Login />
            )
          }}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  userExists: state.userExists,
  userSuccess: state.userSuccess
})

const mapDispatchToProps = dispatch => ({
  latestMovies: movies => dispatch(latestMovies(movies)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
=======
    return(
          <div>
            <PrivateRoute exact path='/' component={Main} />
            <Route exact path='/login' component={Login} />
          </div>
    );
  }
}

const mapStateToProps = (state) =>({
  isAuthenticated: state.isAuthenticated,
})

const mapDispatchToProps = (dispatch) => ({
  latestMovies: movies => dispatch(latestMovies(movies)),
})

const exportWithRouter = withRouter(connect(null, mapDispatchToProps)(App))

export default exportWithRouter;
>>>>>>> 94aa23b1293935aed0323e3ac301fce9a45aed95
