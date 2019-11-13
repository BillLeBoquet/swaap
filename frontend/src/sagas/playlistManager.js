import {put, takeEvery} from 'redux-saga/effects'
import {ADD_TO_PLAYLIST, addResultToPlaylist,toggleAddTrack} from "../modules/playlistManager";
import axios from 'axios';
import {formatDeezerTrack, formatSpotifyTrack} from "../util/utils";

async function manageAdvancedSearch(url, artist, title, album) {
    let res = await axios.get(`${url}?artist=${artist}&title=${title}&album=${album}&type=track`, {})
        .catch(function (error) {
            console.error(error)
        })
    if(res === null){
        res = await axios.get(`${url}?artist=${artist}&title=${title}&album=${album}&type=track`, {})
            .catch(function (error) {
                console.error(error)
            })
    }
    if (res === null) {
        return false
    }
    return res
}

function* addTrackToPlaylist(input) {
    put(toggleAddTrack())
    const {track, api} = input
    const artist = track.artists[0].name
    const title = track.name
    const album = track.album.name
    let res, tracksFromApis

    switch(api) {
        case 1:
            res = yield manageAdvancedSearch('/api/deezer/search/advanced', artist, title, album)
            if(res === false) {
                tracksFromApis = {}
            } else{
                tracksFromApis = {
                    spotify: track,
                    deezer: formatDeezerTrack(res.data.data[0]),
                }
            }

            break;
        case 2:
            res = yield manageAdvancedSearch('/api/spotify/search/advanced', artist, title, album)
            if(res === false) {
                tracksFromApis = {}
            } else {
                tracksFromApis = {
                    spotify: formatSpotifyTrack(res.data[0]),
                    deezer: track,
                }
            }
            break;
        default:
            tracksFromApis = {
                spotify: {},
                deezer: {},
            }
    }
    yield put(addResultToPlaylist(tracksFromApis))
    put(toggleAddTrack())
}

export default function* manageAddPlaylist() {
    yield takeEvery(ADD_TO_PLAYLIST, addTrackToPlaylist);
}