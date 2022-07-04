import React from 'react';
import getTasks from "./services/gettingTasks";

const gettingTasks = new getTasks();

class GetTasks extends React.Component {

  buttonGetTasks () {
    gettingTasks();
  }


  render() {
    return (
    <button type="button" onClick={ this.buttonGetTasks }>Tasks Aqui</button>
  )
  }
}

export default GetTasks;