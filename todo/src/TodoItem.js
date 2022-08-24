import React, { useState } from "react";
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from "react-icons/md";
import styled, { css } from "styled-components";



const TodoListItem = ({ todo , onRemove, onToggle}) => {
  const { text, checked, id } = todo;
  return (
    <TodoListBlock>
      <Checkbox onClick={()=>onToggle(id)}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <Text checked={checked}>{text}</Text>
      </Checkbox>
      <Remove onClick={()=>onRemove(id)}>
        <MdRemoveCircleOutline />
      </Remove>
    </TodoListBlock>
  );
};


const TodoListBlock = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  &:nth-child(even) {
    background: #f8f9fa;
  }
`;

const Checkbox = styled.div`
  cursor: pointer;
  flex: 1;
  display: flex;
  align-items: center;
  svg {
    font-size: 2rem;
  }
`;
const Text = styled.div`
  margin-left: 0.5rem;
  flex: 1;
  ${(props) =>
    props.checked &&
    css`
      color: gray;
      text-decoration: line-through;
    `}
`;

const Remove = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: #ff6b6b;
  cursor: pointer;
  &:hover {
    color: #ff8787;
  }
`;
export default TodoListItem;
