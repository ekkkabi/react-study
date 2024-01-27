import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: {
    id: number;
    text: string;
    done: boolean;
  }[];
  onRemove: (id: number) => void;
  onChecked: (id: number) => void;
}

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

const TodoList: React.FC<TodoListProps> = ({
  todos: initialTodos,
  onRemove,
  onChecked,
}) => {
  const [todos, setTodos] = useState(initialTodos);
  useEffect(() => {
    setTodos(initialTodos);
  }, [initialTodos]);
  return (
    <TodoListBlock>
      {todos.map((todo) => (
        <TodoItem
          text={todo.text}
          key={todo.id}
          done={todo.done}
          id={todo.id}
          onRemove={onRemove}
          onChecked={onChecked}
        />
      ))}
    </TodoListBlock>
  );
};

export default TodoList;
