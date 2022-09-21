import React, { useState } from 'react';
import DisplayMusic from './Components/DisplayMusic/DisplayMusic';

function App() {

  const [entries, setMusic] = useState([{title: 'title', artist: 'artist', album:'album', release_date:'date', genre: 'genre'}, {title: 'title2', artist: 'artist2', album:'album2', release_date:'date2', genre: 'genre2'}])

  return (
    <div>
      <DisplayMusic parentEntries={entries} />
    </div>
  );
}

export default App;
