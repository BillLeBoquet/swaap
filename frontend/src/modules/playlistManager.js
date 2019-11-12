import {formatDeezerTrack, formatSpotifyTrack} from "../util/utils";

export const ADD_TO_PLAYLIST = 'app/auth/ADD_TO_PLAYLIST'
//export const TOGGLE_ADD_TRACK = 'app/auth/TOGGLE_ADD_TRACK'
export const ADD_TRACK = 'app/auth/ADD_TRACK'

function isPlaylistEmpty(apis) {
    return apis.spotify == null || apis.deezer == null || apis.spotify.length === 0 || apis.deezer.length === 0
}

export const addTrackToPlaylist = (input) => {
    return {
        type: ADD_TO_PLAYLIST,
        api: input.api,
        track: input.track,
    }
}

export const addResultToPlaylist = (apis) => ({
    type: ADD_TRACK,
    apis
})

//export const toggleAddTrack = () => ({
//    type: TOGGLE_ADD_TRACK,
//})

export default function reducer(
    state = {
        //loadingAddTracks: false,
        playlists: {
            dataDeezer: [],
            dataSpotify: [],
        },
        isPlaylistEmpty: true,
    },
    action,
) {
    switch (action.type) {
        case ADD_TO_PLAYLIST:
            return {
                ...state,
            }
        case ADD_TRACK:
            return {
                ...state,
                playlists: {
                    dataDeezer: [...state.playlists.dataDeezer, action.apis.deezer],
                    dataSpotify: [...state.playlists.dataSpotify, action.apis.spotify],
                },
                isPlaylistEmpty: isPlaylistEmpty(action.apis),
            }
        //case TOGGLE_ADD_TRACK:
        //    return {
        //        ...state,
        //        loadingAddTrack: !state.loadingAddTrack,
        //   }

        default:
            return state
    }
}