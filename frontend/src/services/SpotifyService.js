import axios from "axios";
import {formatSpotifyTrack} from "../util/utils";

export function formatData(data) {
    try {
        return data.data.tracks.items.map((item) => formatSpotifyTrack(item))
    } catch (e) {
        return []
    }
}

class SpotifyService {

    async searchTrackFromCompleteRequestInBean(requestInBean) {
        const {title, album, artist} = requestInBean

        let res = await axios.get(`/api/spotify/search/advanced?artist=${artist.name}&title=${title}&album=${album.name}&type=track`, {})
            .catch(function (error) {
                console.error(error)
            })
        if(res === null){
            res = await axios.get(`/api/spotify/search/advanced?artist=${artist.name}&title=${title}&type=track`, {})
                .catch(function (error) {
                    console.error(error)
                })
        }

        const data = formatData(res)
        return data.length === 0 ? false : data[0]

    }

    async searchTrackBasic(searchValue) {
        const res = await axios.get(`/api/spotify/search?q=${searchValue}&type=track`, {}).catch(function (error) {
            console.error(error);
        });

        return formatData(res)
    }

    async getPlaylistFull(url) {
        const res = await axios.get(`${url}`, {}).catch(function (error) {
            console.error(error);
        });

        const items = res.data.tracks.items.map((item) => formatSpotifyTrack(item.track))

        return {
            items,
            total: res.data.tracks.total,
            playlistName: res.data.name,
        }
    }

    async getPlaylistTracks(search) {
        let {url, limit, offset} = search

        const playlistFull = await axios.get(`${url}`, {}).catch(function (error) {
            console.error(error);
        });

        const res = await axios.get(`${url}/tracks?limit=${limit}&offset=${offset}`, {}).catch(function (error) {
            console.error(error);
        });

        const items = res.data.items.map((item) => formatSpotifyTrack(item.track))

        return {
            items,
            total: res.data.total,
            playlistName: playlistFull.name,
        }
    }

    async getTrackFromId(id) {
        const {data} = await axios.get(`/api/spotify/get/tracks/${id}`, {}).catch(function (error) {
            console.error(error);
        });

        return formatSpotifyTrack(data)
    }

}

export default SpotifyService