import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

const TodoList = () => {
  return (
    <TodoListBlock>
      <TodoItem text="프로젝트 생성하기" done={true} />
      <TodoItem text="컴포넌트 스타일링" done={false} />
      <TodoItem text="Context 생성" done={true} />
      <TodoItem text="기능 구현" done={true} />
    </TodoListBlock>
  );
};

export default TodoList;
