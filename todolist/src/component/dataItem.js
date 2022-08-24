
const DataItem = ({onDelete,id,text})=>{
  return  (<div className="data_item">
  <span>
    <input key={id} className="checkBox" type="checkbox" />
     {text}   
    <button onClick={()=>{
      console.log(id)
      onDelete(id)}} >X</button>
  </span>
</div>
  )
}

export default DataItem