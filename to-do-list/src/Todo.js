import React from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

function Todo({ todos, removeTodo }) {
  return todos.map((todo, index) => (
    <div className="todo-row" key={index}>
      <div>{todo.text}</div>
      <RiCloseCircleLine onClick={() => removeTodo(todo.id)} />
      <TiEdit />
    </div>
  ));
}

export default Todo;
