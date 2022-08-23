import React, {useState} from 'react';
import { MdAddCircle } from 'react-icons/md';
import './App.css';
import Template from "./components/Template";
import TodoList from "./components/TodoList";
import TodoInsert from "./components/TodoInsert";


let nextId = 4;

const App = () => {
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [insertToggle, setInsertToggle] = useState(false);
  const [todos, setTodos] = useState([
    {
    id: 1,
    text: "빵 먹기",
    checked: true
    }, 
    {
      id: 2,
      text: "과자 먹기",
      checked: true
      },
      {
        id: 3,
        text: "젤리 먹기",
        checked: false
        } ,
      {
        id: 4,
        text: "술 먹기",
        checked: false
        } 
    
    ]);
   const onInsertToggle = () => {
    if(selectedTodo) {
      setSelectedTodo(null);
    }
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

    const onChangeSelectedTodo = (todo) => {
      setSelectedTodo(todo)
    
    }

    const onRemove = id => {
      onInsertToggle();
      setTodos(todos => todos.filter(todo => todo.id !==id))
    };
    // const onRemove = id => {
    //   onInsertToggle();
    //   setTodos(todos => todos.filter(todo => todo.id !== id)); //ID와 일치하지 않는것만 리턴
    // };

    const onUpdate = (id,text) => {
      onInsertToggle();
      setTodos(todos => todos.map(todo => todo.id === id ? {...todo, text} : todo));
    }

  return (
  <Template todoLength={todos.length}>
    <TodoList 
    todos={todos} 
    onCheckToggle={onCheckToggle} 
    onInsertToggle={onInsertToggle} 
    onChangeSelectedTodo={onChangeSelectedTodo}
    
    />
    
    <div className='add-todo-btn' onClick={ onInsertToggle}>
      <MdAddCircle/>
    </div>
    {insertToggle && (
    <TodoInsert 
      selectedTodo={selectedTodo}
      onInsertToggle={onInsertToggle}
      onInsertTodo={onInsertTodo}
      onRemove={onRemove}
      onUpdate={onUpdate}
      />
    )}
    </Template>
  );

    
  
};

export default App;
