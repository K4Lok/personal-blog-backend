const router = require('express').Router();
const authController = require('../controllers/auth.controller');
const protectRoutesMiddleware = require('../middlewares/protect-routes');

router.get('/login', authController.getLogin);

router.post('/login', authController.login);

router.get('/logout', authController.logout);

router.use(protectRoutesMiddleware);

router.get('/home', authController.getHome);

module.exports = router;