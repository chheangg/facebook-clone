const ProtoPost = ({children, testId}) => {
  return (
    <div data-testid={testId}>
      {children}
    </div>
  )
}

export default ProtoPost;