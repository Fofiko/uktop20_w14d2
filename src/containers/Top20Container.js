import React, { Component } from 'react';
// import SongList from '../components/SongList'
// import SongItem from '../components/SongItem'

class Top20Container extends Component {

    constructor(props) {
        super(props)
        this.state = {
            songs: []
        }
    }

    componentDidMount() {
        const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
        const request = new XMLHttpRequest();
        request.open('GET', url);

        request.addEventListener("load", () => {
            if (request.status !== 200) return;
            const jsonString = request.responseText;
            const data = JSON.parse(jsonString);
            this.setState({ songs: data.feed.entry })
        });

        request.send();
    };

    render() {
        return (
            <div className='top20-box'>
                <h1>UK Top 20</h1>
                {/* <SongList /> */}
                {/* <SongItem /> */}
            </div>
        )
    }

}

export default Top20Container