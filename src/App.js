import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoTemplate from './components/todotemplate/todotemplate';
import TodoInsert from './components/todoinsert/todoinsert';
import TodoList from './components/todolist/todolist';
function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: '리액트의 기초 알아보기', checked: true },
    { id: 2, text: '컴포넌트 스타일링 해보기', checked: true },
    { id: 3, text: '일정 관리 앱 만들어 보기', checked: false },
  ]);
  return (
    <TodoTemplate>
      <TodoInsert />
      <TodoList todos={todos} />
    </TodoTemplate>
  );
}

export default App;
