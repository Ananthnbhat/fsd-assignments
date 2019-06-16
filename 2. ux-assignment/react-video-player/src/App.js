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
    this.videoPlayRef = React.createRef();
  }
  playOrPause = () => {
    this.videoPlayRef.current.play();
  }
  render() {
    return (
      <div className="App">
        <Nav />
        <div className="parent">
          <div className="player">
            <Player ref={this.videoPlayRef} />
            <Controls playOrPauseVideo={this.playOrPause.bind(this)} />
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
