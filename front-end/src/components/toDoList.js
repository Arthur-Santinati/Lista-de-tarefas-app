import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import TodoForm from './toDoForm';

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  };

  const { datas } = useContext(GlobalContext);

  return (
    <div>
      <h1>What's the Plan for Today?</h1>
      <TodoForm onSubmit={addTodo} />
      <button>Ordem alfabética</button>
      <ul id="myUL">
        {datas.map((task, index) => (
          <li key={index}>
            {'  '}
            {task.taskName}
            {'  '}
            <span>{task.createAt}</span>
            {'  '}
            <span>{task.statusTask}</span>
            {'  '}
            <button>Edit task</button>
            {'  '}
            <button>Delete task</button>
          </li>
        ))
        }
      </ul>
    </div>
  )
}

export default TodoList;