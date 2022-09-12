const router = require('express').Router();

const baseRouter = require('./base.routes');
const authRouter = require('./auth.routes');

router.use(baseRouter);
router.use(authRouter);

module.exports = router;