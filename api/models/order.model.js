const sql = require('./db');

const Order = function (order) {
    this.username = order.username;
    this.address = order.address;
    this.products = order.products;
    this.totalPrice = order.totalPrice;
    this.amount = order.amount;
    this.status = order.status;
};

Order.create = async (order, result) => {
    const username = order.username;
    const address = order.address;
    const status = order.status;
    const products = order.products;
    const totalPrice = order.totalPrice;
    const amount = order.amount;
    for (const product of products) {
        await sql.query(
            'INSERT INTO orders SET username = ?, address = ?, status_order = ?, id_product = ?, amount = ?, total_price = ?',
            [username, address, status, product, amount, totalPrice],
            (err, res) => {
                if (err) {
                    console.log('Error: ', err);
                    result(err, null);
                    return;
                }

                console.log('created order for user ', username);
                result(err, { username, address, product, totalPrice, amount });
            }
        );
    }
};

Order.findByUsername = (username, result) => {
    sql.query(
        'SELECT * FROM orders WHERE username = ?',
        username,
        (err, res) => {
            if (err) {
                console.log('Error: ', err);
                result(err, null);
                return;
            }

            if (res.length) {
                console.log('found orders for user ', username);
                result(null, res);
                return;
            }

            result({ kind: 'not_found' }, null);
        }
    );
};

Order.findAll = (result) => {
    sql.query('SELECT * FROM orders', (err, res) => {
        if (err) {
            console.log('Error: ', err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log('found orders ');
            result(null, res);
            return;
        }

        result({ kind: 'not_found' }, null);
    });
};

module.exports = Order;
