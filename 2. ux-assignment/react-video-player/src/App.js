import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Player from './components/Player';
import Controls from './components/Controls';
import Playlist from './components/Playlist';
import AddNewVideo from './components/AddNewVideo';

function App() {
  return (
    <div className="App">
     <Nav />
     <Player />
     <Controls />
     <Playlist />
     <AddNewVideo />
    </div>
  );
}
// rimraf node_modules
export default App;
