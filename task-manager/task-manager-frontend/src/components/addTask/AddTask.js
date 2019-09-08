import React from 'react';
import './AddTask.css';
import axios from 'axios';

const postURL = 'http://localhost:8080/add';
export default class AddTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            taskValue: '',
            priority: "0",
            parentTaskValue: '',
            startDateValue: '',
            endDateValue: ''
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
    submitHandler = (e) => {
        e.preventDefault();
        const newTaskObj = {
            task: this.state.taskValue,
            parentTask: this.state.parentTaskValue,
            priority: this.state.priority,
            startDate: this.state.startDateValue,
            endDate: this.state.endDateValue
        };
        console.log(newTaskObj);
        axios({
            method: 'post',
            url: postURL,
            data: newTaskObj,
            // mode: 'no-cors',
            headers: {
                // 'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',

            },
            withCredentials: false,
            // credentials: 'same-origin',

        });
        this.handleReset(e);
    }
    handleReset(e) {
        e.preventDefault();
        this.setState({
            taskValue: '',
            priority: '',
            parentTaskValue: '',
            startDateValue: '',
            endDateValue: ''
        });
    }
    render() {
        return (
            <div className="add-task">
                <form onSubmit={this.submitHandler.bind(this)}>
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
                            <button className="btn btn-primary button" value="Submit">Submit</button>
                            <button className="btn btn-secondary button" value="Reset" onClick={this.handleReset.bind(this)}>Reset</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
