import HomeContent from "./HomeContent";

const HomePage = () => {
  const homeStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
  }
  return (
    <main style={homeStyle} className='home-page-container'>
      <div></div>
      <HomeContent discussions={[]} />
      <div></div>
    </main>
  )
}

export default HomePage;