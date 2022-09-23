const ChatOverlay = ({children}) => {
  const overlayStyle = {
    position: 'fixed',
    bottom: '0',
    left: '750px',
    right: '0',
    display: 'flex',
    zIndex: '1',
  }
  return (
    <div style={overlayStyle} className='chat-overlay'>
      {children}
    </div>
  )
}

export default ChatOverlay;

