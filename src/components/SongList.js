import React from 'react';
import SongItem from './SongItem'

const SongList = ({songs}) => {
    const songNodes = songs.map((song, index) => {
        return (<SongItem
            key={song.id.attributes['im:id']}
            position={index +1}
            title={song['im:name'].label}
            artist={song['im:artist'].label}
            />)
    })

    return (
        <div className="song-list">
            {songNodes}
        </div>
        )
    
}

export default SongList;