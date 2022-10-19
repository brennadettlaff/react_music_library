import React, { useState, useEffect } from 'react';
import DisplayMusic from './Components/DisplayMusic/DisplayMusic';
import AddMusic from './Components/AddMusic/AddMusic';
import SearchMusic from './Components/SearchMusic/SearchMusic';
import axios from 'axios';
import './App.css'

function App() {
  const [music, setMusic] = useState([]);

  useEffect(() => {
    getAllMusic();
  }, [])

  async function getAllMusic(){
    let response = await axios.get('http://127.0.0.1:8000/api/music/');
    setMusic(response.data);
  }

  async function addNewMusic(newSong){
    let response = await axios.post('http://127.0.0.1:8000/api/music/', newSong)
    if(response.status === 201){
      await getAllMusic();
    }
  }

  function filterSongs(search){
    console.log(search)
    let filteredSongs = music.filter((song)=>{
      if(song.title === search){
        return true
      }
    })
    setMusic(filteredSongs)
  }

  return (
    <div>
      <div className='border-box'>
        <h3>Search Music</h3>
        <SearchMusic filterSongs={filterSongs}/>
      </div>
      <div className='border-box'>
        <h3>Add Music</h3>
        <AddMusic addNewMusic={addNewMusic}/>
      </div>
      <div className='border-box'>
        <DisplayMusic parentEntries={music} />
      </div>

    </div>
  );
}

export default App;
