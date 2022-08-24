import { useRef, useState } from 'react';
import './App.css';
import EditList from './component/dataEdit';
import DataList from './component/dataList';

// const datalist = [{
//   id:1, text: '으악'
// },{
//   id:2, text:'끄악'
// }]


function App() {

const [data, setData] = useState([])
const dataId = useRef(1)


const Update= (text,id) => {
  // const created_data = new Date().getTime()
  const newItem = {text,id:dataId.current}
  dataId.current++
  setData([...data, newItem]) 
}

const onDelete = (targetId) =>{
  console.log(`${targetId}가 삭제되었다!`)
  const newDataList = data.filter((it)=> it.id !== targetId)
  setData(newDataList)
}



  return (
    <div className="App">
      <header className="App-header">
      <EditList Update={Update}/>
      <DataList onDelete={onDelete} data = {data}/>
      </header>
    </div>
  );
}

export default App;
