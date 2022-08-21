import "./App.css";
import TodoInfoTime from "./TodoInfoTime";
import TodoTemplateWindow from "./TodoTemplate";

const App = () => {
  return (
    <>
      <TodoTemplateWindow>
        <TodoInfoTime/>
      </TodoTemplateWindow>
    </>
  );
};

export default App;
