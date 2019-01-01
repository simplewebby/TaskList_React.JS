import React, { Component } from 'react';
import Tasks from './comps/tasks'
import AddForm from './comps/addForm'


class App extends Component {
  state ={
    tasks: [
    {id: 1, content: 'Shopping grocery'},
    {id: 2, content: 'Study for homework'},
    {id: 3, content: 'Cook a meal'}
  ]}

  deleteTask =(id)=>{
    const tasks =this.state.tasks.filter(task =>{
      return task.id!==id
    });
    this.setState({
      tasks
    })
  }


  addTask= (task)=> {
    task.id =Math.random();
    let tasks =[...this.state.tasks, task]
    this.setState({
      tasks
    })
  }
  render() {
    return (
      <div className="App container">
        <h2 className="center blue-text">Tasks:</h2>
        <Tasks tasks={this.state.tasks}deleteTask={this.deleteTask}/>
        <AddForm addTask={this.addTask}/>
      </div>
    );
  }
}

export default App;
