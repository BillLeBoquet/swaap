export const LOGIN = 'app/auth/LOGIN'
export const LOGIN_REQUEST = 'app/auth/LOGIN_REQUEST'
export const LOGOUT = 'app/auth/LOGOUT'
export const TOGGLE_LOADING = 'app/auth/LOADING'
export const USER_DETAILS = 'app/auth/USER_DETAILS'

export const loginUser = (userInfo) => ({
    type: LOGIN,
    user: userInfo.user,
    playlistsDeezer: userInfo.playlistsDeezer,
    playlistsSpotify: userInfo.playlistsSpotify,
    playlistsSaved: userInfo.playlistsSaved,
})

export const logoutUser = () => ({
    type: LOGOUT,
})

export const toggleLoading = () => ({
    type: TOGGLE_LOADING,
})

export const requestLoginUser = () => ({
    type: LOGIN_REQUEST,
})

export const detailUser = () => ({
    type: USER_DETAILS,
})

export default function reducer(
    state = {
        user: null,
        loading: false,
        showUserDetails: false,
        playlistsDeezer: [],
        playlistsSpotify: [],
        playlistsSaved: [],
        avatar: "'/dist/assets/media/users/default.jpg'"
    },
    action,
) {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                user: action.user,
                avatar: action.user.avatar,
                playlistsDeezer: action.playlistsDeezer,
                playlistsSpotify: action.playlistsSpotify,
                playlistsSaved: action.playlistsSaved,
            }
        case LOGOUT:
            return {
                ...state,
                user: null,
                avatar: "'/dist/assets/media/users/default.jpg'",
                showUserDetails: false,
                playlistsDeezer: [],
                playlistsSpotify: [],
                playlistsSaved: [],
            }
        case TOGGLE_LOADING:
            return {
                ...state,
                loading: !state.loading,
            }
        case USER_DETAILS:
            return {
                ...state,
                showUserDetails: !state.showUserDetails,
            }
        default:
            return state
    }
}