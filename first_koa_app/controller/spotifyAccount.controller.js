const db = require('../config/db.config.js');
const User = db.user;
 
exports.create = (req, res) => {  
  User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    first_name: req.body.first_name,
    name: req.body.name
  }).then(user => {    
    res.send(user);
  });
};
 
exports.findAll = (req, res) => {
  User.findAll().then(users => {
    res.send(users);
  });
};
 
exports.findById = (req, res) => {  
  User.findById(req.params.userId).then(user => {
    res.send(user);
  })
};
 
exports.update = (req, res) => {
  const id = req.params.userId;
  User.update( {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        first_name: req.body.first_name,
        name: req.body.name
    },
    { where: {id: req.params.userId} }
    ).then(() => {
        res.status(200).send("updated successfully a user with id = " + id);
    });
};
 
exports.delete = (req, res) => {
  const id = req.params.userId;
  User.destroy({
        where: { id: id }
  }).then(() => {
        res.status(200).send('deleted successfully a user with id = ' + id);
  });
};
