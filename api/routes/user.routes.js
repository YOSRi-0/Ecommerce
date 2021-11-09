const {
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin,
} = require('./verifyToken.js');

module.exports = (app) => {
    const users = require('../controllers/user.controller.js');

    // Create a new user
    app.post('/users', verifyTokenAndAdmin, users.create);

    // Get one user
    app.get('/users/:id', verifyTokenAndAdmin, users.findOne);

    // Get all users
    app.get('/users', verifyTokenAndAdmin, users.findAll);

    // Update a user with username
    app.put('/users/:id', verifyTokenAndAuthorization, users.update);

    // Delete a user with username
    app.delete('/users/:id', verifyTokenAndAdmin, users.delete);

    // Delete all users
    app.delete('/users/', verifyTokenAndAdmin, users.deleteAll);
};
