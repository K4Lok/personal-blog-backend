function checkAuthStatus(req, res, next) {
    const isAdmin = req.session.isAdmin;

    res.locals.isAdmin = isAdmin;

    next();
}

module.exports = checkAuthStatus;