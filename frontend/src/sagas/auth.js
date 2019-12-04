import {put, takeEvery} from 'redux-saga/effects'
import {LOGIN_REQUEST, loginUser, toggleLoading} from "../modules/auth";
import UserService from "../services/UserService";
import {sleep} from "../util/utils";
import Playlist from "../modeles/Playlist";
import PlaylistSaved from "../modeles/PlaylistSaved";

function* requestLoginUser() {
    yield put(toggleLoading());
    const user = yield new UserService().getSimpleUserForTest()
    yield sleep(200);
    yield put(loginUser({
        user,
        playlistsDeezer: [
            new Playlist(
                {
                    name: 'Bain moussant',
                    api: 2,
                    id: '908622995',
                    image: 'https://e-cdns-images.dzcdn.net/images/playlist/f50bfcf1df80d845b83a6213a61d6aa8/250x250-000000-80-0-0.jpg',
                }
            ),
            new Playlist(
                {
                    name: 'Deezer Hits',
                    api: 2,
                    id: '1363560485',
                    image: 'https://e-cdns-images.dzcdn.net/images/playlist/f454e1f4859261051b05308bcb0fa4b8/250x250-000000-80-0-0.jpg',
                }
            ),
        ],
        playlistsSpotify: [
            new Playlist(
                {
                    name: 'Abigail',
                    api: 1,
                    id: '0Q3X3Gzo8JCnjG03Hkhcar',
                    image: 'https://mosaic.scdn.co/640/ab67616d0000b2731be40e44db112e123e5e8b51ab67616d0000b273673d6a2831f72e48745ea80dab67616d0000b273d06c36953d960e241f1522f8ab67616d0000b273df2c62edb3694b4abe6280ae',
                }
            ),
            new Playlist(
                {
                    name: 'Four Chord Song',
                    api: 1,
                    id: '6mS5EpeHaEh2AB6iRdTpPR',
                    image: 'https://mosaic.scdn.co/640/ab67616d0000b2730f6ce5c138493ac768d9afc8ab67616d0000b273105f043a4f470cf58cc01ccfab67616d0000b273ea30aa7dbbd170c53a087c66b413df73542b023c6598f716f2093f0e305daa80',
                }
            ),
            new Playlist(
                {
                    name: 'TestSpotify',
                    api: 1,
                    id: '6S68vzLdJuad4UTULCKZfj',
                    image: 'https://i.scdn.co/image/ab67616d0000b2736ff8bc258e3ebc835ffe14ca',
                }
            ),
        ],
        playlistsSaved: [
            new PlaylistSaved(
                {
                    name: "Hello_world",
                    id: 1,
                    tracks: [
                        {
                            spotify: "1DMEzmAoQIikcL52psptQL",
                            deezer: "572537052",
                        },
                        {
                            spotify: "2QTDuJIGKUjR7E2Q6KupIh",
                            deezer: "119437636",
                        },
                        {
                            spotify: "0ScgmigVOJr2mFsAtwFQmz",
                            deezer: "2657826",
                        },
                        {
                            spotify: "1NZWiuy0mlnsrcYL2dhKt6",
                            deezer: "104623136",
                        },
                    ],
                    image: "https://i.ytimg.com/vi/zecueq-mo4M/maxresdefault.jpg",
                }
            ),
            new PlaylistSaved(
                {
                    name: "Hello_world",
                    id: 2,
                    tracks: [
                        {
                            spotify: "1DMEzmAoQIikcL52psptQL",
                            deezer: "572537052",
                        },
                        {
                            spotify: "2QTDuJIGKUjR7E2Q6KupIh",
                            deezer: "119437636",
                        },
                        {
                            spotify: "0ScgmigVOJr2mFsAtwFQmz",
                            deezer: "2657826",
                        },
                        {
                            spotify: "1NZWiuy0mlnsrcYL2dhKt6",
                            deezer: "104623136",
                        },
                    ],
                    image: "https://i.ytimg.com/vi/zecueq-mo4M/maxresdefault.jpg",
                }
            ),
            new PlaylistSaved(
                {
                    name: "Hello_world",
                    id: 3,
                    tracks: [
                        {
                            spotify: "1DMEzmAoQIikcL52psptQL",
                            deezer: "572537052",
                        },
                        {
                            spotify: "2QTDuJIGKUjR7E2Q6KupIh",
                            deezer: "119437636",
                        },
                        {
                            spotify: "0ScgmigVOJr2mFsAtwFQmz",
                            deezer: "2657826",
                        },
                        {
                            spotify: "1NZWiuy0mlnsrcYL2dhKt6",
                            deezer: "104623136",
                        },
                    ],
                    image: "https://i.ytimg.com/vi/zecueq-mo4M/maxresdefault.jpg",
                }
            ),
            new PlaylistSaved(
                {
                    name: "Hello_world",
                    id: 4,
                    tracks: [
                        {
                            spotify: "1DMEzmAoQIikcL52psptQL",
                            deezer: "572537052",
                        },
                        {
                            spotify: "2QTDuJIGKUjR7E2Q6KupIh",
                            deezer: "119437636",
                        },
                        {
                            spotify: "0ScgmigVOJr2mFsAtwFQmz",
                            deezer: "2657826",
                        },
                        {
                            spotify: "1NZWiuy0mlnsrcYL2dhKt6",
                            deezer: "104623136",
                        },
                    ],
                    image: "https://i.ytimg.com/vi/zecueq-mo4M/maxresdefault.jpg",
                }
            ),
            new PlaylistSaved(
                {
                    name: "Hello_world",
                    id: 5,
                    tracks: [
                        {
                            spotify: "1DMEzmAoQIikcL52psptQL",
                            deezer: "572537052",
                        },
                        {
                            spotify: "2QTDuJIGKUjR7E2Q6KupIh",
                            deezer: "119437636",
                        },
                        {
                            spotify: "0ScgmigVOJr2mFsAtwFQmz",
                            deezer: "2657826",
                        },
                        {
                            spotify: "1NZWiuy0mlnsrcYL2dhKt6",
                            deezer: "104623136",
                        },
                    ],
                    image: "https://i.ytimg.com/vi/zecueq-mo4M/maxresdefault.jpg",
                }
            ),
            new PlaylistSaved(
                {
                    name: "Hello_world",
                    id: 6,
                    tracks: [
                        {
                            spotify: "1DMEzmAoQIikcL52psptQL",
                            deezer: "572537052",
                        },
                        {
                            spotify: "2QTDuJIGKUjR7E2Q6KupIh",
                            deezer: "119437636",
                        },
                        {
                            spotify: "0ScgmigVOJr2mFsAtwFQmz",
                            deezer: "2657826",
                        },
                        {
                            spotify: "1NZWiuy0mlnsrcYL2dhKt6",
                            deezer: "104623136",
                        },
                    ],
                    image: "https://i.ytimg.com/vi/zecueq-mo4M/maxresdefault.jpg",
                }
            ),
            new PlaylistSaved(
                {
                    name: "Hello_world",
                    id: 7,
                    tracks: [
                        {
                            spotify: "1DMEzmAoQIikcL52psptQL",
                            deezer: "572537052",
                        },
                        {
                            spotify: "2QTDuJIGKUjR7E2Q6KupIh",
                            deezer: "119437636",
                        },
                        {
                            spotify: "0ScgmigVOJr2mFsAtwFQmz",
                            deezer: "2657826",
                        },
                        {
                            spotify: "1NZWiuy0mlnsrcYL2dhKt6",
                            deezer: "104623136",
                        },
                    ],
                    image: "https://i.ytimg.com/vi/zecueq-mo4M/maxresdefault.jpg",
                }
            ),
            new PlaylistSaved(
                {
                    name: "Hello_world",
                    id: 8,
                    tracks: [
                        {
                            spotify: "1DMEzmAoQIikcL52psptQL",
                            deezer: "572537052",
                        },
                        {
                            spotify: "2QTDuJIGKUjR7E2Q6KupIh",
                            deezer: "119437636",
                        },
                        {
                            spotify: "0ScgmigVOJr2mFsAtwFQmz",
                            deezer: "2657826",
                        },
                        {
                            spotify: "1NZWiuy0mlnsrcYL2dhKt6",
                            deezer: "104623136",
                        },
                    ],
                    image: "https://i.ytimg.com/vi/zecueq-mo4M/maxresdefault.jpg",
                }
            ),
            new PlaylistSaved(
                {
                    name: "Hello_world",
                    id: 9,
                    tracks: [
                        {
                            spotify: "1DMEzmAoQIikcL52psptQL",
                            deezer: "572537052",
                        },
                        {
                            spotify: "2QTDuJIGKUjR7E2Q6KupIh",
                            deezer: "119437636",
                        },
                        {
                            spotify: "0ScgmigVOJr2mFsAtwFQmz",
                            deezer: "2657826",
                        },
                        {
                            spotify: "1NZWiuy0mlnsrcYL2dhKt6",
                            deezer: "104623136",
                        },
                    ],
                    image: "https://i.ytimg.com/vi/zecueq-mo4M/maxresdefault.jpg",
                }
            ),
            new PlaylistSaved(
                {
                    name: "Hello_world",
                    id: 10,
                    tracks: [
                        {
                            spotify: "1DMEzmAoQIikcL52psptQL",
                            deezer: "572537052",
                        },
                        {
                            spotify: "2QTDuJIGKUjR7E2Q6KupIh",
                            deezer: "119437636",
                        },
                        {
                            spotify: "0ScgmigVOJr2mFsAtwFQmz",
                            deezer: "2657826",
                        },
                        {
                            spotify: "1NZWiuy0mlnsrcYL2dhKt6",
                            deezer: "104623136",
                        },
                    ],
                    image: "https://i.ytimg.com/vi/zecueq-mo4M/maxresdefault.jpg",
                }
            ),
            new PlaylistSaved(
                {
                    name: "Hello_world",
                    id: 11,
                    tracks: [
                        {
                            spotify: "1DMEzmAoQIikcL52psptQL",
                            deezer: "572537052",
                        },
                        {
                            spotify: "2QTDuJIGKUjR7E2Q6KupIh",
                            deezer: "119437636",
                        },
                        {
                            spotify: "0ScgmigVOJr2mFsAtwFQmz",
                            deezer: "2657826",
                        },
                        {
                            spotify: "1NZWiuy0mlnsrcYL2dhKt6",
                            deezer: "104623136",
                        },
                    ],
                    image: "https://i.ytimg.com/vi/zecueq-mo4M/maxresdefault.jpg",
                }
            ),
        ]
    }));
    yield put(toggleLoading());
}

export default function* authenticationSaga() {
    yield takeEvery(LOGIN_REQUEST, requestLoginUser);
}