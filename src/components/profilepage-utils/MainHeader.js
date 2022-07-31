const MainHeader = ({user}) => {
  return (
    <div>
      <img alt='profile cover' src={user.cover}></img>
      <div>
        <img alt='profile pic' src={user.img}></img>
        <div>{user.name}</div>
      </div>
    </div>
  )
}

export default MainHeader;