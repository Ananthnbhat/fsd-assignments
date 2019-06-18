import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Player from './components/Player/Player';
import Controls from './components/Controls/Controls';
import Playlist from './components/Playlist/Playlist';
import AddNewVideo from './components/AddNewVideo/AddNewVideo';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
    this.state = {
      progressValue: 0,
      jsonFile: [],
      url: ''
    }
  }
  componentDidMount() {
    axios.get(`http://localhost:3004/youtube`)
      .then(response => {
        const jsonFile = response.data;
        this.setState({ jsonFile });
      });
  }
  play = (e) => {
    // console.log(e);
    this.setState({ url: e })
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
    }
  }
  decVol = () => {
    if (this.videoRef.current.volume > 0.05) {
      this.videoRef.current.volume -= .1;
    } else {
      this.videoRef.current.volume = null;
    }
  }
  toggleMute = () => {
    if (this.videoRef.current.muted) {
      this.videoRef.current.muted = false;
    }
    else {
      this.videoRef.current.muted = true;
    }
  }
  updateProgressBar = () => {
    var percentage = Math.floor((100 / this.videoRef.current.duration) * this.videoRef.current.currentTime);
    // Update the progress bar's value
    this.setState({
      progressValue: percentage
    });
  }
  like = () => {
    console.log("Increment Like")
  }
  unlike = () => {
    console.log("Increment Unike")
  }
  render() {
    return (
      <div className="App">
        <Nav />
        <div className="parent">
          <div className="player">
            <Player
              videoUrl={this.state.url}
              ref={this.videoRef}
              updateProgress={this.updateProgressBar.bind(this)}
            />
            <Controls
              playVideo={this.play.bind(this)}
              pauseVideo={this.pause.bind(this)}
              repeatVideo={this.repeat.bind(this)}
              incrementVol={this.incVol.bind(this)}
              decrementVol={this.decVol.bind(this)}
              muteVol={this.toggleMute.bind(this)}
              incLike={this.like.bind(this)}
              incUnlike={this.unlike.bind(this)}
              progressVal={this.state.progressValue}
              disableButton={this.videoRef}
            />
          </div>
          <Playlist
            jsonInfo={this.state.jsonFile}
            playVideo={this.play.bind(this)}
          />
        </div>
        <AddNewVideo />
      </div>
    );
  }
}
// rimraf node_modules
export default App;
