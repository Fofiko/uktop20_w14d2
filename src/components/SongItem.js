import React from 'react';

const SongItem = (props) => {
    return (
        <div className='song'>
            <p>{props.position} {props.title}</p>
            <p>Artist: {props.artist}</p>
        </div>
    )
}

export default SongItem;