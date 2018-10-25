import React from 'react';
import { Route, Link } from 'react-router-dom';

const Login = () =>{
  return(
    <div>
      <section className="login-credentials">
        <h2>Login</h2>
        <input className="user-name input-dimensions" placeholder="user name"/>
        <input className="email input-dimensions" placeholder="email"/>
        <Link to="/"><button>Submit</button></Link>
      </section>
    </div>
  )
}

export default Login;
