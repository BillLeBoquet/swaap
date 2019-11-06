import React from 'react';
import Track from "../modeles/Track";

const Tracks = (props) => {
    const tracks = props.items.map(item => new Track(item))
    console.log('tracks : ')
    console.log(tracks)
    return (
        <div>
            <ul>{tracks.map((track) => {
                return (
                    <li>
                        <div>{track.name}</div>
                        <div>{track.album.name}</div>
                        <img alt={track.name} src={track.album.image}/>
                    </li>
                )
            })}</ul>
        </div>
    )
}

export default Tracks;