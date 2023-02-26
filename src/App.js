import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import DetailSong from './components/DetailSong';
import List from './components/List';
import Datasongs from './data/songs.json';
import Songs from './Songs'
import Playing from './components/Playing';
import { useState } from 'react';
function App() {
  const [song, setSong] = useState(Datasongs[0])
  const hanleSetSong = (idsong)  =>{
    const song = Datasongs.find(song =>song.id === idsong)
    if(!song)
          setSong(Datasongs[0])
    else
          setSong(song)
  }
  
  return (
    <div className="App">
      <Songs.Provider value={{Datasongs,song,hanleSetSong}}>
      <Navbar />
     <div className='grid grid-cols-3 bg-[#334155] h-screen-navbar-player overflow-hidden'>
      <DetailSong />
      <List/>
     </div>
     <Playing/>
      </Songs.Provider>
    
    </div>
  );
}

export default App;
