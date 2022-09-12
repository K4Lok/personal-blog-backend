const express = require('express');
const app = express();

const path = require('path');

const config = require('./config');
const appRouter = require('./routes/router.routes');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use('/static', express.static('public'));

app.use(appRouter);

app.listen(config.app.port);