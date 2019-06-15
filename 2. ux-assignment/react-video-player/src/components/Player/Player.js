import React from 'react';

class Player extends React.Component {

  togglePlay = (e) => {
    if (e.currentTarget.paused) {
      e.currentTarget.play()
      // play.setAttribute("disabled", "true");
      // pause.removeAttribute("disabled");
    }
    else {
      e.currentTarget.pause();
      // play.removeAttribute("disabled");
      // pause.setAttribute("disabled", "true");
    }
  }
  render() {
    return (
      <div className="embed-responsive embed-responsive-16by9">
        <video id="viewer" className="embed-responsive-item" onClick={this.togglePlay.bind(this)}>
          <source id="videoSource"
            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            type="video/mp4" />
        </video>
      </div>
    );
  }
}

export default Player;