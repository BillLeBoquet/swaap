import {formatDeezerTrack} from "../util/utils";
import axios from "axios";

function formatData(data) {
    try {
        return data.data.data.map((item) => formatDeezerTrack(item))
    } catch (e) {
        return []
    }
}

class DeezerService {

    async searchTrackFromCompleteRequestInBean(requestInBean) {
        const {title, album, artist} = requestInBean

        let res = await axios.get(`/api/deezer/search/advanced?artist=${artist}&title=${title}&album=${album}&type=track`, {})
            .catch(function (error) {
                console.error(error)
            })
        if(res === null){
            res = await axios.get(`/api/deezer/search/advanced?artist=${artist}&title=${title}&type=track`, {})
                .catch(function (error) {
                    console.error(error)
                })
        }

        const data = formatData(res)
        return data.length === 0 ? [] : data[0]
    }

    async searchTrackBasic(searchValue) {
        const res = await axios.get(`/api/deezer/search?q=${searchValue}&type=track`, {}).catch(function (error) {
            console.error(error);
        });

        return formatData(res)
    }
}

export default DeezerService