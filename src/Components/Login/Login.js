import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import '../../styles/2-layouts/layouts-dir.sass'
import '../../styles/1-base/base-dir.sass'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      username: '',
      password: '',
    }
  }

  async componentDidMount() {
    const url = `http://localhost:3000/api/users`
    const req = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: 'tman2272@aol.com',
        password: 'password',
      }),
      headers: {
        'content-type': 'application/json',
      },
    })

    console.log(req)
  }

  resetForm = () => {
    this.setState({ password: '' })
  }

  handleChange = event => {
    const { value, name } = event.target
    this.setState({ [name]: value })
  }

  submitLogin = e => {
    const { loginCheck } = this.props
    const { user, password } = this.state
    e.preventDefault()
    // loginCheck(user, password)
    this.resetForm()
  }

  render() {
    const { email, username, password } = this.state
    return (
      <section className="login-main">
        <div className="app-logo"></div>
        <form
          className="login-form"
          onSubmit={this.submitLogin}
          aria-label="Existing user login form"
        >
          <div className="user-image"></div>
          <h2>Welcome Back</h2>
          <label className="email-input">
            <input
              tabIndex="0"
              name="email"
              placeholder="Email"
              type="email"
              value={email}
              onChange={this.handleChange}
              className="email-text"
            />
          </label>
          <hr />
          <label>
            <input
              tabIndex="0"
              name="password"
              placeholder="Password"
              type="password"
              value={password}
              onChange={this.handleChange}
              className='password-text'
            />
          </label>
          <div className="github-logo" />
          <button className='submit-button'>Submit</button>
        </form>
        <form
          className="login-new-user"
          onSubmit={this.submitLogin}
          aria-label="Create new MovieTracker account"
        >
          <h2>Create Account</h2>
          <label>
            Name:
            <input
              tabIndex="1"
              name="username"
              placeholder="Username"
              type="text"
              value={username}
              onChange={this.handleChange}
            />
          </label>
          <label>
            E-mail:
            <input
              tabIndex="2"
              name="email"
              placeholder="Email"
              type="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Password:
            <input
              tabIndex="3"
              name="password"
              placeholder="Password"
              type="password"
              value={password}
              onChange={this.handleChange}
            />
          </label>
          <button tabIndex="1">Submit</button>
        </form>
      </section>
    )
  }
}

export default Login
