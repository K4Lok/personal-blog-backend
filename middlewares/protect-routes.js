function protectRoutes(req, res, next) {
    if(!res.locals.isAdmin) {
        return res.redirect('/');
    }

    next();
}

module.exports = protectRoutes;