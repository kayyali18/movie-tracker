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

  resetForm = () => {
    this.setState({password: ''})
  }

  handleChange = (event) => {
    const {value, name} = event.target
    this.setState({[name]: value})
  }

  submitLogin = (e) => {
    const {loginCheck} = this.props
    const {user, password} = this.state
    e.preventDefault()
    // loginCheck(user, password)
    this.resetForm()
  }
  
  render() {
    const { user, password } = this.state
    return (
      <form className="login-form" onSubmit={this.submitLogin}>
        <h2>Login</h2>
        <label>
          Username
          <input name='user' placeholder="Username" type="text" value={user} onChange={this.handleChange}/>
        </label>
        <label>
          Password
          <input name='password' placeholder="Password" type="password" value={password} onChange={this.handleChange}/>
        </label>
          <button>Submit</button>
      </form>
    )
  }
}

export default Login
