import React, { Component } from 'react'
import { connect } from 'react-redux'
import HeaderLogin from './HeaderLogin/HeaderLogin'
import { loginUser, createAccountDisplay } from '../../Actions'
import { fetchUser } from '../../Thunks/fetchUser';
import { createAccountThunk } from '../../Thunks/createAccount';
import { BrowserRouter, Route, withRouter, Link, NavLink, Redirect } from 'react-router-dom';


class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // email: 'tman2272@aol.com',
      email: '',
      username: '',
      password: '',
      // password: 'password',
    }
  }

  async componentDidMount() { }

  toggleActive = () => {
    const {createAccountDisplay} = this.props
    this.props.active === ""
      ? createAccountDisplay('active')
      : createAccountDisplay('');
  };

  resetForm = () => {
    this.setState({ password: '' })
  }

  handleChange = event => {
    const { value, name } = event.target
    this.setState({ [name]: value })
  }

  submitLogin = e => {
    const { fetchUser } = this.props
    const { email, password } = this.state
    e.preventDefault()
    fetchUser(email, password)
    this.resetForm()
  }

  createAccount = e => {
    const {createAccount} = this.props
    const {email, password, username} = this.state
    e.preventDefault()
    createAccount(username, email, password)
    this.resetForm()
  }


  render() {
    const { email, username, password } = this.state
    const {wrongCredentials, userExists} = this.props
    return (
      <section className="login-main">
        <HeaderLogin />
        <div className="user-image"></div>
        <section className='form-container'>
          <section className={this.props.active}>
            <form
              className="login-form"
              onSubmit={this.submitLogin}
              aria-label="Existing user login form"
            >
              <p>Login</p>
              <h2>Welcome Back</h2>
              {wrongCredentials ? <p className='wrong-credentials'> Username/Password incorrect</p> : null}
              
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
              <button className='submit-button'>Submit</button>
              <div className="create-account" onClick={this.toggleActive}>Create Account</div>
            </form>
          </section>

          <form
            className="login-new-user"
            onSubmit={this.createAccount}
            aria-label="Create new MovieTracker account"
          >
            <h2 className="new-user-h2">Create Account</h2>
            {userExists ? <p className='wrong-credentials'> Username/Email already exists</p> : null}

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
            <button tabIndex="1" className="new-user-submit">Submit</button>
            <div className="create-account" onClick={this.toggleActive}>Back to Login</div>
          </form>
        </section>
      </section>
    )
  }
}

export const mapStateToProps = state => ({
  active: state.createAccountDisplay.class,
  wrongCredentials: state.wrongCredentials,
  userExists: state.userExists
})

export const mapDispatchToProps = dispatch => ({
  fetchUser: (user, password) => dispatch(fetchUser(user, password)),
  createAccountDisplay: (string) => dispatch(createAccountDisplay(string)),
  createAccount: (username, email, password) => dispatch(createAccountThunk(username, email, password)),
})

const exportWithRouter = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Login))

export default exportWithRouter;
