import React from 'react';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { isAuthenticated } from '../../Actions';
import { mapStateToProps } from '../PrivateRoute';

const Nav = (props) => {
  const logoutUser = () => {
    props.logoutUser(false)

  }
  return (
    <div>
      <h3 className="now-playing-title-text"> now playing </h3>
      <NavLink to='/favs'>
        <h3 className='faves'> faves </h3>
      </NavLink>
      <NavLink to="/login"><h3 className='logout' onClick={logoutUser}> log out</h3></NavLink>
    </div>
  )
}




export const mapDispatchToProps = dispatch => ({
  logoutUser: (bool) => dispatch(isAuthenticated(bool))
})
export default connect(null, mapDispatchToProps)(Nav)

Nav.propTypes = {
  logoutUser: PropTypes.bool
}