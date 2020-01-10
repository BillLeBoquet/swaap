const db = require('../config/db.config.js');
const Playlist = db.user;
const SongPlaylist = db.song_playlist
 
exports.create = (req, res) => {  
  Playlist.create({
    name: req.body.name,
    updated: req.body.email,
    deezer_Id: req.body.deezer_Id,
    spotify_Id: req.body.spotify_Id,
  }).then(playlist => {    
    res.send(playlist);
  });
};
 
exports.findAll = (req, res) => {
  Playlist.findAll().then(playlists => {
    res.send(playlist);
  });
};
 
exports.findById = (req, res) => {  
  Playlist.findById(req.params.playlistId).then(playlist => {
    res.send(playlist);
  })
};
 
exports.update = (req, res) => {
  const id = req.params.playlistId;
  Playlist.update( {
        name: req.body.name,
        updated: req.body.email,
        deezer_Id: req.body.deezer_Id,
        spotify_Id: req.body.spotify_Id,
    },
    { where: {id: req.params.playlistId} }
    ).then(() => {
        res.status(200).send("updated successfully a playlist with id = " + id);
    });
};
 
exports.delete = (req, res) => {
  const id = req.params.playlistId;
  Playlist.destroy({
        where: { id: id }
  }).then(() => {
        res.status(200).send('deleted successfully a playlist with id = ' + id);
  });
};

exports.addSong = (req, res) => {
    const playlistId = req.body.playlistId
    const songId = req.body.songId
    SongPlaylist.create({
        
    })
}

exports.removeSong = (req, res) => {

}