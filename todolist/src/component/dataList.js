
const DataList = ({data})=>{
  console.log(data)
  
  return (
      <div className="hi_data">
      <p>할 일 목록!</p>
      <p>{data.map((it)=>{
        return (
          <div className="data_item">
            <input className="checkBox"type="checkbox"/>{it.text}</div>
        )})}
  </p>
    </div>
    
  )
}


export default DataList

