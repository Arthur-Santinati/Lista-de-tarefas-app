const tasksModel = require('../models/taskModel');

const getAll = async () => {
    const tasks = await tasksModel.getAll();
    return tasks;
};

const createTask = async ( taskName, statusTask ) => {
  await tasksModel.createTask({ taskName, statusTask });
  
  return {
    taskName,
    statusTask,
  };
}

const updateTask = async ({ id, taskName, statusTask }) => {
  const updatedTask = await tasksModel.updateTask({ id, taskName, statusTask });

  return updatedTask;
};

const deleteTask = async (id) => {
  const taskDeleted = await tasksModel.deleteTask(id);

  return taskDeleted;
};

module.exports = {
  getAll,
  createTask,
  updateTask,
  deleteTask,
};