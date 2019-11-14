import {put, delay, takeLatest} from 'redux-saga/effects'
import {displayTracks, SEARCH_REQUEST} from "../modules/search";
import DeezerService from "../services/DeezerService";
import SpotifyService from "../services/SpotifyService";

function* requestSearchTrack(search) {
    yield delay(200)
    let searchValue = search.search
    if (searchValue !== '') {
        const dataSpotify = yield new SpotifyService().searchTrackBasic(searchValue)
        const dataDeezer = yield new DeezerService().searchTrackBasic(searchValue)

        const tracks = {
            dataDeezer,
            dataSpotify,
        }
        yield put(displayTracks(tracks))
    }
}

export default function* searchTrackSaga() {
    yield takeLatest(SEARCH_REQUEST, requestSearchTrack);
}