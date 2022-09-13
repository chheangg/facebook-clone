import { useState } from 'react';
import './styles/login.scss';

const Authenticate = ({signIn, handleRegisterPop}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');

  const handleChange = (e, func) => {
    func(e.target.value);
  }

  return (
    <form className='login-form-container' onSubmit={(e) => {e.preventDefault()}}>
      <input onChange={(e) => handleChange(e, setEmail)} className='input-utils' type='email' placeholder="Email"></input>
      <input onChange={(e) => handleChange(e, setPassword)} className='input-utils' type='password' placeholder="Password"></input>
      <button id='login-btn' onClick={() => signIn(email, password,)} className='input-utils' >Log In</button>
      <div className='creation-overlay'>
        <button id='create-account-btn' onClick={() => handleRegisterPop() } className='input-utils' >Create new account</button>
      </div>
    </form>
  )
}

export default Authenticate;