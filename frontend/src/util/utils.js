import Track from "../modeles/Track";

export function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export function formatSpotifyTrack(dataSpotifyToFormat) {
    return new Track(dataSpotifyToFormat)
    //    return dataSpotifyToFormat.data.tracks.items
}

export function formatDeezerTrack(dataDeezerToFormat) {

/*    const items = dataDeezerToFormat.data.data
    return items.map((item) => {
        return {
            id: item.id,
            name: item.title,
            album: {
                id: item.album.id,
                name: item.album.title,
                images: [
                    {url: item.album.cover_big},
                    {url: item.album.cover_medium},
                    {url: item.album.cover_small},
                ],
                artists: [{
                    id: item.artist.id,
                    name: item.artist.name,
                }],
            },
            artists: [{
                id: item.artist.id,
                name: item.artist.name,
            }]
        }
    })*/
    return new Track({
        id: dataDeezerToFormat.id,
        name: dataDeezerToFormat.title,
        album: {
            id: dataDeezerToFormat.album.id,
            name: dataDeezerToFormat.album.title,
            images: [
                {url: dataDeezerToFormat.album.cover_big},
                {url: dataDeezerToFormat.album.cover_medium},
                {url: dataDeezerToFormat.album.cover_small},
            ],
            artists: [{
                id: dataDeezerToFormat.artist.id,
                name: dataDeezerToFormat.artist.name,
            }],
        },
        artists: [{
            id: dataDeezerToFormat.artist.id,
            name: dataDeezerToFormat.artist.name,
        }]
    })
}
