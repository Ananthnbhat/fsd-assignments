import React from 'react';

class Player extends React.Component {

  togglePlay(e) {
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
  render() {
    console.log(this.props.videoUrl)
    return (
      <div className="embed-responsive embed-responsive-16by9">
        <video id="viewer" className="embed-responsive-item" onClick={this.togglePlay.bind(this)} ref={this.props.innerRef} onTimeUpdate={this.props.updateProgress}>
          <source id="videoSource"
            src={this.props.videoUrl || "http://media.w3.org/2010/05/bunny/trailer.mp4"}
            type="video/mp4" />
        </video>
      </div>
    );
  }
}


export default React.forwardRef((props, ref) => <Player innerRef={ref} {...props} />);