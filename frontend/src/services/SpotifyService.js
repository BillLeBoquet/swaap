import axios from "axios";

class SpotifyService {
    async searchTrackFromCompleteRequestInBean(requestInBean) {
        const {title, album, artist} = requestInBean

        const url = `/api/spotify/search?artist=${artist}&title=${title}&album=${album}&type=track`

        const {data} = axios.get(url, {}).catch(function (error) {

        })

        return data
    }
}

export default SpotifyService