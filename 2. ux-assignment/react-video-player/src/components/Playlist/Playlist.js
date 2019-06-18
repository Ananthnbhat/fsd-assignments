import React from "react";
import './Playlist.css';

class Playlist extends React.Component {

    playVideo = (url) => {
        this.props.playVideo(url);
    }

    render() {
        const echoStyle = {
            textAlign: 'center'
        };
        return (
            <div className="playlist">
                <div className="echo" style={echoStyle}></div>
                <h3 style={echoStyle}>Playlist</h3>
                <ul>
                    {this.props.jsonInfo.map((item, index) => <p key={index} className="videos" id="video0" onClick={() => this.playVideo(item.url)}><button onClick={() => this.playVideo(item.url)} type="button" className="btn btn-default btn-xs playListButton">
                        <span className="glyphicon glyphicon-play"></span>
                    </button>
                        {item.title}
                    </p>)}
                </ul>
            </div>
        );
    }
}
export default Playlist;