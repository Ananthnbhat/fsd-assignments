import React from 'react';

const Player = () => {
  return (
    <div class="embed-responsive embed-responsive-16by9">
      <video id="viewer" class="embed-responsive-item">
        <source id="videoSource"
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          type="video/mp4" />
      </video>
    </div>
  );
}
export default Player;