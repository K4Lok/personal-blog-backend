const express = require('express');
const app = express();

const path = require('path');

const expressSession = require('express-session');
const createSessionConfig = require('./data/session');
const db = require('./data/database');

const config = require('./config');
const appRouter = require('./routes/router.routes');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use('/static', express.static('public'));
app.use('/blog/uploads', express.static('blog-data/images'));
app.use(express.urlencoded({extended: true}));
app.use(expressSession(createSessionConfig()));

app.use(appRouter);

db.connectToDatabase()
    .then(() => {
        app.listen(config.app.port);
    })
    .catch((error) => {
        console.log('Database not connected');
        console.log(error);
    });