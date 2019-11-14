import axios from "axios";
import {formatSpotifyTrack} from "../util/utils";

function formatData(data) {
    try {
        return data.data.tracks.items.map((item) => formatSpotifyTrack(item))
    } catch (e) {
        return []
    }
}

class SpotifyService {

    async searchTrackFromCompleteRequestInBean(requestInBean) {
        const {title, album, artist} = requestInBean

        let res = await axios.get(`/api/spotify/search/advanced?artist=${artist}&title=${title}&album=${album}&type=track`, {})
            .catch(function (error) {
                console.error(error)
            })
        if(res === null){
            res = await axios.get(`/api/spotify/search/advanced?artist=${artist}&title=${title}&type=track`, {})
                .catch(function (error) {
                    console.error(error)
                })
        }

        const data = formatData(res)
        return data.length === 0 ? [] : data[0]

    }

    async searchTrackBasic(searchValue) {
        const res = await axios.get(`/api/spotify/search?q=${searchValue}&type=track`, {}).catch(function (error) {
            console.error(error);
        });

        return formatData(res)
    }
}

export default SpotifyService