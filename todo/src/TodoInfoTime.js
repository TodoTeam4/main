import React, { useState } from "react";
import styled from "styled-components";
import { useInterval } from "use-interval";

const TodoInfoBlock = styled.div`
  border-bottom: 1px solid #e9ecef;
  font-size: 30px;
  text-align: center;
`;

const TitleTodo = styled.div`
  text-align: center;
  font-size: 50px;
  padding-top : 20px;
`;

const calTime = () => {
  const date = new Date();
  const arrDayStr = ["일", "월", "화", "수", "목", "금", "토"];
  const day =
    date.getMonth() +
    1 +
    "월 " +
    date.getDate() +
    "일 (" +
    arrDayStr[date.getDay()] +
    ")";
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  return `${day} ${hours}:${minutes}:${seconds}`;
};

const TodoInfoTime = () => {
  const [realTime, setRealTime] = useState(calTime());

  useInterval(() => {
    setRealTime(calTime());
  }, 1000);
  return (
    <>
      <TodoInfoBlock>{realTime}</TodoInfoBlock>
      <TitleTodo>TO-DO</TitleTodo>
    </>
  );
};

export default TodoInfoTime;
