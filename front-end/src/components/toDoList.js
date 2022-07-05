import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import toDoForm from '../components/toDoForm';

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log("🚀 ~ file: TodoList.js ~ line 15 ~ addTodo ~ newTodos", newTodos)
  };

  const { datas } = useContext(GlobalContext);

  return (
    <div>
      <h1>What's the Plan for Today?</h1>
      <toDoForm onSubmit={addTodo} />
      <button>Ordem alfabética</button>
      <ul id="myUL">
        {datas.map((task, index) => (
          <li key={index}>
            {task.taskName}
            <span>{task.createAt}</span>
            <br></br>
            <span>{task.statusTask}</span>
            <br></br>
            <button>Edit task</button>
            <br></br>
            <button>Delete task</button>
          </li>
        ))
        }
      </ul>
    </div>
  )
}

export default TodoList;