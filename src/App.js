import logo from './logo.svg';
import './App.css';
import TodoTemplate from './components/todotemplate/todotemplate';
import TodoInsert from './components/todoinsert/todoinsert';
import TodoList from './components/todolist/todolist';
function App() {
  return (
    <TodoTemplate>
      <TodoInsert />
      <TodoList />
    </TodoTemplate>
  );
}

export default App;
