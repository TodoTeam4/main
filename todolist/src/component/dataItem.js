import { useState } from "react"
import {TiDeleteOutline } from 'react-icons/ti';

import './dataitem.css';
const DataItem = ({onDelete,id,text})=>{
  const [checkedBox, setCheckedBox] = useState(false)
  const [toggle, setToggle] = useState('')
  // const finish = (targetId,checked) =>{
  //   setCheckedBox([...checkedBox, targetId, text, checked])
  //   console.log(checkedBox)
      
  //   }
  const checkHandle = (target) =>{
    if(checkedBox === false){
       setCheckedBox(true)
    } else {
      setCheckedBox(false)
    
    }
    
  }


  return  (
  <div className="data_item">
    <input key={id} className={toggle} type="checkbox" checked={checkedBox} id={id}onChange={(e)=>{checkHandle(e.target.id)}}/>
     <div className={`item_text ${checkedBox  === true ? "checked" : ""}`}>{text}</div> 
     <TiDeleteOutline onClick={()=>{
      console.log(id)
      onDelete(id)} } />
  </div>

  )
}

export default DataItem