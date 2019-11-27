import Artist from "./Artist";
class Album{
    constructor(album) {
        this.id = album.id
        this.name = album.name
        this.artists = (album.artists != null) ? album.artists.map(artist => new Artist(artist)) : {}
        this.image = (album.images != null) ? (album.images.length > 0) ? album.images[0].url : '' : ''
    }
}

export default Album