const User = require('../models/User');
const authUtil = require('../util/authentication');
const cacheUtil = require('../util/cache-input');

function getLogin(req, res) {
    if(res.locals.isAdmin) {
        return res.redirect('/home');
    }

    let cacheInputs = cacheUtil.getSessionInputs(req);

    if(!cacheInputs) {
        cacheInputs = {
            username: ''
        };
    }

    res.render('login', { cacheInputs: cacheInputs});
}

async function login(req, res) {
    const user = new User(req.body.username, req.body.password);
    // user.signup();

    const isUserExists = await user.isUserExists();

    if(!isUserExists) {
        cacheUtil.storeSessionInputs(req, {
            errorMessage: 'User not exists!',
            username: req.body.username
        }, () => {
            res.redirect('/login');
        })
        return;
    }

    const existingUser = await user.getUserWithName();
    const isPasswordCorrect = await user.isPasswordValid(existingUser.password);

    if(!isPasswordCorrect) {
        cacheUtil.storeSessionInputs(req, {
            errorMessage: 'Enter the correct password!',
            username: req.body.username
        }, () => {
            res.redirect('/login');
        })
        return;
    }

    authUtil.createUserSession(req, existingUser, () => {
        res.redirect('/home');
    });
}

function logout(req, res) {
    authUtil.destroyUserSession(req);
    res.redirect('/');
}

module.exports = {
    getLogin: getLogin,
    login: login,
    logout: logout
}