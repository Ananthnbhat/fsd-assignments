import React from "react";
import './Controls.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Controls extends React.Component {

    render() {
        return (
            <div id='controls'>
                <div className="buttons">
                    <button type="button" className="btn btn-default btn-xs play" onClick={this.props.playVideo} disabled={false}>
                        <span className="glyphicon glyphicon-play"></span>
                    </button>
                    <button type="button" className="btn btn-default btn-xs pause" onClick={this.props.pauseVideo}>
                        <span className="glyphicon glyphicon-pause"></span>
                    </button>
                    <button type="button" className="btn btn-default btn-xs reset">
                        <span className="glyphicon glyphicon-repeat" onClick={this.props.repeatVideo}></span>
                    </button>
                    <button type="button" className="btn btn-default btn-xs plus">
                        <span className="glyphicon glyphicon-plus"></span>
                    </button>
                    <button type="button" className="btn btn-default btn-xs minus">
                        <span className="glyphicon glyphicon-minus"></span>
                    </button>
                    <button type="button" className="btn btn-default btn-xs mute">
                        <span className="glyphicon glyphicon-headphones"></span>
                    </button>
                    <button type="button" className="btn btn-success btn-xs thumbsUp">
                        <span className="glyphicon glyphicon-thumbs-up"></span>
                    </button>
                    <span id="likesCount">0</span>
                    <button type="button" className="btn btn-danger btn-xs thumbsDown">
                        <span className="glyphicon glyphicon-thumbs-down"></span>
                    </button>
                    <span id="dislikesCount">0</span>
                </div>
                <div>
                    <progress id='progress-bar' min='0' max='100' value='30'>0% played</progress>
                </div>
            </div>
        );
    }
}
