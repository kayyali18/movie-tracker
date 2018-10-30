import React from 'react';
import { NavLink } from 'react-router-dom'


const Nav = () => {
  return (
    <div>
      <h3 className="now-playing-title-text"> now playing </h3>
      <h3 className='faves'> faves </h3>
      <h3 className='logout'> <NavLink to="/login">log out</NavLink> </h3>
    </div>
  )
}

export default Nav;
