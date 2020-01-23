export const ADD_TO_PLAYLIST = 'app/playlistManager/ADD_TO_PLAYLIST'
export const TOGGLE_ADD_TRACK = 'app/playlistManager/TOGGLE_ADD_TRACK'
export const ADD_TRACK = 'app/playlistManager/ADD_TRACK'
export const REMOVE_TRACK = 'app/playlistManager/REMOVE_TRACK'
export const UPDATE_PLAYLIST_NAME = 'app/playlistManager/UPDATE_PLAYLIST_NAME'
export const IMPORT_PLAYLIST = 'app/playlistManager/IMPORT_PLAYLIST'
export const CONVERT_PLAYLIST_PROGRESS = 'app/playlistManager/CONVERT_PLAYLIST_PROGRESS'
export const RESET_PLAYLIST = 'app/playlistManager/RESET_PLAYLIST'
export const GET_SAVED_PLAYLIST = 'app/playlistManager/GET_SAVED_PLAYLIST'
export const SAVE_NEW_PLAYLIST = 'app/playlistManager/SAVE_NEW_PLAYLIST'

function removeItemFromPlaylist(playlist, action) {
    const {api, id} = action
    switch (api) {
        case 1:
            return playlist.filter((tuple) => tuple.dataSpotify.id !== id)
        case 2:
            return playlist.filter((tuple) => tuple.dataDeezer.id !== id)
        default:
            return playlist
    }
}

function addNewCorrelation(tuple, trackCorrelation) {
    const newId = tuple.dataSpotify
    const find = trackCorrelation.find((tuple) => tuple.dataSpotify === newId)

    return find !== undefined
        ? trackCorrelation
        : [
            ...trackCorrelation,
            tuple,
        ]
}

export function getSavedPlaylist(savedPlaylist) {
    return {
        type: GET_SAVED_PLAYLIST,
        savedPlaylist,
    }
}

export const addTrackToPlaylist = (input) => {
    return {
        type: ADD_TO_PLAYLIST,
        api: input.api,
        track: input.track,
        trackCorrelation: input.trackCorrelation,
    }
}

export const addResultToPlaylist = (apis) => ({
    type: ADD_TRACK,
    apis,
})


export const removeResultFromPlaylilst = (input) => ({
    type: REMOVE_TRACK,
    id: input.id,
    api: input.api,

})

export const getPlaylist = (api) => ({
    type: IMPORT_PLAYLIST,
    api,
})

export const convertPlaylistProgress = (playlist) => ({
    type: CONVERT_PLAYLIST_PROGRESS,
    playlist,
})

export const updatePlaylistName = (input) => ({
    type: UPDATE_PLAYLIST_NAME,
    input,
})

export function resetPlaylist() {
    return {
        type: RESET_PLAYLIST,
    }
}

export function saveNewPlaylist(input) {
    return {
        type: SAVE_NEW_PLAYLIST,
        input,
    }
}

export default function reducer(
    state = {
        loadingAddTracks: false,
        playlists: [],
        progressBar: 0,
        playlistId: 0,
        playlistName: '',
        playlistImage: '',
        trackCorrelation: [],
    },
    action,
) {
    switch (action.type) {
        case ADD_TO_PLAYLIST:
            return {
                ...state,
            }
        case ADD_TRACK:
            const newTrackCorrelation = addNewCorrelation({
                    dataSpotify :  action.apis.spotify.id,
                    dataDeezer : action.apis.deezer.id,
                }, state.trackCorrelation)
            return {
                ...state,
                playlists : [
                    ...state.playlists,
                    {
                        dataSpotify :  action.apis.spotify,
                        dataDeezer : action.apis.deezer,
                    }
                ],
                trackCorrelation : newTrackCorrelation,
                loadingAddTrack: false,
                playlistImage: state.playlistImage === '' ? action.apis.spotify.album.image : state.playlistImage
            }
        case REMOVE_TRACK:
            const newPlaylist = removeItemFromPlaylist(state.playlists, action)
            return {
                ...state,
                playlists: newPlaylist,
            }
        case TOGGLE_ADD_TRACK:
            return {
                ...state,
                loadingAddTrack: !state.loadingAddTrack,
           }
        case CONVERT_PLAYLIST_PROGRESS:
            return {
                ...state,
                progressBar: action.playlist.progress,
                playlists: action.playlist.playlist,
                playlistId: action.playlist.id,
                playlistName: action.playlist.playlistName,
                playlistImage: action.playlist.image,
            };
        case UPDATE_PLAYLIST_NAME:
            return {
                ...state,
                playlistName: action.input,
            };
        case RESET_PLAYLIST:
            return {
                ...state,
                playlists: [],
                progressBar: 0,
                playlistId: 0,
                playlistName: '',
                playlistImage: '',
            }
        default:
            return state
    }
}