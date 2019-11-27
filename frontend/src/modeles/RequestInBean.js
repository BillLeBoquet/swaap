class RequestInBean{
    constructor(title, album, artists) {
        this.title = title
        this.album = album
        this.artist = (artists !== null) ? artists[0] : null
    }
}

export default RequestInBean