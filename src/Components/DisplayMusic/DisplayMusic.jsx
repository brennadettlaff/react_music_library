import React from 'react';
import './DisplayMusic'

const DisplayMusic = (props) => {
    return ( 
        <table align='center' className='table'>
            <thead>
            <tr>
                <th>Title</th>
                <th>Artist</th>
                <th>Album</th>
                <th>Release Date</th>
                <th>Genre</th>
            </tr>
            </thead>
            <tbody>
            {props.parentEntries.map((entry) => {
                return (
                    <tr>
                        <td>{entry.title}</td>
                        <td>{entry.artist}</td>
                        <td>{entry.album}</td>
                        <td>{entry.release_date}</td>
                        <td>{entry.genre}</td>
                    </tr>
                )
            })}
            </tbody>
        </table>
     );
}
 
export default DisplayMusic;