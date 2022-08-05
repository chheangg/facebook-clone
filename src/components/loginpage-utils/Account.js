import { useState } from "react";
import './styles/register.scss';

const Months = ['january', 'february', 'march',
'april', 'may', 'june', 'july', 'august', 'september',
'october', 'november', 'december'];

const Account = ({createAccount}) => {
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
        <form onSubmit={(e) => e.preventDefault()}>
          <fieldset>
            <input onChange={(e) => handleChange(e, setFirstName)} type='text' placeholder="First Name"></input>
            <input onChange={(e) => handleChange(e, setLastName)} type='text' placeholder="First Name"></input>
            <input onChange={(e) => handleChange(e, setEmail)} className='input-utils' type='email' placeholder="Email"></input>
            <input onChange={(e) => handleChange(e, setPassword)} className='input-utils' type='password' placeholder="Password"></input>
          </fieldset>
          <fieldset>
            <div>Birthday</div>
            <div>
              <select onChange={(e) => handleChange(e, setMonth)} defaultValue={current.getMonth() + 1} id="Month">
                {Months.map((month) => <option key={Months.indexOf(month)} value={Months.indexOf(month) + 1}>{month.slice(0, 3)}</option>)}
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
            <div>
              <label forhtml='male-option'>Male</label>
              <input onChange={(e) => handleChange(e, setGender)} name="gender" id='male-option' type='radio' value='male'></input>
            </div>
            <div>
              <label forhtml='female-option'>Female</label>
              <input onChange={(e) => handleChange(e, setGender)} name="gender" id='female-option' type='radio' value='female'></input>
            </div>
          </fieldset>
          <button onClick={() => {
            const info = {
              firstName,
              lastName,
              email,
              dob: `${day}/${month}/${year}`,
              gender,
            }
            createAccount(email, password, info)
          }}>Sign Up</button>
        </form>
      </div>
    </div>
  )
}

export default Account;