import fbLogo from '../assets/fb-logo.png';

const Welcome = () => {
  return (
    <div className='welcome-text-container'>
      <div className='main-logo-container'>
        <img className='logo-img' src={fbLogo} alt='fb logo' />
      </div>
      <div className='slogan-container'>Connect with friends and the world around you on Facebook.</div>
    </div>
  )
}

export default Welcome;