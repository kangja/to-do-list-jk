import React, { useState, useRef } from "react";

function TodoForm(props) {
  const [input, setInput] = useState("");

  const inputRef = useRef(null);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 100000),
      text: input,
    });

    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <input
            type="text"
            placeholder="update your item"
            value={input}
            name="text"
            onChange={handleChange}
            ref={inputRef}
          />
          <button>Update</button>
        </>
      ) : (
        <>
          <input
            className="input"
            value={input}
            type="text"
            placeholder="What are you working on today?"
            onChange={handleChange}
            ref={inputRef}
          />
          <input type="submit" value="Submit" />
        </>
      )}
    </form>
  );
}

export default TodoForm;
