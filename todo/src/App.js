import "./App.css";
import TodoInfoTime from "./TodoInfoTime";
import TodoTemplateWindow from "./TodoTemplate";
import styled from "styled-components"
import TodoInput from "./TodoInput";


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
