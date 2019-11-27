import {put, takeEvery} from 'redux-saga/effects'
import {LOGIN_REQUEST, loginUser, toggleLoading} from "../modules/auth";
import UserService from "../services/UserService";
import {sleep} from "../util/utils";
import Playlist from "../modeles/Playlist";

function* requestLoginUser() {
    yield put(toggleLoading());
    const user = yield new UserService().getSimpleUserForTest()
    yield sleep(200);
    yield put(loginUser({
        user,
        playlists: [
            new Playlist(
                {
                    name: 'Abigail',
                    api: 1,
                    id: '0Q3X3Gzo8JCnjG03Hkhcar',
                }
            ),
            new Playlist(
                {
                    name: 'Bain moussant',
                    api: 2,
                    id: '908622995',
                }
            ),
            new Playlist(
                {
                    name: 'Four Chord Song',
                    api: 1,
                    id: '6mS5EpeHaEh2AB6iRdTpPR',
                }
            ),
            new Playlist(
                {
                    name: 'Deezer Hits',
                    api: 2,
                    id: '1363560485',
                }
            ),
            new Playlist(
                {
                    name: 'TestSpotify',
                    api: 1,
                    id: '6S68vzLdJuad4UTULCKZfj',
                }
            ),
        ]
    }));
    yield put(toggleLoading());
}

export default function* authenticationSaga() {
    yield takeEvery(LOGIN_REQUEST, requestLoginUser);
}