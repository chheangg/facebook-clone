import { useState } from "react";

const ChatUtils = ({handleSubmit, placeholderText}) => {
  const [text, setText] = useState('');

  const handleChange = (event) => setText(event.target.value);
  const submitKeyPress = (event) => {
    if (event.keyCode === 13) {
      handleSubmit(text);
      setText('');
    }
  }

  const submitOnClick = () => {
    handleSubmit(text);
    setText('');
  }

  const displayInput = (placeholderText) => <input placeholder={placeholderText} value={text} onKeyDown={submitKeyPress} onChange={handleChange} ></input>;

  return (
    <div className='utils-container'>
      <button onClick={submitOnClick}>Send</button>
      {displayInput(placeholderText)}
    </div>
  )
}

export default ChatUtils;