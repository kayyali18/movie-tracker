import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const fakeAuth = {
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

export default PrivateRoute;
