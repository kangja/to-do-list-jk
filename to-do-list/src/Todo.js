import React from "react";

function Todo({ todos }) {
  return todos.map((todo, index) => (
    <div className="todo-row" key={index}>
      <div>{todo.text}</div>
    </div>
  ));
}

export default Todo;
