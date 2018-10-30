import React, { Component } from 'react'
import { connect } from 'react-redux'
import { latestMovies } from '../Actions/movieActions';
import { isAuthenticated } from '/Users/Cierra/Documents/TP/movie-tracker/movie-tracker/src/Actions/TheActionMan.js';
import Main from './Main/Main';
import Nav from './Nav/Nav';
import Login from './Login/Login'
import * as api from '../Helpers/apiCaller'
import '../styles/App.css';
import { BrowserRouter,
      Route,
      withRouter,
      Link,
      Switch,
      Redirect
      } from 'react-router-dom';


const fakeAuth = {
  isAuthenticated: true,
  authenticate(cb){
    this.isAuthenticated = true
    setTimeout(cb, 100)
  },
  signout(cb){
    this.isAuthenticated = false;
    setTimeout(cb, 100)
  }
}

const PrivateRoute = ({component: Main, ...rest})=>(
  <Route {...rest} render={(props)=>(
    fakeAuth.isAuthenticated == true ? <Main {...props}/> : <Redirect to='/login'/>
  )} />
)

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
    return(
      <Switch>
          <div>
            <PrivateRoute path='/' component={Main} />
            <Route exact path='/login' component={Login} />
          </div>
      </Switch>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  latestMovies: movies => dispatch(latestMovies(movies)),
  isAuthenticated: () => dispatch(isAuthenticated())
})

export default connect(
  null,
  mapDispatchToProps
)(App)
