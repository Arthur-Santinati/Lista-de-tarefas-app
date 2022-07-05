import React, { createContext, useEffect, useState } from 'react';
import gettingTasks from '../services/gettingTasks';

export const GlobalContext = createContext();
function TasksProvider({ children }) {
  const [originalDatas, setOriginalDatas] = useState([]);
  const [datas, setDatas] = useState([]);

  const editedDatas = async (tasks) => {
    const newDatas = tasks.map((data) => (
      {id: data.id, taskName: data.taskName, statusTask: data.statusTask, createAt: data.createAt.slice(0, 10)}
    ));
    return newDatas;
  };

  async function fetchTasks() {
    const tasks = await gettingTasks();
    const newDatas = await editedDatas(tasks);
    setDatas(newDatas);
    setOriginalDatas(tasks);
  };

  useEffect(() => {
    fetchTasks();
  }, [datas]);

  const contextValue = {
    originalDatas,
    datas,
  }

  return (
    <GlobalContext.Provider value={ contextValue }>
      { children }
    </GlobalContext.Provider>
  );
}

export default TasksProvider;