import { useState } from 'react';
import './styles/login.scss';

const Authenticate = ({signIn, handleRegisterPop}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');

  const handleChange = (e, func) => {
    func(e.target.value);
  }

  return (
    <form onSubmit={(e) => {e.preventDefault()}}>
      <input onChange={(e) => handleChange(e, setEmail)} className='input-utils' type='email' placeholder="Email"></input>
      <input onChange={(e) => handleChange(e, setPassword)} className='input-utils' type='password' placeholder="Password"></input>
      <button onClick={() => signIn(email, password,)} className='input-utils' >Login</button>
      <button onClick={() => handleRegisterPop() } className='input-utils' >Create new Account</button>
    </form>
  )
}

export default Authenticate;