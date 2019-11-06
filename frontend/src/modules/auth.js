export const LOGIN = 'app/auth/LOGIN'
export const LOGIN_REQUEST = 'app/auth/LOGIN_REQUEST'
export const LOGOUT = 'app/auth/LOGOUT'
export const TOGGLE_LOADING = 'app/auth/LOADING'

export const loginUser = user => ({
    type: LOGIN,
    user,
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

export default function reducer(
    state = {user: null, loading: false},
    action,
) {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                user: action.user,
            }
        case LOGOUT:
            return {
                ...state,
                user: null,
            }
        case TOGGLE_LOADING:
            return {
                ...state,
                loading: !state.loading,
            }
        default:
            return state
    }
}