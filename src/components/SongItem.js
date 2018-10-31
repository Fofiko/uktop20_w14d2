import React from 'react';

const SongItem = ({position, title, artist}) => {
    <div className='song'>
        <p>#{position} {title}</p>
        <p>Artist: {artist}</p>
        <p>Genre: {genre}</p>
    </div>
}

export default SongItem;