import React from "react";
import './AddNewVideo.css';

export default class AddNewVideo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            url: '',
            edit: false
        }
    }
    handleTitleChange = (event) => {
        this.setState({ title: event.target.value });
    }
    handleUrlChange = (event) => {
        this.setState({ url: event.target.value });
    }
    handleSubmit = () => {
        this.props.addNewVideo(this.state.title, this.state.url);
    }
    approve = function (obj) {
        this.props.approveVideo(obj);
    }
    deleteVideo = (obj) => {
        this.props.deleteVideo(obj);
    }
    edit = (obj) => {
        this.props.edit(obj)
        this.setState({ edit: true });
    }
    render() {
        return (
            <div>
                <div>
                    <label>Title</label>
                    <input type="text" value={this.state.title} onChange={this.handleTitleChange.bind(this)} required />
                    <label>URL</label>
                    <input type="url" value={this.state.url} onChange={this.handleUrlChange.bind(this)} required />
                    <button onClick={this.handleSubmit.bind(this)}>Add Video</button>
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
                                <td>{item.id}asfsf</td>
                                <td>{this.state.edit ? <input type="title" /> : item.title}afasf</td>
                                <td>{this.state.edit ? <input type="url" /> : item.url}asfsfasf</td>
                                <td><button onClick={() => this.edit(item)}>Edit</button></td>
                                <td><button onClick={() => this.deleteVideo(item)}>Delete</button></td>
                                <td><button onClick={() => this.approve(item)} disabled={item.approved}>Approve</button></td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}
