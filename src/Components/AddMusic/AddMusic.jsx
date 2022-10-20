import React, { useState } from 'react';
import './AddMusic.css'

const AddMusic = (props) => {
    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [album, setAlbum] = useState('');
    const [release_date, setReleaseDate] = useState('');
    const [genre, setGenre] = useState('');

    function handleSubmit(event){
        event.preventDefault();
        let newMusic = {
            title: title,
            artist: artist,
            album: album,
            release_date: release_date,
            genre: genre,
        };
        props.addNewMusic(newMusic)
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <div className='formtable'>
                <label>Title:</label>
                <input type='text' value={title} onChange={(event) => setTitle(event.target.value)}></input>
            </div>
            <div className='formtable'>
                <label>Artist:</label>
                <input type='text' value={artist} onChange={(event) => setArtist(event.target.value)}></input>
            </div>
            <div className='formtable'>
                <label>Album:</label>
                <input type='text' value={album} onChange={(event) => setAlbum(event.target.value)}></input>
            </div>
            <div className='formtable'>
                <label>Release Date:</label>
                <input type='date' value={release_date} onChange={(event) => setReleaseDate(event.target.value)}></input>
            </div>
            <div className='formtable'>
                <label>Genre:</label>
                <input type='text' value={genre} onChange={(event) => setGenre(event.target.value)}></input>
            </div>
            <button type='submit'>AddSong</button>
        </form>
     );
}
 
export default AddMusic;