const User = require('../models/User');
const cacheUtil = require('../util/cache-input');

function getLogin(req, res) {
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

    console.log(isUserExists);

    if(!isUserExists) {
        cacheUtil.storeSessionInputs(req, {
            errorMessage: 'User not exists!',
            username: req.body.username
        }, () => {
            res.redirect('/login');
        })
        return;
    }



    res.redirect('/home');
}

function getHome(req, res) {
    res.render('home');
}

module.exports = {
    getLogin: getLogin,
    login: login,
    getHome: getHome
}