// import { useState } from "react"
import DataItem from "./dataItem"

const DataList = ({finish, onDelete, data})=>{
  // const [check, setCheck] = useState(false)

  // const allCheck = () =>{
  //   setCheck(!check)
  // }

  return (
      <div className="hi_data">
      <p>할 일 목록!</p>
      {/* <input className="check_all" type="checkbox" onChange={allCheck}/> 모두 선택 */}
      <div>{data.map((it)=>{
        return (
          <DataItem key={it.id}{...it} onDelete={onDelete} finish={finish}/>
        )})}
      </div>
    </div>
    
  )
}

 

export default DataList

