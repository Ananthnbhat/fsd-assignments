import React from 'react';
import SearchTask from './SearchTask'
import ListTasks from './ListTasks'
import './ViewTask.css';

export default class ViewTask extends React.Component {

    editTask = (taskId) => {
        this.props.editTask(taskId);
    }
    endTask = (taskId) => {
        this.props.endTask(taskId);
    }
    render() {
        return (
            <div className="view-task">
                <SearchTask />
                <hr />
                <ListTasks allTasks={this.props.allTasks} endTask={this.endTask.bind(this)} editTask={this.editTask.bind(this)} />
            </div>
        );
    }

}