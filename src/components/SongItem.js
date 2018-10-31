import React, { Component }from 'react';

class SongItem extends Component {
    render() {
        return (
            <div className='song'>
                <p>{this.props.position} {this.props.title}</p>
                <p>Artist: {this.props.artist}</p>
            </div>
        )
    }
}

export default SongItem;