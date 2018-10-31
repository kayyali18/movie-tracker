import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { isAuthenticated, switchFave } from '../../Actions';
import PropTypes from 'prop-types';


class Nav extends Component {
  constructor(props) {
    super(props);
  }
  logoutUser = () => {
    this.props.logoutUser(false)

  }

  handleFavesTrue = () => {
    const { switchFave } = this.props
    switchFave(true)
  }
  handleFavesFalse = () => {
    const { switchFave } = this.props
    switchFave(false)
  }

  render() {

    return (
      <div>
        <h3 className="now-playing-title-text" onClick={this.handleFavesFalse}> now playing </h3>
        <h3 className='faves' onClick={this.handleFavesTrue}> faves </h3>
        <NavLink to="/login"><h3 className='logout' onClick={this.logoutUser}> log out</h3></NavLink>
      </div>
    )
  }
}




export const mapStateToProps = state => ({
  faveSelected: state.faveSelected
})

export const mapDispatchToProps = dispatch => ({
  logoutUser: (bool) => dispatch(isAuthenticated(bool)),
  switchFave: (bool) => dispatch(switchFave(bool))
})
export default connect(mapStateToProps, mapDispatchToProps)(Nav)

Nav.propTypes = {
  logoutUser: PropTypes.bool
}