import React from "react";
import './AddNewVideo.css'

export default class AddNewVideo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            url: ''
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
    render() {
        return (
            <div>
                <div>
                    <label>Title</label>
                    <input type="text" value={this.state.title} onChange={this.handleTitleChange.bind(this)} required />
                    <label>URL</label>
                    <input type="text" value={this.state.url} onChange={this.handleUrlChange.bind(this)} required />
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
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.url}</td>
                                <td><button>Edit</button></td>
                                <td><button>Delete</button></td>
                                <td><button onClick={() => this.approve(item)}>Approve</button></td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}
