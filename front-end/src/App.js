import React from 'react';
import TodoList from './components/toDoList';
import TasksProvider from './context/GlobalContext';

function App() {
  return (
    <TasksProvider>
      <div className="todo-app">
        <TodoList />
      </div>
    </TasksProvider>
  );
}

export default App;
