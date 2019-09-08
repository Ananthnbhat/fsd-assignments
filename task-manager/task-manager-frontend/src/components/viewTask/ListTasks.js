import React from 'react';
import './ListTasks.css';

class ListTasks extends React.Component {
    handleEditTask = (taskId) => {
        this.props.editTask(taskId)
    }
    handleEndTask = (taskId) => {
        this.props.endTask(taskId);
    }
    render() {
        return (
            <div className="list-tasks">
                <div className="row first-row">
                    <div className="col-sm-2">
                        Task
                </div>
                    <div className="col-sm-2">
                        Parent Task
                </div>
                    <div className="col-sm-1">
                        Priority
                </div>
                    <div className="col-sm-2">
                        Start Date
                </div>
                    <div className="col-sm-2">
                        End Date
                </div>
                    <div className="col-sm-1" />
                    <div className="col-sm-2" />
                </div>
                {this.props.allTasks.length > 0 ?
                    this.props.allTasks.map((item, index) =>
                        <div className="row" key={index}>
                            <div className="col-sm-2 no-wrap task-col">
                                <p>{item.task}</p>
                            </div>
                            <div className="col-sm-2 parentTask-col">
                                <p>{item.parentTask}</p>
                            </div>
                            <div className="col-sm-1">
                                {item.priority}
                            </div>
                            <div className="col-sm-2">
                                {item.startDate}
                            </div>
                            <div className="col-sm-2">
                                {item.endDate}
                            </div>
                            <div className="col-sm-1">
                                <button disabled={item.completed} className="btn btn-info" onClick={() => this.handleEditTask(item.taskId)}>Edit Task
                        </button>
                            </div>
                            <div className="col-sm-2 end-task">
                                <button className="btn btn-danger" onClick={() => this.handleEndTask(item.taskId)}>End Task
                        </button>
                            </div>
                        </div>
                    )
                    : <p>Add tasks to see a list of tasks here</p>}
            </div>
        );
    }
}
export default ListTasks;