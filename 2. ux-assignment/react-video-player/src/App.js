import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Player from './components/Player/Player';
import Controls from './components/Controls/Controls';
import Playlist from './components/Playlist/Playlist';
import AddNewVideo from './components/AddNewVideo/AddNewVideo';
import axios from 'axios';
const URL = `http://localhost:3004/youtube`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
    this.state = {
      progressValue: 0,
      jsonFile: [],
      oneObj: {},
      id: 0,
      title: '',
      url: '',
      likes: 0,
      unlikes: 0,
      exitplayprogress: 0,
      disable: false
    }
  }
  getData = (URL) => {
    axios.get(URL)
      .then(response => {
        const jsonFile = response.data;
        this.setState({ jsonFile, id: jsonFile.length });
      });
  }
  postData = async (URL, obj) => {
    const { data: post } = await axios.post(URL, obj);
    const jsonFile = [...this.state.jsonFile, post];
    this.setState({ jsonFile });
  }
  componentDidMount() {
    this.getData(URL);
  }
  handleAdd = (title, url) => {
    const obj = {
      id: this.state.id + 1,
      title,
      url,
      status: "added",
      approved: 0,
      likes: this.state.likes,
      unlike: this.state.unlikes,
      currentStatus: "stopped",
      exitplayprogress: this.state.exitplayprogress
    };
    this.setState({ id: obj.id })
    this.postData(URL, obj);
  };
  play = (e) => {
    this.videoRef.current.play();
    this.setState({ disable: true })
  }
  videoPlay = (e) => {
    this.setState({ url: e })
    this.videoRef.current.load();
    this.videoRef.current.play();
    this.setState({ disable: true })
  }
  pause = () => {
    this.videoRef.current.pause();
    this.setState({ disable: false })
  }
  repeat = () => {
    this.videoRef.current.currentTime = 0;
    this.videoRef.current.play();
    this.setState({ disable: true })
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
              playVideo={this.play.bind(this)}
              pauseVideo={this.pause.bind(this)}
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
              disableButton={this.state.disable}
              likes={this.state.likes}
              unlikes={this.state.unlikes}
            />
          </div>
          <Playlist
            jsonInfo={this.state.jsonFile}
            playVideo={this.videoPlay.bind(this)}
          />
        </div>
        <AddNewVideo
          addNewVideo={this.handleAdd.bind(this)}
          jsonInfo={this.state.jsonFile}
        />
      </div>
    );
  }
}
// rimraf node_modules
export default App;
