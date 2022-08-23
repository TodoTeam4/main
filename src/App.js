import React, {useState} from 'react';
import { MdAddCircle } from 'react-icons/md';
import './App.css';
import Template from "./components/Template";
import TodoList from "./components/TodoList";
import TodoInsert from "./components/TodoInsert";


let nextId = 4;

const App = () => {
  const [insertToggle, setInsertToggle] = useState(false);
  const [todos, setTodos] = useState([
    {
    id: 1,
    text: "할일 1",
    checked: true
    }, 
    {
      id: 2,
      text: "할일 2",
      checked: true
      },
      {
        id: 3,
        text: "할일 3",
        checked: true
        } 
    
    ]);
   const onInsertToggle = () => {
      setInsertToggle(prev => !prev);  //이전값의 boolean을 반대로 바꿔주는 함수
    };

    const onInsertTodo = (text) => {
      if(text === ""){
       return alert("Please Write");
      } else {
        const todo = {
        id: nextId,
        text,
        checked: false
      };
      setTodos(todos => todos.concat(todo));
      nextId++;                             //push 함수 사용하면 해당 배열 자체가 변경되고
                                             //concat 함수를 사용하면 새배열이 리턴 , 기존배열 변경x
      }

    };

    const onCheckToggle = (id) => {
      setTodos(todo =>
        todos.map(todo =>
          todo.id === id ? {...todo, checked: !todo.checked} :todo
        )
      );
      
    };

  return (
  <Template todoLength={todos.length}>
    <TodoList todos={todos} onCheckToggle={onCheckToggle} />
    <div className='add-todo-btn' onClick={ onInsertToggle}>
      <MdAddCircle/>
    </div>
    {insertToggle && (
    <TodoInsert 
    onInsertToggle={onInsertToggle}
    onInsertTodo={onInsertTodo}
      />
    )}
    </Template>
  );

    
  
};

export default App;
