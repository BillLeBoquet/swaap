import {put, takeEvery} from 'redux-saga/effects'
import {displayTracks, SEARCH_REQUEST} from "../modules/search";
import axios from 'axios';

function* requestSearchTrack(search) {
    let searchValue = search.search
    if (searchValue !== '') {
        const dataDeezer = yield axios.get(`/api/deezer/search/track?q=${searchValue}`, {}).catch(function (error) {
            console.log(error);
        });
        const dataSpotify = yield axios.get(`/api/spotify/search?q=${searchValue}&type=track`, {}).catch(function (error) {
            console.log(error);
        });
        if(dataSpotify !== null){
            const tracks = {
                dataDeezer,
                dataSpotify: dataSpotify.data.tracks.items,
            }
            yield put(displayTracks(tracks))
        }
    }
}

export default function* searchTrackSaga() {
    yield takeEvery(SEARCH_REQUEST, requestSearchTrack);
}