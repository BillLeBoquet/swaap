import {put, takeEvery} from 'redux-saga/effects'
import {
    ADD_TO_PLAYLIST,
    IMPORT_PLAYLIST,
    addResultToPlaylist,
    convertPlaylistProgress
} from "../modules/playlistManager";
import RequestInBean from "../modeles/RequestInBean";
import DeezerService from "../services/DeezerService";
import SpotifyService from "../services/SpotifyService";

async function getPlaylistFromApi(input, spotifyService, deezerService) {
    console.log('input')
    console.log(input)
    switch (input.api) {
        case 1:
            return spotifyService.getPlaylist({
                url: `/api/spotify/get/playlists/${input.id}/tracks`,
                limit: 100,
                offset: input.length,
            })
        case 2:
            return deezerService.getPlaylist({
                url: `/api/deezer/get/playlists/${input.id}/tracks`,
                limit: 100,
                offset: input.length,
            })
        default:
            return null
    }
}

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

function* importPlaylistFromId(input) {
    const {api, id} = input.api
    const spotifyService = new SpotifyService()
    const deezerService = new DeezerService()

    let res = {
        items: [],
        total: 1,
    }
    let tracks = []
    let requestInBean

    let playlist = {
        spotify: [],
        deezer: [],
    }

    do{
        res = yield getPlaylistFromApi({
            api,
            length: tracks.length,
            id,
        }, spotifyService, deezerService)
        tracks = [
            ...tracks,
            ...res.items,
        ]
    } while(tracks.length < res.total);

    switch (api){
        case 1 :
            for(const index in tracks) {
                const track = tracks[index]

                requestInBean = new RequestInBean(track.name, track.album, track.artists)
                const deezer = yield new DeezerService().searchTrackFromCompleteRequestInBean(requestInBean)
                if(deezer) {
                    playlist = {
                        deezer: [
                            ...playlist.deezer,
                            deezer,
                        ],
                        spotify: [
                            ...playlist.spotify,
                            track,
                        ]
                    }
                    yield put(convertPlaylistProgress({
                        playlist,
                        progress: (playlist.deezer.length / res.total) * 100,
                    }))
                }
            }
            break;
        case 2 :
            for(const index in tracks) {
                const track = tracks[index]

                requestInBean = new RequestInBean(track.name, track.album, track.artists)
                const spotify = yield new SpotifyService().searchTrackFromCompleteRequestInBean(requestInBean)
                if(spotify) {
                    playlist = {
                        deezer: [
                            ...playlist.deezer,
                            track,
                        ],
                        spotify: [
                            ...playlist.spotify,
                            spotify,
                        ]
                    }
                    yield put(convertPlaylistProgress({
                        playlist,
                        progress: (playlist.spotify.length / res.total) * 100,
                    }))
                }
            }
            break;
        default:
            //manage error
            break;
    }
    yield put(convertPlaylistProgress({
        playlist,
        progress: 100,
    }))
}

/*function* importPlaylistFromTracks(input) {
    const {api,track} = input

    let tracksFromApis, requestInBean
    switch (api){
        case 1 :
                requestInBean = new RequestInBean(track.title, track.album, track.artist)
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
        case 2 :
                requestInBean = new RequestInBean(track.title, track.album, track.artist)
                const spotify = yield new SpotifyService().searchTrackFromCompleteRequestInBean(requestInBean)


                if(spotify === false) {
                    tracksFromApis = {}
                } else{
                    tracksFromApis = {
                        spotify,
                        deezer: track,
                    }
                }

            break;
        default :
            tracksFromApis = {
                spotify: [],
                deezer: [],
            }
    }
    yield put(addResultToPlaylist(tracksFromApis))
}*/

export default function* manageAddPlaylist() {
    yield takeEvery(ADD_TO_PLAYLIST, addTrackToPlaylist);
    //yield takeEvery(GET_PLAYLIST, importPlaylistFromTracks);
    yield takeEvery(IMPORT_PLAYLIST, importPlaylistFromId);
}