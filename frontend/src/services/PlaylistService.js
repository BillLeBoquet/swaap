import axios from "axios";

class PlaylistService {
    async createPlaylist(playlist) {
        console.log('playlist')
        console.log(playlist)
        const {data} = await axios.post(`/api/playlists`, playlist)
            .catch(function (error) {
                console.error(error)
            })

        return data
    }

    async updatePlaylist(playlist) {
        const {data} = await axios.put(`/api/playlists/${playlist.id}`, playlist)
            .catch(function (error) {
                console.error(error)
            })

        return data
    }
}

export default PlaylistService