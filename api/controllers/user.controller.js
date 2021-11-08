const User = require('../models/user.model.js');
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');

const dotenv = require('dotenv');
dotenv.config();

// Login
exports.login = async (req, res) => {
    // validate request
    if (!req.body) {
        res.status(400).json({
            message: 'Content can not be empty',
        });
    }

    // User input
    const enteredUsername = req.body.username;
    const enteredPassword = req.body.password;

    // Attempt to login
    User.login(enteredUsername, (err, data) => {
        if (err) {
            if (err.kind === 'wrong credentials') {
                res.status(401).json({ message: 'wrong credentials' });
            } else {
                res.status(500).json({
                    message: err.message || 'error has occured',
                });
            }
        } else {
            const user = data;
            const hashedPassword = CryptoJS.AES.decrypt(
                user.password,
                process.env.PASS_SEC
            );
            const originPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

            enteredPassword !== originPassword &&
                res.status(401).json({ message: 'wrong credentials' });
            const accessToken = jwt.sign(
                {
                    username: user.username,
                    isadmin: user.isadmin,
                },
                process.env.JWT_SEC,
                { expiresIn: '1d' }
            );
            const { password, ...others } = user;
            return res.json({ ...others, accessToken });
        }
    });
};

// Create and save new user
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).json({
            message: 'Content can not be empty',
        });
    }

    // Create a user
    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC),
        isadmin: Number(req.body.isadmin) || 0,
        createdat: new Date(),
    });

    // Save user in the db
    User.create(user, (err, data) => {
        if (err) {
            res.status(500).json({
                message:
                    err.message ||
                    'some error occurred whime creating the user',
            });
        } else {
            res.status(201).json(data);
        }
    });
};

// Get all users
exports.findAll = (req, res) => {
    User.getAll((err, data) => {
        if (err)
            res.status(500).json({
                message:
                    err.message ||
                    'some error occurred whime creating the user',
            });
        else res.json(data);
    });
};

// Get one user with id
exports.findOne = (req, res) => {
    const id = req.params.id;
    User.findById(id, (err, data) => {
        if (err) {
            if (err.kind === 'not_found') {
                res.status(404).json({
                    message: `Not found User with id ${id}`,
                });
            } else
                res.status(500).json({
                    message: 'Error retrieving user with id ' + id,
                });
        } else res.json(data);
    });
};

// Update a user by id
exports.update = (req, res) => {
    if (!req.body) {
        res.status(400).json({
            message: 'Content can not be empty',
        });
    }

    const id = req.params.id;
    const newUser = req.body;
    User.updateById(id, newUser, (err, data) => {
        if (err) {
            if (err.kind === 'not_found') {
                res.status(404).json({
                    message: `Not found User with id ${id}`,
                });
            } else {
                res.status(500).json({
                    message: 'Error updating User with id ' + id,
                });
            }
        } else {
            res.json(data);
        }
    });
};

// Delete a user by id
exports.delete = (req, res) => {
    const id = req.params.id;
    User.remove(id, (err, data) => {
        if (err) {
            if (err.kind === 'not_found') {
                res.status(400).json({
                    message: `Not found user with id ${id}`,
                });
            } else {
                res.status(500).json({
                    message: 'Could not delete user with id ' + id,
                });
            }
        } else {
            res.json({ message: `User was deleted successfully` });
        }
    });
};

// Delete all users
exports.deleteAll = (req, res) => {
    User.removeAll((err, data) => {
        if (err)
            res.status(500).json({
                message:
                    err.message || 'Some error occured while remove all users',
            });
        else
            res.json({
                message: `All users were deleted successfully`,
            });
    });
};
