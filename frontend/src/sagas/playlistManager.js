import {put, takeEvery} from 'redux-saga/effects'
import {ADD_TO_PLAYLIST, addResultToPlaylist} from "../modules/playlistManager";
import RequestInBean from "../modeles/RequestInBean";
import DeezerService from "../services/DeezerService";
import SpotifyService from "../services/SpotifyService";

function* addTrackToPlaylist(input) {
    //yield put(toggleAddTrack())
    const {track, api} = input
    const artist = track.artists[0].name
    const title = track.name
    const album = track.album.name

    const requestInBean = new RequestInBean(title, album, artist)
    let tracksFromApis

    switch(api) {
        case 1:
            const deezer = yield new DeezerService().searchTrackFromCompleteRequestInBean(requestInBean)

            if(deezer === false) {
                tracksFromApis = {}
            } else{
                tracksFromApis = {
                    spotify: track,
                    deezer,
                }
            }

            break;
        case 2:
            const spotify = yield new SpotifyService().searchTrackFromCompleteRequestInBean(requestInBean)

            if(spotify === false) {
                tracksFromApis = {}
            } else {
                tracksFromApis = {
                    spotify,
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
    //yield put(toggleAddTrack())
}

export default function* manageAddPlaylist() {
    yield takeEvery(ADD_TO_PLAYLIST, addTrackToPlaylist);
}