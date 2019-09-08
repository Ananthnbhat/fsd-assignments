import React from 'react';
import './UpdateTask.css';
// import posed from 'react-pose';

export default class UpdateTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            taskValue: this.props.taskForEditing[0].task || "",
            priority: this.props.taskForEditing[0].priority || "",
            parentTaskValue: this.props.taskForEditing[0].parentTask || "",
            startDateValue: this.props.taskForEditing[0].startDate || "",
            endDateValue: this.props.taskForEditing[0].endDate || "",
            updateTask: {}
        }
    }
    handleTaskValue(event) {
        this.setState({ taskValue: event.target.value });
    }
    handlePriority = (event) => {
        this.setState({ priority: event.target.value });
    }
    handleParentTaskValue = function (event) {
        this.setState({ parentTaskValue: event.target.value });
    }
    handleStartDateValue(event) {
        this.setState({ startDateValue: event.target.value });
    }
    handleEndDateValue(event) {
        this.setState({ endDateValue: event.target.value });
    }
    handleUpdate = (e) => {
        e.preventDefault();
        const updatedTask = {
            taskId: this.props.taskForEditing[0].taskId,
            task: this.state.taskValue,
            parentTask: this.state.parentTaskValue,
            priority: this.state.priority,
            startDate: this.state.startDateValue,
            endDate: this.state.endDateValue
        }
        this.props.updateTask(updatedTask);
    }
    handleCancel(e) {
        e.preventDefault();
        this.props.cancelEditing();
    }
    render() {
        return (
            <div className="add-task">
                <h3>Update Task</h3>
                <form>
                    <div className="row">
                        <div className="col-sm-2">Task :</div>
                        <div className="col-sm-10">
                            <input type="text" value={this.state.taskValue} onChange={this.handleTaskValue.bind(this)} required />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-2">Priority :</div>
                        <div className="col-sm-10">
                            <input
                                id="typeinp"
                                type="range"
                                min="0" max="30"
                                value={this.state.priority}
                                onChange={this.handlePriority.bind(this)}
                                step="1" required />
                            {this.state.priority}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-2">Parent Task :</div>
                        <div className="col-sm-10">
                            <input type="text" value={this.state.parentTaskValue} onChange={this.handleParentTaskValue.bind(this)} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-2">Start Date :</div>
                        <div className="col-sm-10">
                            <input type="date" value={this.state.startDateValue} onChange={this.handleStartDateValue.bind(this)} required />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-2">End Date :</div>
                        <div className="col-sm-10">
                            <input type="date" value={this.state.endDateValue} onChange={this.handleEndDateValue.bind(this)} required />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-2" />
                        <div className="col-sm-10">
                            <button className="btn btn-primary button" value="Update" onClick={this.handleUpdate.bind(this)}>Update</button>
                            <button className="btn btn-secondary button" value="Cancel" onClick={this.handleCancel.bind(this)}>Cancel</button>

                        </div>
                    </div>
                </form>
            </div>
        );
    }
}