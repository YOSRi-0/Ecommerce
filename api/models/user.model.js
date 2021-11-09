const sql = require('./db.js');

const User = function (user) {
    this.username = user.username;
    this.email = user.email;
    this.password = user.password;
    this.isadmin = user.isadmin;
    this.createdat = user.createdat;
};

User.create = (newUser, result) => {
    sql.query('INSERT INTO users SET ?', newUser, (err, res) => {
        if (err) {
            console.log('error: ', err);
            result(err, null);
            return;
        }

        console.log('created user', res);
        result(null, res);
    });
};

User.findById = (id, result) => {
    sql.query('SELECT * FROM users WHERE id_user = ? ', id, (err, res) => {
        if (err) {
            console.log('error', err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log('found user', res[0]);
            result(null, res[0]);
            return;
        }

        result({ kind: 'not_found' }, null);
    });
};

User.getAll = (result) => {
    sql.query('SELECT * FROM users', (err, res) => {
        if (err) {
            console.log('error: ', err);
            result(err, null);
            return;
        }

        console.log('users: ', res);
        result(null, res);
    });
};

User.updateById = (id, user, result) => {
    sql.query(
        'UPDATE users SET username = ?, email = ? , password = ? WHERE id_user  = ?',
        [user.username, user.email, user.password, id],
        (err, res) => {
            if (err) {
                console.log('error: ', err);
                result(err, null);
                return;
            }

            if (res.affectedRows === 0) {
                result({ kind: 'not_found' }, null);
                return;
            }

            console.log('updated user: ', res);
            result(null, { id, ...user });
        }
    );
};

User.remove = (id, result) => {
    sql.query('DELETE FROM users WHERE id_user = ? ', id, (err, res) => {
        if (err) {
            console.log('error: ', err);
            result(err, null);
            return;
        }

        if (res.affectedRows === 0) {
            result({ kind: 'not_found' }, null);
            return;
        }

        console.log('deleted user with id', id);
        result(null, res);
    });
};

User.removeAll = (result) => {
    sql.query('DELETE FROM users', (err, res) => {
        if (err) {
            console.log('error: ', err);
            result(err, null);
            return;
        }

        console.log(`deleted ${res.affectedRows} users`);
        result(null, res);
    });
};

User.login = (username, result) => {
    sql.query(
        'SELECT * FROM users WHERE username = ? ',
        username,
        (err, res) => {
            if (err) {
                console.log('Error: ', err);
                result(err, null);
                return;
            }
            if (!res) {
                console.log(`wrong credentials `);
                result({ kind: 'wrong credentials' }, null);
                return;
            }
            console.log(res[0]);
            result(null, res[0]);
        }
    );
};

module.exports = User;
