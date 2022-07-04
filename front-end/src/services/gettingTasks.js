import axios from 'axios';

const DEFAULT_TIMEOUT = 30000;
class getTasks {
  constructor({ url = 'http://localhost:3001/tasks', timeout = DEFAULT_TIMEOUT }) {
    this.http = axios.create({
      baseURL: url,
      timeout,
    });
  }
}

export default getTasks;