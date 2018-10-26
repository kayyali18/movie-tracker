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

  async componentDidMount() {
    const url = `http://localhost:3000/api/users`
    const req = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: 'tman2272@aol.com',
        password: 'password'
      }),
      headers: {
        'content-type': 'application/json'
      }
    })

    console.log (req)
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
      <section className='login-main' >
      <form className="login-form" onSubmit={this.submitLogin}>
        <h2>Login</h2>
        <label>
          E-mail
          <input name='user' placeholder="Username" type="text" value={user} onChange={this.handleChange}/>
        </label>
        <label>
          Password
          <input name='password' placeholder="Password" type="password" value={password} onChange={this.handleChange}/>
        </label>
          <button>Submit</button>
      </form>
      <form className="login-new-user" onSubmit={this.submitLogin}>
        <h2>Create Account</h2>
        <label>
          E-mail
          <input name='user' placeholder="Username" type="text" value={user} onChange={this.handleChange}/>
        </label>
        <label>
          Password
          <input name='password' placeholder="Password" type="password" value={password} onChange={this.handleChange}/>
        </label>
          <button>Submit</button>
      </form>

      </section>
    )
  }
}

export default Login
