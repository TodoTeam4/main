import React, { useState, useRef, useCallback } from "react";
import TodoInfoTime from "./TodoInfoTime";
import TodoTemplateWindow from "./TodoTemplate";
import TodoList from "./TodoList";
import TodoInsert from "./TodoInsert";

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "test Todo",
      checked: true,
    },
    {
      id: 2,
      text: "test Todo",
      checked: false,
    },
  ]);
  const nextId = useRef(3);
  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current++;
    },
    [todos]
  );
  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos]
  );
  const onToggle = useCallback((id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  },[todos]);

  return (
    <>
      <TodoTemplateWindow>
        <TodoInfoTime />
        <TodoInsert onInsert={onInsert} />
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </TodoTemplateWindow>
    </>
  );
};

export default App;
