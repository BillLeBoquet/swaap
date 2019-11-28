export const SEARCH_REQUEST = 'app/auth/SEARCH_REQUEST'
export const TOGGLE_SEARCHBAR = 'app/auth/SEARCHBAR'
export const DISPLAY_TRACKS = 'app/auth/TRACKS'
export const SELECT_API = 'app/auth/SELECT_API'
export const RESET_SEARCH = 'app/auth/RESET_SEARCH'

export const toggleSearch = () => ({
    type: TOGGLE_SEARCHBAR,
})

export const requestSearchTrack = (search) => ({
    type: SEARCH_REQUEST,
    search,
})

export const displayTracks = (tracks) => ({
    type: DISPLAY_TRACKS,
    tracks,
})

export const selectApi = (selection) =>  ({
    type: SELECT_API,
    selection,
})

export function resetSearch() {
    return {
        type: RESET_SEARCH,
    }
}

export default function reducer(
    state = {
        searchBar: false,
        searchValue: '',
        tracks: {
            dataDeezer: [],
            dataSpotify: [],
        },
        api: 1},
    action,
) {
    switch (action.type) {
        case TOGGLE_SEARCHBAR:
            return {
                ...state,
                searchBar: !state.searchBar,
                searchValue: '',
                isDataAvailable: false,
            }
        case SEARCH_REQUEST:
            return {
                ...state,
                searchValue: action.search,
            }
        case DISPLAY_TRACKS:
            return {
                ...state,
                tracks: {
                    dataDeezer: action.tracks.dataDeezer,
                    dataSpotify: action.tracks.dataSpotify,
                },
                isDataAvailable: action.tracks.dataSpotify.length > 0 || action.tracks.dataDeezer.data != null
            }
        case SELECT_API:
            return {
                ...state,
                api: action.selection,
            }
        case RESET_SEARCH:
            return {
                ...state,
                searchValue: '',
                tracks: {
                    dataDeezer: [],
                    dataSpotify: [],
                },
                api: 1
            }
        default:
            return state
    }
}