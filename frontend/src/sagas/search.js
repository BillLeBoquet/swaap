import {put, takeEvery} from 'redux-saga/effects'
import {displayTracks, SEARCH_REQUEST} from "../modules/search";
import {formatSpotifyTrack, formatDeezerTrack} from "../util/utils"
import axios from 'axios';

function* requestSearchTrack(search) {
    let searchValue = search.search
    if (searchValue !== '') {
        const dataDeezerToFormat = yield axios.get(`/api/deezer/search?q=${searchValue}`, {}).catch(function (error) {
            console.error(error);
        });
        const dataSpotifyToFormat = yield axios.get(`/api/spotify/search?q=${searchValue}&type=track`, {}).catch(function (error) {
            console.error(error);
        });

        const dataSpotify = dataSpotifyToFormat.data.tracks.items.map((item) => formatSpotifyTrack(item))
        const dataDeezer = dataDeezerToFormat.data.data.map((item) => formatDeezerTrack(item))

        if(dataSpotify !== null){
            const tracks = {
                dataDeezer,
                dataSpotify,
            }
            yield put(displayTracks(tracks))
        }
    }
}

export default function* searchTrackSaga() {
    yield takeEvery(SEARCH_REQUEST, requestSearchTrack);
}