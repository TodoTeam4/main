import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";



export default function TodoList({ todos, onRemove, onToggle }) {

  return (
    <TodolistBlock>
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} checked={todo.checked} onRemove={onRemove} onToggle={onToggle}/>
      ))}
    </TodolistBlock>
  );
}

const TodolistBlock = styled.div`
  width: 100%;
`;



