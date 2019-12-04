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

        let res = await axios.get(`/api/deezer/search/advanced?artist=${artist.name}&title=${title}&album=${album.name}&type=track`, {})
            .catch(function (error) {
                console.error(error)
            })
        if(res === null){
            res = await axios.get(`/api/deezer/search/advanced?artist=${artist.name}&title=${title}&type=track`, {})
                .catch(function (error) {
                    console.error(error)
                })
        }

        const data = formatData(res)
        return data.length === 0 ? false : data[0]
    }

    async searchTrackBasic(searchValue) {
        const res = await axios.get(`/api/deezer/search?q=${searchValue}&type=track`, {}).catch(function (error) {
            console.error(error);
        });

        return formatData(res)
    }

    async getTrackFromId(id) {
        const {data} = await axios.get(`/api/deezer/get/track/${id}`, {}).catch(function (error) {
            console.error(error);
        });

        return formatDeezerTrack(data)
    }

    async getPlaylistFull(url) {

        const res = await axios.get(`${url}`, {}).catch(function (error) {
            console.error(error);
        });

        const items = res.data.tracks.data.map((item) => formatDeezerTrack(item))

        return {
            items,
            total: res.data.nb_tracks,
            playlistName: res.data.title,
        }
    }

    async getPlaylistTracks(search) {
        let {url, limit, offset} = search
        const {data} = await axios.get(`${url}/tracks?limit=${limit}&offset=${offset}`, {}).catch(function (error) {
            console.error(error);
        });

        const items = data.data.map((item) => formatDeezerTrack(item))

        return {
            items,
            total: data.total,
        }
    }

}

export default DeezerService