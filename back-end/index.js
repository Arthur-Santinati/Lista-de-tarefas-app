const express = require('express');
require('dotenv').config();
const cors = require('cors');
const PORT = process.env.PORT;
const taskController = require('./controllers/taskController');
const errorMiddleware = require('./middlewares/errorMiddleware')

const app = express();
app.use(cors());

app.use(express.json());

app.get('/tasks', taskController.getAll);
app.post('/tasks', taskController.createTask);
app.put('/tasks/:id', taskController.updateTask);
app.delete('/tasks/:id', taskController.deleteTask);

app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Escutando na porta ${PORT}`);
});