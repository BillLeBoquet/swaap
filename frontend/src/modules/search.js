export const SEARCH_REQUEST = 'app/auth/SEARCH_REQUEST'
export const TOGGLE_SEARCHBAR = 'app/auth/SEARCHBAR'
export const DISPLAY_TRACKS = 'app/auth/TRACKS'

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

export default function reducer(
    state = {searchBar: false,
        searchValue: '',
        tracks: {
            dataDeezer: {},
            dataSpotify: {},
        }},
    action,
) {
    switch (action.type) {
        case TOGGLE_SEARCHBAR:
            return {
                ...state,
                searchBar: !state.searchBar,
                searchValue: '',
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
            }
        default:
            return state
    }
}