import React from 'react';
import './App.css';
import AddTask from './components/addTask/AddTask';
import ViewTask from './components/viewTask/ViewTask';
import UpdateTask from './components/updateTask/UpdateTask';
import axios from 'axios';

// axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
const URL = 'http://localhost:8080';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskObj: {},
      addTask: true,
      editTask: false,
      allTasks: [],
      junk: false
    }
  }
  componentDidMount() {
    axios.get(URL + "/tasks", {
      // mode: 'no-cors',
      headers: {
        // 'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',

      },
      withCredentials: false,
      credentials: 'same-origin',
    })
      .then(response => {
        this.setState({
          allTasks: response.data
        })
      });
  }
  handleAddTaskClick = () => {
    this.setState({
      addTask: true,
    });
  }
  handleViewTaskClick = function () {
    //get all tasks and set to allTasks state
    this.getAllTasks();

    this.setState({
      addTask: false,
      editTask: false
    });
  }
  getAllTasks = () => {
    axios.get(URL + "/tasks")
      .then(response => {
        // console.log(response);
        this.setState({
          allTasks: response.data
        })
      });
  }
  editTask = (taskId) => {
    //get all tasks and set to allTasks state?
    const taskObj = this.state.allTasks.filter(i => i.taskId === taskId);
    this.setState({ editTask: true, taskObj }, () => {
      console.log(this.state.taskObj);
    });
  }
  endTask = (taskId) => {
    //get all tasks and set to allTasks state?
    const completedObj = this.state.allTasks.filter(i => i.taskId === taskId);
    completedObj[0].completed = true;
    axios({
      method: 'get',
      url: URL + "/completed/" + completedObj[0].taskId,
      data: completedObj[0],
      withCredentials: false,
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => {
      this.setState({
        allTasks: response.data
      });
    });
    this.getAllTasks();
    this.handleViewTaskClick();
  }
  updateTask = (updatedTask) => {

    axios({
      method: 'post',
      url: URL + "/update",
      data: updatedTask,
      headers: {
        'Content-Type': 'application/json'
      },
      withCredentials: false
    }).then(response => {
      // console.log(response);
      this.setState({
        allTasks: response.data
      })
    });
    this.getAllTasks();
    this.handleViewTaskClick();
  }
  render() {
    return (
      <div className="App">
        <div className="row">
          <div className="col-sm-4">
            <h1>Task Manager</h1>
          </div>
          <div className="col-sm-8" />
        </div>
        <div className="row">
          <div className="col-sm-2 addTaskButton">
            <button className={this.state.addTask ? "btn btn-primary" : "btn btn-default"} onClick={this.handleAddTaskClick.bind(this)}>Add Task</button>
          </div>
          <div className="col-sm-10">
            <button className={this.state.addTask ? "btn btn-default" : "btn btn-primary"} onClick={this.handleViewTaskClick.bind(this)}>View Task</button>
          </div>
        </div>
        <hr />
        {this.state.addTask ?
          <AddTask /> :
          this.state.editTask ?
            <UpdateTask
              taskForEditing={this.state.taskObj}
              cancelEditing={this.handleViewTaskClick.bind(this)}
              updateTask={this.updateTask.bind(this)}
            /> :
            <ViewTask
              allTasks={this.state.allTasks}
              editTask={this.editTask.bind(this)}
              endTask={this.endTask.bind(this)}
            />}
      </div>
    );
  }
}

export default App;
