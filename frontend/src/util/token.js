import LocalizedStrings from 'react-localization';

//TODO read property file

let strings = new LocalizedStrings(
    {
        "en":{
            "english":"English",
            "french":"French",
            "search":"Search",
            "type_here":"Search for titles",
            "button_upload":"Upload",
            "button_close":"Close",
            "button_save_playlist":"Save playlist",
            "hi": "Hi, ",
            "profile": "Profile",
            "logout" : "Logout"
        },
        "fr": {
            "english":"Anglais",
            "french":"Français",
            "search":"Rechercher",
            "type_here":"Recherchez des titres",
            "button_upload":"Importer",
            "button_close":"Fermer",
            "button_save_playlist":"Sauvegarder ma playlist",
            "hi": "Salut ",
            "profile": "Profile",
            "logout" : "Déconnexion"
        }
    })

export default strings
