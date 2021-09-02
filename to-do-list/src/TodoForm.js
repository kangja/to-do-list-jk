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
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            className="input"
            value={input}
            type="text"
            placeholder="What are you working on today?"
            onChange={handleChange}
            ref={inputRef}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default TodoForm;
