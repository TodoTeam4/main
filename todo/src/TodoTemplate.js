import React from "react";
import styled from "styled-components";

const TodoTemplateblock = styled.div`
  width: 1024px;
  height: 768px;

  background: white;
  margin: 0 auto;
  margin-top: 5%;
  border-radius: 3%;
  box-shadow: 0 0 15px 0;
  
  display : flex;
  flex-direction: column;
`;

function TodoTemplateWindow({ children }) {
  return <TodoTemplateblock>{children}</TodoTemplateblock>;
}

export default TodoTemplateWindow;
