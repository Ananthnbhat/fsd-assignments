import React from "react";

function Playlist() {
    const echoStyle={
        textAlign: 'center'
    };
    return (
        <div class="playlist">
            <div class="echo" style={echoStyle}></div>
            <h3 style={echoStyle}>Playlist</h3>
            <ul>
                <p class="videos" id="video0"><button type="button" class="btn btn-default btn-xs playListButton">
                        <span class="glyphicon glyphicon-play"></span>
                    </button>
                    Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself.
                </p>
                <p class="videos" id="video1"><button type="button" class="btn btn-default btn-xs playListButton">
                        <span class="glyphicon glyphicon-play"></span>
                    </button>
                    The first Blender Open Movie from 2006.
                </p>
                <p class="videos" id="video2"><button type="button" class="btn btn-default btn-xs playListButton">
                        <span class="glyphicon glyphicon-play"></span>
                    </button>
                    HBO GO now works with Chromecast -- the easiest way to enjoy online video on your TV.
                </p>
                <p class="videos" id="video3"><button type="button" class="btn btn-default btn-xs playListButton">
                        <span class="glyphicon glyphicon-play"></span>
                    </button>
                    Sintel is an independently produced short film, initiated by the Blender Foundation.
                </p>
                <p class="videos" id="video4"><button type="button" class="btn btn-default btn-xs playListButton">
                        <span class="glyphicon glyphicon-play"></span>
                    </button>
                    Tears of Steel was realized with crowd-funding by users of the open source 3D creation tool
                    Blender.
                </p>
            </ul>
        </div>
    );
}
export default Playlist;