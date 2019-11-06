import {put, takeEvery} from 'redux-saga/effects'
import {LOGIN_REQUEST, loginUser, toggleLoading} from "../modules/auth";
import axios from 'axios';
import {sleep} from "../util/utils";

function* requestLoginUser() {
    yield put(toggleLoading());
    const {data} = yield axios.post('/api/user', {}).catch(function (error) {
        console.log(error);
    });
    yield sleep(200);
    yield put(loginUser(data));
    yield put(toggleLoading());
}

export default function* authenticationSaga() {
    yield takeEvery(LOGIN_REQUEST, requestLoginUser);
}