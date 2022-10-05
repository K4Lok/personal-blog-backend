const router = require('express').Router();
const checkAuthMiddelware = require('../middlewares/check-auth');

const baseRouter = require('./base.routes');
const authRouter = require('./auth.routes');
const blogRouter = require('./blog.routes');

router.use(checkAuthMiddelware);

router.use(baseRouter);
router.use(authRouter);
router.use(blogRouter);

module.exports = router;