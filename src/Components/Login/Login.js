import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Route, Link } from 'react-router-dom'
import '../../styles/2-layouts/layouts-dir.sass'
import '../../styles/1-base/base-dir.sass'
import { loginUser } from '../../Actions/TheActionMan';

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: 'tman2272@aol.com',
      username: '',
      formState: ''
      password: 'password',
    }
  }

  async componentDidMount() {

  }

  toggleActive = () => {
    this.state.formState === ""
      ? this.setState({ formState: "active" })
      : this.setState({ formState: "" });
  };

  resetForm = () => {
    this.setState({ password: '' })
  }

  handleChange = event => {
    const { value, name } = event.target
    this.setState({ [name]: value })
  }

  submitLogin = e => {
    const { loginCheck } = this.props
    const { email, password } = this.state
    e.preventDefault()
    loginCheck(email, password)
    this.resetForm()
  }

  render() {
    const { email, username, password } = this.state
    return (
      <section className="login-main">
        <div className="app-logo"></div>
        <h1 className="app-title">Now Playing</h1>
        <p>An Elegant Movie Tracker App</p>
        <div class="create-account">Create Account</div>
        <form
          className="login-form"
          onSubmit={this.submitLogin}
          aria-label="Existing user login form"
        >
          <div className="user-image"></div>
          <p>Login</p>
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
          <h2 className="new-user-h2">Create Account</h2>
          <label>
            <input
              className="new-user-username"
              tabIndex="1"
              name="username"
              placeholder="Username"
              type="text"
              value={username}
              onChange={this.handleChange}
            />
          </label>
          <hr />
          <label>
            <input
              className="new-user-email"
              tabIndex="2"
              name="email"
              placeholder="Email"
              type="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>
          <hr />
          <label>
            <input
              className="new-user-password"
              tabIndex="3"
              name="password"
              placeholder="Password"
              type="password"
              value={password}
              onChange={this.handleChange}
            />
          </label>
          <hr />
          <button tabIndex="1">Submit</button>
        </form>
      </section>
    )
  }
}


export const mapDispatchToProps = (dispatch) => ({
  loginCheck: (user, password) => dispatch(loginUser(user, password))
})

export default connect(null, mapDispatchToProps) (Login)
