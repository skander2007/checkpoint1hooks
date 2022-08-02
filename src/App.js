import './App.css';
import { useState } from 'react';
import { todoList } from './Data';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';


function App() {
  const [todos,setTodos] = useState(todoList);
  const handleDelete =(index) =>
  setTodos([...todos.filter((el) =>el.id !== index)]);

const handleComplete = (x) =>
setTodos([
  ...todos.map((el) =>(el.id===x ? {...el,isDone: !el.isDone} :el)),
]);

const handleAdd =(text) =>{
  const newTask = {
    id:Math.random(),
    action:text,
    isDone: false,
  };
  setTodos([...todos,newTask]);
};
  return (
    <div className="App">
      <AddTodo add={handleAdd}/>
     <TodoList todos={todos} del={handleDelete} comp={handleComplete}/>
    </div>
  );
}

export default App;