const URL = 'http://localhost:3001/tasks';

const gettingTasks = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  return data;
};

export default gettingTasks; 