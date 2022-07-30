const PageLayout = (Header, Discussions) => {
  return ({discussions}) => {
    return (
      <div>
        <Header />
        <Discussions discussions={discussions}/>
      </div>
    )
  }
}

export default PageLayout;