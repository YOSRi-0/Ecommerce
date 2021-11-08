module.exports = (app) => {
    const order = require('../controllers/order.controller');

    app.post('/orders', order.create);

    app.get('/orders', order.getOrders);
};
