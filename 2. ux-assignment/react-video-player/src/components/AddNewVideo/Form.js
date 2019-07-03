import React from "react";

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            url: '',
        }
    }
    handleTitleChange = (event) => {
        this.setState({ title: event.target.value });
    }
    handleUrlChange = (event) => {
        this.setState({ url: event.target.value });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const obj = this.props.editedObj;
        obj.title = this.state.title;
        obj.url = this.state.url;
        this.props.newObj(obj);
    }
    cancelEdit = () => {
        this.props.cancel()
    }
    render() {
        return (
            <div className="addNewVideo-form">
                <h3>Edit the video details</h3>
                <form>
                    <label>Title</label>
                    <input type="text" value={this.state.title} onChange={this.handleTitleChange.bind(this)} required />
                    <label>URL</label>
                    <input type="url" value={this.state.url} onChange={this.handleUrlChange.bind(this)} required />
                    <button className="btn btn-info" onClick={this.handleSubmit.bind(this)}>Submit</button>
                    <button className="btn btn-default" onClick={this.cancelEdit.bind(this)}>Cancel</button>
                </form>
            </div>
        );
    }
}

export default Form;