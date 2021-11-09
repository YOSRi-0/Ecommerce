// REGISTER
module.exports = (app) => {
    const user = require('../controllers/user.controller.js');
    const {
        verifyToken,
        verifyTokenAndAuthorization,
    } = require('./verifyToken');

    app.post('/register', user.create);

    app.post('/login', user.login);

    app.put('/:id', verifyTokenAndAuthorization, user.update);
};
