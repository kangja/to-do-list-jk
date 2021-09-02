import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text || /^\*$/.test(todo.text)) {
      return;
    }

    const newTodos = [...todos, todo];

    setTodos(newTodos);
  };

  return (
    <div>
      <TodoForm onSubmit={addTodo} />
      <Todo todos={todos} />
    </div>
  );
}

export default TodoList;
