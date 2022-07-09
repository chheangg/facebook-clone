import { useState } from "react";

const MessUtils = ({handleSubmit}) => {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  }

  return (
    <div>
      <button onClick={() => handleSubmit(text)}>Send</button>
      <input value={text} onChange={handleChange} ></input>
    </div>
  )
}

export default MessUtils;