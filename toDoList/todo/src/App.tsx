import React, { ReactNode, useState, useRef, useCallback } from "react";
import { createGlobalStyle } from "styled-components";
import TodoTemplate from "./component/TodoTemplate";
import TodoHead from "./component/TodoHead";
import TodoList from "./component/TodoList";
import TodoCreate from "./component/TodoCreate";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

interface Todo {
  id: number;
  text: string;
  done: boolean;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: 1,
      text: "리액트 기초 알아보기",
      done: true,
    },
    {
      id: 2,
      text: "컴포넌트 스타일링 하기",
      done: false,
    },
    {
      id: 3,
      text: "투두리스트 만들기",
      done: false,
    },
    {
      id: 4,
      text: "msw 공부",
      done: true,
    },
  ]);

  const nextId = useRef(5);
  const onInsert = useCallback(
    (text: string) => {
      const todo = {
        id: nextId.current,
        text,
        done: false,
      };
      setTodos((prevTodos) => [...prevTodos, todo]);
      nextId.current++;
    },
    [todos]
  );

  const onRemove = useCallback(
    (id: number) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos]
  );

  const onChecked = useCallback(
    (id: number) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, done: !todo.done } : todo
        )
      );
    },
    [todos]
  );

  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead todos={todos} />
        <TodoList todos={todos} onRemove={onRemove} onChecked={onChecked} />
        <TodoCreate onInsert={onInsert} />
      </TodoTemplate>
    </>
  );
}

export default App;
