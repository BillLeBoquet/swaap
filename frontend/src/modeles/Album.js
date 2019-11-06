import Artist from "./Artist";
class Album{
    constructor(album) {
        this.id = album.id
        this.name = album.name
        this.artists = album.artists.map(artist => new Artist(artist))
        this.image = album.images[0].url
        //this.releaseDate = album.release_date
    }
}

export default Album