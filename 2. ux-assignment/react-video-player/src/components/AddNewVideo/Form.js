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
    render() {
        return (
            <form>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={this.handleTitleChange.bind(this)} required />
                <label>URL</label>
                <input type="url" value={this.state.url} onChange={this.handleUrlChange.bind(this)} required />
                <button onClick={this.handleSubmit.bind(this)}>Submit</button>
            </form>
        );
    }
}

export default Form;