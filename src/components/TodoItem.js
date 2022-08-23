import React from 'react';
import { MdCheckBox, MdCheckBoxOutlineBlank} from "react-icons/md";
import './TodoItem.css';

const TodoItem = ({todo, onCheckToggle}) => {  //객체 구조분해 이용 todo객체에서 text를 가져와서 보여줌
    const {id,text,checked} = todo;
    return <div className="TodoItem">
        <div className={`content ${checked ? 'checked' : ''}`}>  
        {checked ? (
        <MdCheckBox 
        onClick={() =>{
            onCheckToggle(id);
            }}
        /> 
        ): (
        <MdCheckBoxOutlineBlank
        onClick={() =>{
            onCheckToggle(id);
        }}
    />
    )}
        <div className='text'>{text}</div>
        </div>
    </div>;
    
}





export default TodoItem;