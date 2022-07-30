import searchIcon from '../assets/magnify.svg';

const SearchBar = () => {
  const formStyle = {
    display: 'flex',
    alignItems: 'center',
  }

  const searchIconStyle = {
    width: '1.5rem',
    height: 'auto',
  }
  return (
    <form className='search-bar' style={formStyle}>
      <img style={searchIconStyle} alt='search profile' src={searchIcon} />
      <input type='text' placeholder="Search Facebook"></input>
    </form>
  )
}

export default SearchBar;