import { useState } from "react";
import './styles/register.scss';
import defaultImg from '../assets/default-profile-icon-24.jpg';
import closeBtn from '../assets/close.svg';
import '../styles/Registration.scss';

const Months = ['january', 'february', 'march',
'april', 'may', 'june', 'july', 'august', 'september',
'october', 'november', 'december'];

const Account = ({createAccount, handleRegisterPop}) => {
  const current = new Date()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  const [year, setYear] = useState(current.getFullYear());
  const [month, setMonth] = useState(current.getMonth() + 1)
  const [day, setDay] = useState(current.getDate())
  const [gender, setGender] = useState();

  const handleChange = (e, func) => {
    func(e.target.value);
  }

  const arrayGen = (num) => Array(num).fill(1).map((num, i) => i + 1);

  const getDays = () => {
    if (month === 0 || month === 2 || month=== 4 || month === 6 ||
      month === 7 || month === 9 || month === 12 ) {
      return arrayGen(31)
    } 
    if (month === 1) {
      return arrayGen(28)
    }
    return (arrayGen(30))
  }

  const getYears = () => {
    const currentYear = current.getFullYear()
    const count = currentYear - ( currentYear - 110 );
    const yearArray = Array(count).fill(1).map((num, i) => currentYear - count + i + 1)
    return yearArray;
  }

  return (
    <div className="register-wrapper">
      <div className="register-container">
        <div className='closed-btn'>
          <button onClick={handleRegisterPop}>
            <img src={closeBtn} alt='close registration' />
          </button>
        </div>
        <div className='reg-header'>
          <h1>Sign Up</h1>
          <p>It's quick and easy</p>
        </div>
        <form className='reg-form-container' onSubmit={(e) => e.preventDefault()}>
          <fieldset>
            <div className='fullname-container'>
              <input onChange={(e) => handleChange(e, setFirstName)} type='text' placeholder="First Name"></input>
              <input onChange={(e) => handleChange(e, setLastName)} type='text' placeholder="Last Name"></input>
            </div>
            <input onChange={(e) => handleChange(e, setEmail)} className='input-utils' type='email' placeholder="Email"></input>
            <input onChange={(e) => handleChange(e, setPassword)} className='input-utils' type='password' placeholder="New password"></input>
          </fieldset>
          <fieldset>
            <label>Birthday</label>
            <div className='dob-container'>
              <select onChange={(e) => handleChange(e, setMonth)} defaultValue={current.getMonth() + 1} id="Month">
                {Months.map((month) => <option key={Months.indexOf(month)} value={Months.indexOf(month) + 1}>{`${month.charAt(0).toUpperCase()}${month.slice(1, 3)}`}</option>)}
              </select>
              <select onChange={(e) => handleChange(e, setDay)} defaultValue={current.getDay()} id="day">
                {getDays().map((num) => <option key={num} value={num}>{num}</option>)}
              </select>
              <select onChange={(e) => handleChange(e, setYear)} defaultValue={current.getFullYear()} id="year">
                {getYears().map((num) => <option key={num} value={num}>{num}</option>)}
              </select>
            </div>
          </fieldset>
          <fieldset>
            <label>Gender</label>
            <div className='gender-choice-container'>
              <div className='gender-choice'>
                <label forhtml='female-option'>Female</label>
                <input onChange={(e) => handleChange(e, setGender)} name="gender" id='female-option' type='radio' value='female'></input>
              </div>
              <div className='gender-choice'>
                <label forhtml='male-option'>Male</label>
                <input onChange={(e) => handleChange(e, setGender)} name="gender" id='male-option' type='radio' value='male'></input>
              </div>
            </div>
          </fieldset>
          <button id='signup-btn' onClick={() => {
            const info = {
              firstName,
              lastName,
              email,
              dob: `${day}/${month}/${year}`,
              gender,
            }
            createAccount(email, password, info);
          }}>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  )
}

export default Account;