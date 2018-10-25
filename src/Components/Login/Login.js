import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: '',
      password: '',
    }
  }

  handleChange = (event) => {
    const {value, name} = event.target
    this.setState({[name]: value})
  }
  render() {
    const { user, password } = this.state
    return (
      <form className="login-form" onSubmit={this.handleSubmit}>
        <h2>Login</h2>
        <label>
          Username
          <input name='user' placeholder="Username" type="text" value={user} onChange={this.handleChange}/>
        </label>
        <label>
          Password
          <input name='password' placeholder="Password" type="password" value={password} onChange={this.handleChange}/>
        </label>
        <Link to="/">
          <button>Submit</button>
        </Link>
      </form>
    )
  }
}

export default Login
