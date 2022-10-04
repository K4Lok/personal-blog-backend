function createUserSession(req, user, callback) {
    req.session.isAdmin = user.isAdmin;
    req.session.save(callback);
}

function destroyUserSession(req) {
    req.session.isAdmin = null;
    req.session.save();
}

module.exports = {
    createUserSession: createUserSession,
    destroyUserSession: destroyUserSession
}