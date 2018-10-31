import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux'

export const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100)
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100)
  }
}

const PrivateRoute = (props, { component: Main, ...rest }) => {
  return (
    <Route {...rest} render={(props) => (
      props.isAuthenticated === true ? <Main {...props} /> : <Redirect to='/login' />
    )} />
  )
}


export const mapStateToProps = state => ({
  isAuthenticated: state.isAuthenticated
})

const exportWithRouter = withRouter(connect(mapStateToProps, null)(PrivateRoute))

export default exportWithRouter;
