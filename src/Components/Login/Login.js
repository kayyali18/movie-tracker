import React from 'react';
import { Route, Link } from 'react-router-dom';
import Main from '../Main/Main';

const Login = () =>{
  return(
    <div>
      <section className="login-credentials">
        <h2>Login</h2>
        <input className="user-name input-dimensions" placeholder="user name"/>
        <input className="email input-dimensions" placeholder="email"/>
        <Link to="/main"><button>Submit</button></Link>
      </section>

      <Route exact path='/main' render={()=>{
        return <Main />
      }}
      />
    </div>
  )
}

export default Login;
