const Cart = require('../models/cart.model');

// Create and save new cart
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({ message: 'content can not be empty' });
    }

    // Create a cart
    const cart = new Cart({
        username: req.body.username,
    });

    // Save cart in the db
    Cart.create(cart, (err, data) => {
        if (err) {
            res.status(500).send({
                message:
                    err.message || 'Some error occured while creating the cart',
            });
        } else {
            res.send(data);
        }
    });
};

// Get one cart with username
exports.findByUsername = (req, res) => {
    const username = req.params.username;
    Cart.findByUsername(username, (err, data) => {
        if (err) {
            if (err.kind === 'not_found') {
                res.status(404).send({
                    message: `not found product for cart of user: ${username}`,
                });
            } else {
                res.status(500).send({
                    message: 'Error retrieving cart for user ' + username,
                });
            }
        } else {
            res.send(data);
        }
    });
};

// Add product to cart by product id
exports.addToCart = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({ message: 'content can not be empty' });
    }

    const { username, productId, cartId } = req.body;
    Cart.addToCart(username, productId, cartId, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || 'Some error occured while add to cart',
            });
        } else {
            res.send(data);
        }
    });
};

// Delete product from cart
exports.deleteProductFromCart = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({ message: 'content cannot be empty' });
    }
    const { productId, cartId } = req.body;
    Cart.removeProductFromCart(productId, cartId, (err, data) => {
        if (err) {
            if (err.kind === 'not_found') {
                res.status(400).send({
                    message:
                        err.message ||
                        'some error occured while removing the product',
                });
            } else {
                res.status(500).send({
                    message:
                        err.message ||
                        'Some error occured while removing from cart',
                });
            }
        } else {
            res.send({
                message: `Product ${productId} was deleted successfully from cart ${cartId}`,
            });
        }
    });
};

// Delete All products from cart
exports.deleteAll = (req, res) => {
    const cartId = req.params.id;
    Cart.removeProducts(cartId, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message ||
                    'some error occured while removing all products from cart',
            });
        else
            res.send({
                message: `all products were deleted successfully from cart ${cartId}`,
            });
    });
};