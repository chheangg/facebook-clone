import commentIcon from '../assets/comment-outline.svg';
import { useState } from 'react';

const PostUtils = ({handleSubmit, handleChildViewer, isOn}) => {
  const [text, setText] = useState('');
  const [showInput, setShowInput] = useState(isOn ? true : false);

  const handleChange = (event) => setText(event.target.value);
  const submitKeyPress = (event) => {
    if (event.keyCode === 13) {
      handleSubmit(text);
      setText('');
    }
  }

  const handleInputState = () => {
    setShowInput(!showInput);
    if (handleChildViewer) {
      handleChildViewer();
    }
  }

  const displayInput = (placeholderText) => <input placeholder={placeholderText} value={text} onKeyDown={submitKeyPress} onChange={handleChange} ></input>

  return (
    <>
      <div className='utils-container'> 
        <button onClick={handleInputState}>
          <img src={commentIcon} alt='comment button' />
          Comments
        </button>
      </div>
      {showInput ? displayInput() : null}
    </>
  )
}

export default PostUtils;