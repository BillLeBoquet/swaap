import {put, takeEvery} from 'redux-saga/effects'
import {
    ADD_TO_PLAYLIST,
    IMPORT_PLAYLIST,
    addResultToPlaylist,
    convertPlaylistProgress, GET_SAVED_PLAYLIST
} from "../modules/playlistManager";
import RequestInBean from "../modeles/RequestInBean";
import DeezerService from "../services/DeezerService";
import SpotifyService from "../services/SpotifyService";

async function getPlaylistTracksFromApi(input, spotifyService, deezerService) {
    switch (input.api) {
        case 1:
            return spotifyService.getPlaylistTracks({
                url: `/api/spotify/get/playlists/${input.id}`,
                limit: 100,
                offset: input.length,
            })
        case 2:
            return deezerService.getPlaylistTracks({
                url: `/api/deezer/get/playlists/${input.id}`,
                limit: 100,
                offset: input.length,
            })
        default:
            return null
    }
}

async function getPlaylistFullFromApi(input, spotifyService, deezerService) {
    switch (input.api) {
        case 1:
            return spotifyService.getPlaylistFull(`/api/spotify/get/playlists/${input.id}`)
        case 2:
            return deezerService.getPlaylistFull(`/api/deezer/get/playlist/${input.id}`)
        default:
            return null
    }
}

function* importSavedPlaylistFromId(input) {
    const {tracks, id, playlistName, image} = input.savedPlaylist
    const total = tracks.length
    const spotifyService = new SpotifyService()
    const deezerService = new DeezerService()

    let playlist = []

    for(let index in tracks) {
        let track = tracks[index]
        const dataSpotify = yield spotifyService.getTrackFromId(track.spotify)
        const dataDeezer = yield deezerService.getTrackFromId(track.deezer)

        playlist = [
            ...playlist,
            {
                dataDeezer,
                dataSpotify,
            }
        ]

        yield put(convertPlaylistProgress({
            playlist,
            progress: (tracks.length / total) * 100,
            id,
            playlistName,
            image,
        }))
    }

    yield put(convertPlaylistProgress({
        playlist,
        progress: 100,
        id,
        playlistName,
        image,
    }))

}

function* addTrackToPlaylist(input) {
    //yield put(toggleAddTrack())

    const {track, api} = input
    const artists = track.artists
    const title = track.name
    const album = track.album.name

    const requestInBean = new RequestInBean(title, album, artists)
    let tracksFromApis

    switch(api) {
        case 1:
            const deezer = yield new DeezerService().searchTrackFromCompleteRequestInBean(requestInBean)

            if(deezer === false) {
                tracksFromApis = {}
                //TODO : manage missing Track from Deezer
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
                //TODO : manage missing Track from Spotify
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
}

function* importPlaylistFromId(input) {
    const {api, id, image} = input.api
    const spotifyService = new SpotifyService()
    const deezerService = new DeezerService()

    let res = {
        items: [],
        total: 1,
    }
    let requestInBean

    let playlist = []

    const playlistFull = yield getPlaylistFullFromApi({
        api,
        id,
    }, spotifyService, deezerService)

    let tracks = playlistFull.items
    const {total, playlistName} = playlistFull


    while(tracks.length < total){
        res = yield getPlaylistTracksFromApi({
            api,
            length: tracks.length,
            id,
        }, spotifyService, deezerService)
        tracks = [
            ...tracks,
            ...res.items,
        ]
    }

    switch (api){
        case 1 :
            for(const index in tracks) {
                const track = tracks[index]

                requestInBean = new RequestInBean(track.name, track.album, track.artists)
                const dataDeezer = yield new DeezerService().searchTrackFromCompleteRequestInBean(requestInBean)
                if(dataDeezer) {
                    playlist = [
                        ...playlist,
                        {
                            dataDeezer,
                            dataSpotify: track,
                        }
                    ]
                    yield put(convertPlaylistProgress({
                        playlist,
                        progress: (playlist.length / total) * 100,
                        id,
                        playlistName,
                        image,
                    }))
                }
            }
            break;
        case 2 :
            for(const index in tracks) {
                const track = tracks[index]

                requestInBean = new RequestInBean(track.name, track.album, track.artists)
                const dataSpotify = yield new SpotifyService().searchTrackFromCompleteRequestInBean(requestInBean)
                if(dataSpotify) {
                    playlist = [
                        ...playlist,
                        {
                            dataSpotify,
                            dataDeezer: track,
                        }
                    ]
                    yield put(convertPlaylistProgress({
                        playlist,
                        progress: (playlist.length / total) * 100,
                        id,
                        playlistName,
                        image,
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
        id,
        playlistName,
        image,
    }))
}

export default function* manageAddPlaylist() {
    yield takeEvery(ADD_TO_PLAYLIST, addTrackToPlaylist);
    yield takeEvery(IMPORT_PLAYLIST, importPlaylistFromId);
    yield takeEvery(GET_SAVED_PLAYLIST, importSavedPlaylistFromId)
}