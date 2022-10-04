const router = require('express').Router();
const checkAuthMiddelware = require('../middlewares/check-auth');

const baseRouter = require('./base.routes');
const authRouter = require('./auth.routes');

router.use(checkAuthMiddelware);

router.use(baseRouter);
router.use(authRouter);

module.exports = router;