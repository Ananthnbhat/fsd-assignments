import React from "react";
import './AddNewVideo.css';
import Form from './Form'

export default class AddNewVideo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            obj: {},
            title: '',
            url: '',
            edit: false
        }
    }
    handleTitleChange = (event) => {
        if (event.target.value !== "")
            this.setState({ title: event.target.value });
    }
    handleUrlChange = (event) => {
        if (event.target.value !== "")
            this.setState({ url: event.target.value });
    }
    handleSubmit = () => {
        if (this.state.title !== "" && this.state.url !== "")
            this.props.addNewVideo(this.state.title, this.state.url);
        this.setState({
            title: '',
            url: ''
        })
    }
    approve = function (obj) {
        this.props.approveVideo(obj);
    }
    deleteVideo = (obj) => {
        this.props.deleteVideo(obj);
    }
    edit = (objToBeEdited) => {
        this.setState({ obj: objToBeEdited, edit: true });
    }
    editedNewObj = (editedObj) => {
        console.log(editedObj);
        this.props.edit(editedObj);
        this.setState({ edit: false });
    }
    cancelEdit = () => {
        this.setState({ edit: false });
    }
    render() {
        return (
            <div>
                {this.state.edit ? <Form editedObj={this.state.obj} newObj={this.editedNewObj.bind(this)} cancel={this.cancelEdit.bind(this)} /> :
                    <div>
                        <h3>Add a new video</h3>
                        <div className="addNewVideo-form">
                            <label>Title</label>
                            <input type="text" value={this.state.title} onChange={this.handleTitleChange.bind(this)} required />
                            <label>URL</label>
                            <input type="url" value={this.state.url} onChange={this.handleUrlChange.bind(this)} required />
                            <button className="btn btn-info" onClick={this.handleSubmit.bind(this)}>Add Video</button>
                        </div>
                        <table>
                            <thead>
                                <tr>
                                    <th>S.no</th>
                                    <th>Title</th>
                                    <th>URL</th>
                                    <th></th><th></th><th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.jsonInfo.map((item, index) =>
                                    <tr key={index}>
                                        <td>{item.id}</td>
                                        <td>{item.title}</td>
                                        <td>{item.url}</td>
                                        <td><button className="btn btn-default" onClick={() => this.edit(item)}>Edit</button></td>
                                        <td><button className="btn btn-default btn-danger" onClick={() => this.deleteVideo(item)}>Delete</button></td>
                                        <td><button className="btn btn-default btn-success" onClick={() => this.approve(item)} disabled={item.approved}>Approve</button></td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                }
            </div>
        );
    }
}
