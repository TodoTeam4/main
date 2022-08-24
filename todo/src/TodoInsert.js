import React,{useState,useCallback} from "react";
import { MdAdd } from "react-icons/md";
import styled from "styled-components";

const TodoInsert = ({onInsert}) => {
  const [value, setValue] = useState('');
  const onChange = useCallback(e=>{
    setValue(e.target.value);
  }, []);
  const onSubmit = useCallback(e=>{
    onInsert(value);
    setValue('');
    e.preventDefault();
  }, [onInsert, value]);


  return (
    <TodoInsertForm onSubmit={onSubmit}>
      <InsertInput placeholder="해야할 일 입력" value={value} onChange={onChange} />
      <InsertButton type={"submit"}>
        <MdAdd />
      </InsertButton>
    </TodoInsertForm>
  );
};


const TodoInsertForm = styled.form`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

const InsertInput = styled.input`
  width: 50%;
  padding: 0.5rem;
  font-size: 1.125rem;
  line-height: 1.5;
  &:placeholder {
    color: #bbb;
  }
`;

const InsertButton = styled.button`
  background: #868e96;
  color: #fff;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    background: #adb5bd;
  }
`;
export default TodoInsert;
