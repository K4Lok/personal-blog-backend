function getLogin(req, res) {
    res.render('login');
}

// function login(req, res) {

// }

function getHome(req, res) {
    res.render('home');
}

module.exports = {
    getLogin: getLogin,
    getHome: getHome
    // login: login
}