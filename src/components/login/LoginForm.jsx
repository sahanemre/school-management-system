import React, { useState } from 'react'

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(email, password)
  }

  return (
    <div className="login-form-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            className="form-input"
            placeholder="Email adress"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="form-input"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="checkbox"
            id="rememberMe"
            className="form-checkbox"
            placeholder="Password"
          />
          <label htmlFor="rememberMe" className="remember-me">
            Remember me
          </label>
          <a href="#" className="forgot-password">
            Forgot password?
          </a>
        </div>
        <button type="submit" className="login-button">
          Sign in
        </button>
        <div className="alternative-login">
          <hr />
          <span>Or continue with</span>
          <hr />
        </div>
        <div className="social-login">
          <button className="google-login">Google</button>
          <button className="github-login">GitHub</button>
        </div>
      </form>
    </div>
  )
}

export default LoginForm
