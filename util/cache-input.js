function getSessionInputs(req) {
    const cacheInputs = req.session.cacheInputs;
    req.session.cacheInputs = null;

    if(!cacheInputs) {
        return;
    }
    return cacheInputs;
}

function storeSessionInputs(req, cacheInputs, callback) {
    req.session.cacheInputs = cacheInputs;
    req.session.save(callback); // do further action after the session is saved.
}

module.exports = {
    getSessionInputs: getSessionInputs,
    storeSessionInputs: storeSessionInputs
};