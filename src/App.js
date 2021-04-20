import logo from './logo.svg';
import './App.css';
import TodoTemplate from './components/todotemplate/todotemplate';
import TodoInsert from './components/todoinsert/todoinsert';
function App() {
  return (
    <TodoTemplate>
      <TodoInsert />
    </TodoTemplate>
  );
}

export default App;
