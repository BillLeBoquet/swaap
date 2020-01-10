const db = require('../config/db.config.js');
const Song = db.song;
 
exports.create = (req, res) => {  
  Song.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    first_name: req.body.first_name,
    name: req.body.name
  }).then(song => {    
    res.send(song);
  });
};
 
exports.findAll = (req, res) => {
  Song.findAll().then(songs => {
    res.send(songs);
  });
};
 
exports.findById = (req, res) => {  
  Song.findById(req.params.songId).then(song => {
    res.send(song);
  })
};
 
exports.update = (req, res) => {
  const id = req.params.songID;
  Song.update( {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        first_name: req.body.first_name,
        name: req.body.name
    },
    { where: {id: req.params.songId} }
    ).then(() => {
        res.status(200).send("updated successfully a song with id = " + id);
    });
};
 
exports.delete = (req, res) => {
  const id = req.params.songId;
  Song.destroy({
        where: { id: id }
  }).then(() => {
        res.status(200).send('deleted successfully a song with id = ' + id);
  });
};


exports.getDeezerId = (req, res) => {
    Song.findOne({where: {spotifyId: req.params.spotifyId} }).then(song => {
        res.send(song.deeezerId)
    })
}

exports.getSpotifyId = (req, res) => {
    Song.findOne({where: {deeezerId: req.params.deezerId} }).then(song => {
        res.send(song.spotifyId)
    })
}