import React, { useState, useEffect } from 'react';
import DisplayMusic from './Components/DisplayMusic/DisplayMusic';
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

  return (
    <div>
      <DisplayMusic parentEntries={entries} />
    </div>
  );
}

export default App;
