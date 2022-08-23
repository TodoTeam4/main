import React, { useState } from 'react';
import { MdAddCircle } from 'react-icons/md';
import './TodoInsert.css';

const TodoInsert = ({onInsertToggle, onInsertTodo}) => {
    const [value, setValue] = useState("");  //기본값 빈문자열

    const onChange = (e) => {
        setValue(e.target.value);
    };
        
    const onSubmit = (e) => {
        e.preventDefault();
        onInsertTodo(value);
        setValue("");
        onInsertToggle();
    
    
    }
    return  (
    <div>
        <div className='background' onClick={onInsertToggle}></div>
            <form onSubmit={onSubmit}>
                <input placeholder='Please Write' value={value} onChange={onChange}></input>
                <button type='submit'>
                    <MdAddCircle/>
                </button>
            
       
            </form>
    </div>
    )
}






export default TodoInsert;