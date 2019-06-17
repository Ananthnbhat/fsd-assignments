import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Player from './components/Player/Player';
import Controls from './components/Controls/Controls';
import Playlist from './components/Playlist/Playlist';
import AddNewVideo from './components/AddNewVideo/AddNewVideo';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
  }
  play = () => {
    this.videoRef.current.play();
  }
  pause = () => {
    this.videoRef.current.pause();
  }
  repeat = () => {
    this.videoRef.current.currentTime = 0;
    this.videoRef.current.play();
  }
  incVol = () => {
    if (this.videoRef.current.volume < 1) {
      this.videoRef.current.volume += .1;
      console.log(this.videoRef.current.volume);
    }
  }
  decVol = () => {
    if (this.videoRef.current.volume > 0.05) {
      this.videoRef.current.volume -= .1;
      console.log(this.videoRef.current.volume);
    } else {
      this.videoRef.current.volume = null;
    }
  }
  toggleMute = () => {
    if (this.videoRef.current.muted) {
      this.videoRef.current.muted = false;
      console.log(this.videoRef.current.muted);
    }
    else {
      this.videoRef.current.muted = true;
      console.log(this.videoRef.current.muted);
    }
  }
  render() {
    return (
      <div className="App">
        <Nav />
        <div className="parent">
          <div className="player">
            <Player ref={this.videoRef} />
            <Controls
              playVideo={this.play.bind(this)}
              pauseVideo={this.pause.bind(this)}
              repeatVideo={this.repeat.bind(this)}
              incrementVol={this.incVol.bind(this)}
              decrementVol={this.decVol.bind(this)}
              muteVol={this.toggleMute.bind(this)}
              disableButton={this.videoRef}
            />
          </div>
          <Playlist />
        </div>
        <AddNewVideo />
      </div>
    );
  }
}
// rimraf node_modules
export default App;
