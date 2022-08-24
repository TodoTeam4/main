import { useState } from "react"
const DataItem = ({onDelete,id,text})=>{
  const [checkedBox, setCheckedBox] = useState([])

  const finish = (targetId,checked) =>{
    setCheckedBox([...checkedBox, targetId, text, checked])
    console.log(checkedBox)
      
    }


  return  (<div className="data_item">
  <span>
    <input key={id} className="checkBox" type="checkbox" onChange={(e)=>{finish(id, 'true')}}
     checked = {checkedBox.checked}/>
     {text}   
    <button onClick={()=>{
      console.log(id)
      onDelete(id)}} >X</button>
  </span>
</div>
  )
}

export default DataItem