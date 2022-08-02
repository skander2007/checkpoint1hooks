import React, { useState } from 'react';

const AddTodo = ({add}) => {
  const [text,setText]=useState("");
  const handleChange = (e) => setText(e.target.value);
  const handleSubmit =(e) => {
    e.preventDefault();
    add(text);
    setText("");
  };
  return (
    <div>
        <h1>hello</h1>
        <from onSubmit={handleSubmit} >
            <input type="text" value={text} onChange={handleChange}/>
            <button type="submit">Add</button>
        </from>
    </div>
  );
};

export default AddTodo;