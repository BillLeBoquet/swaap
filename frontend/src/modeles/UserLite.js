class UserLite {
    constructor(user) {
        this.id = user.id
        this.pseudo = user.pseudo
        this.role = user.role
        this.avatar = user.avatar
        this.playlists = user
    }
}

export default UserLite