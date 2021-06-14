import React, { useCallback, useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoTemplate from './components/todotemplate/todotemplate';
import TodoInsert from './components/todoinsert/todoinsert';
import TodoList from './components/todolist/todolist';
function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: '할 일을 적어보세요!', checked: false },
  ]);

  const nextId = useRef(2);
  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos],
  );
  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos],
  );
  const onToggle = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo,
        ),
      );
    },
    [todos],
  );
  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
}

export default App;
