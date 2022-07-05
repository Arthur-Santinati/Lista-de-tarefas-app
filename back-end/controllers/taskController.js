const taskService = require('../services/taskService');

const getAll = async (_req, res, next) => {
    try {
      const tasks = await taskService.getAll();
      return res.status(200).json(tasks);
    } catch (err) {
      console.log(err.message)
      next(err);
    }
};

const createTask = async (req, res, next) => {
  const { taskName, statusTask } = req.body;
  try {
    const newTask = await taskService.createTask( taskName, statusTask )
    return res.status(201).json(newTask);
  } catch (error) {
    console.log(error.messsage);
    next(error);
  }
}

const updateTask = async (req, res, next) => {
  const { id } = req.params;
  const { taskName, statusTask } = req.body;
  try {
    const updatedTask = await taskService.updateTask( id, taskName, statusTask );
    return res.status(200).json(updatedTask);
  } catch (error) {
    console.log(error.messsage);
    next(error);
  }
};

const deleteTask = async (req, res, next) => {
  const { id } = req.params;

  try { 
    const taskDeleted = await taskService.deleteTask(id);
    const message = 'Task was removed.'
    return res.status(200).json({ message, status: taskDeleted });
  } catch (error) {
    console.log(error.messsage);
    next(error);
  }
};

module.exports = {
  getAll,
  createTask,
  updateTask,
  deleteTask,
};