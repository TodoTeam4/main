import { useState } from "react"
const DataItem = ({onDelete,id,text})=>{
  const [checkedBox, setCheckedBox] = useState([])

  const finish = (targetId,checked) =>{
    if(checked){
      setCheckedBox([...checkedBox, targetId, text])
      console.log('체크')
      console.log(checkedBox)
    } else {
      setCheckedBox(checkedBox.filter(checkbox => checkbox.targetId !== targetId))
      console.log('체크 안 했지')
    }
      
    }

    // const style_item = {
    //   checkBox: {
    //     text
    //   }
    // }

  return  (<div className="data_item">
  <span>
    <input key={id} className="checkBox" type="checkbox" onChange={(e)=>{finish(id, 'check')}} checked = {checkedBox.includes('check')? true : false}/>
     {text}   
    <button onClick={()=>{
      console.log(id)
      onDelete(id)}} >X</button>
  </span>
</div>
  )
}

export default DataItem