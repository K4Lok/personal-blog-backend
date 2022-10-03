const session = require('express-session');
const mongodbStore = require('connect-mongodb-session');

function createSessionStore() {
    const MongoDBStore = mongodbStore(session);

    const sessionStore = MongoDBStore({
        uri: 'mongodb://localhost:27017',
        databaseName: 'backend-blog',
        collection: 'sessions'
    });

    return sessionStore;
}

function createSessionConfig() {
    return {
        secret: 'supersecrett',
        cookie: {
            maxAge: 1000 * 60 * 60 * 2// 1 hour
        },
        store: createSessionStore(),
        resave: false,
        saveUninitialized: false
    };
}

module.exports = createSessionConfig;