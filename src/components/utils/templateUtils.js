import { useState } from 'react';

function templateUtils (type) {
  return ({handleSubmit, handleChildViewer, buttonText, placeholderText}) => {
    const [text, setText] = useState('');
    const [showInput, setShowInput] = useState(false);

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

    const handleInputState = () => {
      setShowInput(!showInput);
      if (handleChildViewer) {
        handleChildViewer();
      }
    }

    const displayInput = (placeholderText) => <input placeholder={placeholderText} value={text} onKeyDown={submitKeyPress} onChange={handleChange} ></input>
    
    switch (type) {
      case 'persistent':
        return <div>{displayInput(placeholderText)}</div>
      case 'btnless':
        return (
        <div> 
          <button onClick={handleInputState}>
            {buttonText}
          </button>
          {showInput ? displayInput() : null}
        </div>
        );
      default:
        return (
          <div>
            <button onClick={submitOnClick}>{buttonText}</button>
            {displayInput()}
          </div>
        )
    }

  }
}

export default templateUtils;