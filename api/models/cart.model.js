const sql = require("./db");

const Cart = function (cart) {
    this.username = cart.username;
};

Cart.create = (cart, result) => {
    const username = cart.username;
    sql.query("INSERT INTO cart SET username = ?", username, (err, res) => {
        if (err) {
            console.log("Error: ", err);
            result(err, null);
            return;
        }

        console.log("created cart for user ", username);
        result(null, username);
    });
};

Cart.addToCart = (username, productId, cartId, result) => {
    sql.query(
        "INSERT INTO cart_product SET id_product = ?, id_cart = ?",
        [productId, cartId],
        (err, res) => {
            if (err) {
                console.log("Error: ", err);
                result(err, null);
                return;
            }

            console.log("added product to cart ", cartId);
            result(null, { productId: productId, cartId: cartId });
        }
    );
};

Cart.findByUsername = (username, result) => {
    sql.query(
        "SELECT products.* FROM products INNER JOIN cart_product ON cart_product.id_product = products.id_product INNER JOIN cart ON cart_product.id_cart = cart.id_cart INNER JOIN users ON cart.username = users.username WHERE users.username = ?",
        username,
        (err, res) => {
            if (err) {
                console.log("Error: ", err);
                result(err, null);
                return;
            }

            if (res.length) {
                console.log("found cart", res);
                result(null, res);
                return;
            }

            result({ kind: "not_found" }, null);
        }
    );
};

Cart.removeProductFromCart = (productId, cartId, result) => {
    sql.query(
        "DELETE FROM cart_product WHERE id_cart = ? AND id_product = ?",
        [cartId, productId],
        (err, res) => {
            if (err) {
                console.log("Error: ", err);
                result(err, null);
                return;
            }

            if (res.affectedRows === 0) {
                result({ kind: "not_found" }, null);
                return;
            }

            console.log(
                `deleted product with id ${productId} from cart with id ${cartId}`
            );
            result(null, res);
        }
    );
};

Cart.removeProducts = (cartId, result) => {
    sql.query(
        "DELETE FROM cart_product WHERE id_cart = ?",
        cartId,
        (err, res) => {
            if (err) {
                console.log("Error: ", err);
                result(err, null);
                return;
            }

            console.log(
                `deleted ${res.affectedRows} products from cart ${cartId}`
            );
            result(null, res);
        }
    );
};

module.exports = Cart;
