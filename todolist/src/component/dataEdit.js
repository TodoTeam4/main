import { useRef, useState } from 'react';


const EditList = ({Update}) =>{
  const [todo, setTodo] = useState('')
  const saveList = useRef()
  
  const submit = (e) =>{
    setTodo(e.target.value)
  }

  const save = (e) =>{

    if(todo.length<1){
      alert("1글자 이상 입력해주세용!")
      return;
    }
    Update(todo)
    setTodo('')
    saveList.current.focus();

   
  }

  return (
    <>
    <div className="wrtie_part">
    <h2>to do list</h2>
    <input ref={saveList} type="text" value={todo} onChange={submit}></input>
    <button type="submit" onClick={save}>저장하기</button>
    </div>
    <div className='body'>
      <div>
        <p>{todo}</p>
      </div>
    </div>

    </>
  )
}

export default EditList;