import React from 'react';

const Player = React.forwardRef((props, ref) => {

  function togglePlay(e) {
    if (e.currentTarget.paused) {
      e.currentTarget.play();
      // play.setAttribute("disabled", "true");
      // pause.removeAttribute("disabled");
    }
    else {
      e.currentTarget.pause();
      // play.removeAttribute("disabled");
      // pause.setAttribute("disabled", "true");
    }
  }
  return (
    <div className="embed-responsive embed-responsive-16by9">
      <video id="viewer" className="embed-responsive-item" onClick={togglePlay} ref={ref}>
        <source id="videoSource"
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          type="video/mp4" />
      </video>
    </div>
  );
})


export default Player;