import { useState } from "react";

export const TodoInput = ({ getData }) => {
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
   
  };

  const handleClick = () => {
    getData(text);
  };

  return (
    <>
      <input onChange={handleChange} type="text" placeholder="Enter" />
      <button onClick={handleClick}>Add</button>
    </>
  );
};