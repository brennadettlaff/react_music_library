import React, { useState, useEffect } from 'react';
import DisplayMusic from './Components/DisplayMusic/DisplayMusic';
import AddMusic from './Components/AddMusic/AddMusic';
import axios from 'axios';

function App() {


  const [entries, setMusic] = useState([])

  useEffect(() => {
    getAllMusic();
  }, [])

  async function getAllMusic(){
    let response = await axios.get('http://127.0.0.1:8000/api/music/');
    console.log(response.data)
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
      <DisplayMusic parentEntries={entries} />
      <AddMusic addNewMusic={addNewMusic}/>
    </div>
  );
}

export default App;
