export const ADD_TO_PLAYLIST = 'app/playlistManager/ADD_TO_PLAYLIST'
export const TOGGLE_ADD_TRACK = 'app/playlistManager/TOGGLE_ADD_TRACK'
export const ADD_TRACK = 'app/playlistManager/ADD_TRACK'
export const REMOVE_TRACK = 'app/playlistManager/REMOVE_TRACK'
export const UPDATE_PLAYLIST_NAME = 'app/playlistManager/UPDATE_PLAYLIST_NAME'
export const IMPORT_PLAYLIST = 'app/playlistManager/IMPORT_PLAYLIST'
export const IMPORT_PLAYLIST_PROGRESS = 'app/playlistManager/IMPORT_PLAYLIST_PROGRESS'
export const CONVERT_PLAYLIST_PROGRESS = 'app/playlistManager/CONVERT_PLAYLIST_PROGRESS'

export const IMPORT = 'IMPORT'
export const CONVERSION = 'CONVERSION'

function isPlaylistEmpty(apis) {
    return apis.spotify == null || apis.deezer == null || apis.spotify.length === 0 || apis.deezer.length === 0
}

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


export const removeResultFromPlaylilst = (input) => ({
    type: REMOVE_TRACK,
    id: input.id,
    api: input.api,

})

export const toggleAddTrack = () => ({
    type: TOGGLE_ADD_TRACK,
})

export const getPlaylist = (api) => ({
    type: IMPORT_PLAYLIST,
    api,
})

export const importPlaylistProgress = (playlist) => ({
    type: IMPORT_PLAYLIST_PROGRESS,
    playlist,
})

export const convertPlaylistProgress = (playlist) => ({
    type: CONVERT_PLAYLIST_PROGRESS,
    playlist,
})

export const updatePlaylistName = (input) => ({
    type: UPDATE_PLAYLIST_NAME,
    input,
})

export default function reducer(
    state = {
        loadingAddTracks: false,
        playlists: [],
        isPlaylistEmpty: true,
        progressBar: 100,
        playlistId: 1,
        playlistName: '',
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
                playlists : [
                    ...state.playlists,
                    {
                        dataSpotify :  action.apis.spotify,
                        dataDeezer : action.apis.deezer,
                    }
                ],
                isPlaylistEmpty: isPlaylistEmpty(action.apis),
                loadingAddTrack: false,
            }
        case REMOVE_TRACK:
            const newPlaylist = removeItemFromPlaylist(state.playlists, action)
            return {
                ...state,
                playlists: newPlaylist,
                isPlaylistEmpty: (newPlaylist.length === 0),
            }
        case TOGGLE_ADD_TRACK:
            return {
                ...state,
                loadingAddTrack: !state.loadingAddTrack,
           }
        case IMPORT_PLAYLIST_PROGRESS:
            return {
                ...state,
                progressBar: action.playlist.progress,
            };
        case CONVERT_PLAYLIST_PROGRESS:
            return {
                ...state,
                progressBar: action.playlist.progress,
                isPlaylistEmpty: action.playlist.playlist.length === 0,
                playlists: action.playlist.playlist,
                playlistId: action.playlist.id,
                playlistName: action.playlist.playlistName,
            };
            case UPDATE_PLAYLIST_NAME:
            return {
                ...state,
                playlistName: action.input,
            };
        //TODO : case for import playlist
        default:
            return state
    }
}