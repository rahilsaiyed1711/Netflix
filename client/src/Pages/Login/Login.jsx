import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'
import { login, signup } from "../../Firebase"
const Login = () => {
  const [signState, setSignState] = useState('Sign In')
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const user_auth = async (event) => {
    event.preventDefault();
    if (signState === "Sign In") {
      await login(email, password);
    } else {
      await signup(name, email, password);
    }
  }
  return (
    <div className='login'>
      <img src={logo} className='login-logo' />
      <div className='login-form'>
        <h1>{signState}</h1>
        <form>
          {signState === 'Sign Up' ? <input type='text'
            value={name} onChange={(e) => { setName(e.target.value) }}
            placeholder='Enter Your Name' /> : <></>}

          <input type='email' value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder='Enter Your email' />
          <input type='password' value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder='Enter Your password' />
          <button onClick={user_auth} type='submit'>{signState}</button>
          <div className='form-help'>
            <div className='remember'>
              <input type='checkbox' />
              <label >Remember Me</label>
            </div>
            <p>Need Help</p>
          </div>
        </form>
        <div className='form-switch'>
          {
            signState === 'Sign Up' ?
              <p>Already have account? <span onClick={() => { setSignState('Sign In') }}>SignIn Now</span></p> :
              <p>New To WebFlix? <span onClick={() => { setSignState('Sign Up') }}>SignUp Now</span></p>
          }
        </div>
      </div>
    </div>
  )
}

export default Login