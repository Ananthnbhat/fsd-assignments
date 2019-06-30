import React from "react";
import './Playlist.css';

class Playlist extends React.Component {

    playVideo = (url) => {
        this.props.playVideo(url);
    }

    render() {
        const echoStyle = {
            textAlign: 'center',
            color: 'black'
        };
        return (
            <div className="playlist">
                <div className="playlistChild">
                    <h3 style={echoStyle}>Playlist</h3>
                    <ul>
                        {this.props.jsonInfo.map((item, index) => item.approved === 1 ? <p key={index} className="videos" id="video0" onClick={() => this.playVideo(item.url)}><button onClick={() => this.playVideo(item.url)} type="button" className="btn btn-xs playListButton btn-primary-outline">
                            <span className="glyphicon glyphicon-play"></span>
                        </button>
                            {item.title}
                        </p> : null)}
                    </ul>
                </div>
            </div>
        );
    }
}
export default Playlist;