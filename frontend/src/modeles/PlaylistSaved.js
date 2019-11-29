class PlaylistSaved{
    constructor(playlist) {
        this.id = playlist.id
        this.name = playlist.name
        this.tracks = playlist.tracks
        this.image = playlist.image
    }
}

export default PlaylistSaved