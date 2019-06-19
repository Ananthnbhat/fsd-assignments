import React from "react";
import './Controls.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Controls extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            disable: false
        }
    }
    playVideo = () => {
        this.props.playVideo();
        this.setState({
            disable: !this.state.disable
        })

    }
    pauseVideo = () => {
        this.props.pauseVideo();
        this.setState({
            disable: !this.state.disable
        })
    }
    render() {
        return (
            <div id='controls'>
                <div>
                    <progress id='progress-bar' min='0' max='100' value={this.props.progressVal}>{this.props.progressVal}% played</progress>
                </div>
                <div className="buttons">
                    <button type="button" className="btn btn-primary-outline btn-xs play" onClick={this.playVideo} disabled={this.props.disableButton}>
                        <span className="glyphicon glyphicon-play"></span>
                    </button>
                    <button type="button" className="btn btn-primary-outline btn-xs pause" onClick={this.pauseVideo} disabled={!this.props.disableButton}>
                        <span className="glyphicon glyphicon-pause"></span>
                    </button>
                    <button type="button" className="btn btn-primary-outline btn-xs reset">
                        <span className="glyphicon glyphicon-repeat" onClick={this.props.repeatVideo}></span>
                    </button>
                    <button type="button" className="btn btn-primary-outline btn-xs plus">
                        <span className="glyphicon glyphicon-plus" onClick={this.props.incrementVol}></span>
                    </button>
                    <button type="button" className="btn btn-primary-outline btn-xs minus">
                        <span className="glyphicon glyphicon-minus" onClick={this.props.decrementVol}></span>
                    </button>
                    <button type="button" className="btn btn-primary-outline btn-xs mute">
                        <span className="glyphicon glyphicon-headphones" onClick={this.props.muteVol}></span>
                    </button>
                    <button type="button" className="btn btn-primary-outline btn-xs thumbsUp">
                        <span className="glyphicon glyphicon-thumbs-up" onClick={this.props.incLike}></span>
                    </button>
                    <span id="likesCount">0</span>
                    <button type="button" className="btn btn-primary-outline btn-xs thumbsDown">
                        <span className="glyphicon glyphicon-thumbs-down" onClick={this.props.incUnlike}></span>
                    </button>
                    <span id="dislikesCount">0</span>
                </div>
            </div>
        );
    }
}
