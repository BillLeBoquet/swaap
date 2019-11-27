import Album from "./Album";
import Artist from "./Artist";

class Track{
    constructor(track) {
        this.id = track.id
        this.album = new Album(track.album)
        this.artists = (track.artists != null) ? track.artists.map(artist => new Artist(artist)) : {}
        this.name = track.name
    }
}

export default Track