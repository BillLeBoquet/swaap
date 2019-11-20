import Track from "../modeles/Track";
import fs from 'fs'
import UserLite from "../modeles/UserLite";

export function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
export function formatSpotifyTrack(dataSpotifyToFormat) {
    return new Track(dataSpotifyToFormat)
}
export function formatDeezerTrack(dataDeezerToFormat) {
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
export function formatSimpleUser(userToFormat) {
    return new UserLite(userToFormat)
}

export async function readFile(path) {
    new Promise((resolve, reject) => {
        fs.readFile('./properties/access.json', 'utf8', (err, data) => {
            if (err)
                reject(err)
            resolve(JSON.parse(data))
        })
    })
}