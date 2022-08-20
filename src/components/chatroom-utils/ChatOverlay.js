const ChatOverlay = ({children}) => {
  const overlayStyle = {
    position: 'fixed',
    bottom: '0',
    left: '0',
    right: '0',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    zIndex: '1',
  }
  return (
    <div style={overlayStyle} className='chat-overlay'>
      {children}
    </div>
  )
}

export default ChatOverlay;

