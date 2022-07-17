import { useState } from "react"

const PostUtils = ({handleSubmit, buttonText, isBtnless}) => {
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
  const handleInputState = () => setShowInput(!showInput);

  if (isBtnless) {
    return (
      <div>
        <button onClick={handleInputState}>{buttonText}</button>
        {showInput ? <input value={text} onKeyDown={submitKeyPress} onChange={handleChange} ></input> : null}
      </div>
    )
  }
  return (
    <div>
      <button onClick={submitOnClick}>{buttonText}</button>
      <input value={text} onChange={handleChange} ></input>
    </div>
  )
}

export default PostUtils;