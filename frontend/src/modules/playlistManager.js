export const ADD_TO_PLAYLIST = 'app/auth/ADD_TO_PLAYLIST'
export const TOGGLE_ADD_TRACK = 'app/auth/TOGGLE_ADD_TRACK'
export const ADD_TRACK = 'app/auth/ADD_TRACK'
export const REMOVE_TRACK = 'app/auth/REMOVE_TRACK'

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

export default function reducer(
    state = {
        loadingAddTracks: false,
        playlists: [],
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

        default:
            return state
    }
}