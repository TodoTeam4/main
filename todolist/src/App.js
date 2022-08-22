import './App.css';
import EditList from './component/dataEdit';
import DataList from './component/dataList';

const datalist = [{
  id:1, text: '뿌엥'
},{
  id:2, text:'으악'
}]

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <EditList/>
      <DataList data = {datalist}/>
      </header>
    </div>
  );
}

export default App;
