import React, { useState, useEffect } from 'react';
import DisplayMusic from './Components/DisplayMusic/DisplayMusic';
import AddMusic from './Components/AddMusic/AddMusic';
import axios from 'axios';
import './App.css'

function App() {
  const [entries, setMusic] = useState([]);

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

  

  return (
    <div>
      <div className='border-box'>
        <h3>Add Music</h3>
        <AddMusic addNewMusic={addNewMusic}/>
      </div>
      <div className='border-box'>
        <DisplayMusic parentEntries={entries} />
      </div>

    </div>
  );
}

export default App;
