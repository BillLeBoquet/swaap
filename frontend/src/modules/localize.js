import strings from "../util/token";

export const CHANGE_LOCALE = 'app/localize/CHANGE_LOCALE'

function changeLocaleBody(locale) {
    switch (locale) {
        case 1 :
            return {
                token: 'fr',
                flag: '/dist/assets/media/flags/019-france.svg',
            }
        case 2 :
            return {
                token: 'en',
                flag: '/dist/assets/media/flags/020-flag.svg',
            }
        default:
            return {
                token: 'fr',
                flag: '/dist/assets/media/flags/019-france.svg',
            }
    }
}

export const changeLocale = (locale) => ({
    type: CHANGE_LOCALE,
    locale,
})

export default function reducer(
    state = {
        token: strings,
        flag: '/dist/assets/media/flags/019-france.svg',
    },
    action,
) {
    switch (action.type) {
        case CHANGE_LOCALE:
            const locale = changeLocaleBody(action.locale)
            state.token.setLanguage(locale.token)
            return {
                ...state,
                flag: locale.flag,
            }
        default:
            return state
    }
}