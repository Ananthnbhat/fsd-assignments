import React from 'react';
import './SearchTask.css';

export default class SearchTask extends React.Component {

    render() {
        return (
            <div className="search">
                <div className="row">
                    <div className="col-sm-1 label">Task :</div>
                    <div className="col-sm-5">
                        <input type="text" />
                    </div>
                    <div className="col-sm-1 label">Parent Task :</div>
                    <div className="col-sm-5">
                        <input type="text" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-1 label">Priority From:</div>
                    <div className="col-sm-2">
                        <input type="number" />
                    </div>
                    <div className="col-sm-1 label">Priority To:</div>
                    <div className="col-sm-2">
                        <input type="number" />
                    </div>
                    <div className="col-sm-1 label">Start Date:</div>
                    <div className="col-sm-2">
                        <input type="date" />
                    </div>
                    <div className="col-sm-1 label">End Date:</div>
                    <div className="col-sm-2">
                        <input type="date" />
                    </div>
                </div>
            </div>
        );
    }

}