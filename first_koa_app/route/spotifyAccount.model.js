module.exports = function(app) {
 
    const controller = require('../controller/spotifyAccount.controller.js');
 
    // Create a new Customer
    app.post('/api/spotifyAccounts', controller.create);
 
    // Retrieve all Customer
    app.get('/api/spotifyAccounts', controller.findAll);
 
    // Retrieve a single Customer by Id
    app.get('/api/spotifyAccounts/:spotifyAccountId', controller.findById);
 
    // Update a Customer with Id
    app.put('/api/spotifyAccounts/:spotifyAccountId', controller.update);
 
    // Delete a Customer with Id
    app.delete('/api/spotifyAccounts/:spotifyAccountId', controller.delete);
}