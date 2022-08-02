import React from 'react';
import TodoCard from './TodoCard';

const TodoList = ({todos,del,comp}) => {
  return (
    <div>
        {todos.map((el,i)=> (
            <TodoCard  key={i} todo={el} del={del} comp={comp}/>
            ))}
    </div>)
  
};

export default TodoList