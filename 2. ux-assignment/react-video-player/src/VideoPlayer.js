import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Player from './components/Player/Player';
import Controls from './components/Controls/Controls';
import Playlist from './components/Playlist/Playlist';
import AddNewVideo from './components/AddNewVideo/AddNewVideo';
import axios from 'axios';
const URL = `http://localhost:3004/youtube`;

class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
    this.state = {
      progressValue: 0,
      jsonFile: [],
      oneObj: {},
      id: 0,
      title: '',
      url: 'http://media.w3.org/2010/05/bunny/trailer.mp4',
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
    axios.get(`${URL}?url=${this.state.url}`).then(response => {
      const oneObj = response.data;

      this.setState({
        oneObj: oneObj[0],
        likes: oneObj[0].likes,
        unlikes: oneObj[0].unlike
      });
    });
  }
  postData = async (URL, obj) => {
    const { data: post } = await axios.post(URL, obj);
    const jsonFile = [...this.state.jsonFile, post];
    this.setState({ jsonFile });
  }
  updateData = async (URL, obj) => {
    await axios.put(URL, obj);
  }
  deleteVideo = async obj => {
    await axios.delete(URL + '/' + obj.id);
    const jsonFile = this.state.jsonFile.filter(p => p.id !== obj.id);
    this.setState({ jsonFile });
  };

  componentDidMount() {
    this.getData(URL);
  }
  componentWillUnmount() {
    const obj = this.state.oneObj;
    obj.exitplayprogress = this.videoRef.current.currentTime;
    this.updateData(URL + '/' + obj.id, obj);
    const jsonFile = [...this.state.jsonFile];
    const index = jsonFile.indexOf(obj);
    jsonFile[index] = obj;
    this.setState({ jsonFile });
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
  approveVideo = async obj => {
    obj.approved = 1;
    this.updateData(URL + '/' + obj.id, obj);
    const jsonFile = [...this.state.jsonFile];
    const index = jsonFile.indexOf(obj);
    jsonFile[index] = obj;
    this.setState({ jsonFile });
  }
  getOneObj = async (url) => {
    // const obj = await axios.get(URL + '?url=' + url)
    await axios.get(`${URL}?url=${url}`).then(response => {
      const oneObj = response.data;
      this.setState({
        oneObj: oneObj[0],
        url,
        likes: oneObj[0].likes,
        unlikes: oneObj[0].unlike
      });
      console.log(oneObj[0]);
    });
  }
  play = () => {
    this.videoRef.current.play();
    this.setState({ disable: true })
    this.getOneObj(this.state.url)
  }
  videoPlay = (url) => {
    this.setState({ url, disable: true })
    this.videoRef.current.load();
    this.getOneObj(url);
    this.videoRef.current.play();
  }
  pause = () => {
    this.videoRef.current.pause();
    const obj = this.state.oneObj;
    obj.currentStatus = 'paused';
    this.updateData(URL + '/' + obj.id, obj);
    const jsonFile = [...this.state.jsonFile];
    const index = jsonFile.indexOf(obj);
    jsonFile[index] = obj;
    this.setState({ jsonFile, disable: false })
  }
  like = () => {
    const obj = this.state.oneObj;
    obj.likes += 1;
    this.updateData(URL + '/' + obj.id, obj);
    const jsonFile = [...this.state.jsonFile];
    const index = jsonFile.indexOf(obj);
    jsonFile[index] = obj;
    this.setState({ jsonFile });
  }
  unlike = () => {
    const obj = this.state.oneObj;
    obj.unlike += 1;
    this.updateData(URL + '/' + obj.id, obj);
    const jsonFile = [...this.state.jsonFile];
    const index = jsonFile.indexOf(obj);
    jsonFile[index] = obj;
    this.setState({ jsonFile });
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
              likes={this.state.oneObj.likes}
              unlikes={this.state.oneObj.unlike}
            />
          </div>
          <Playlist
            jsonInfo={this.state.jsonFile}
            playVideo={this.videoPlay.bind(this)}
          />
        </div>
        <AddNewVideo
          addNewVideo={this.handleAdd.bind(this)}
          approveVideo={this.approveVideo.bind(this)}
          deleteVideo={this.deleteVideo.bind(this)}
          jsonInfo={this.state.jsonFile}
        />
      </div>
    );
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
    console.log(this.videoRef.current.currentTime);
    // Update the progress bar's value
    this.setState({
      progressValue: percentage
    });
  }
}
// rimraf node_modules
export default VideoPlayer;
