const router = require('express').Router();
const authController = require('../controllers/auth.controller');

router.get('/login', authController.getLogin);

router.post('/login', authController.login);

router.get('/home', authController.getHome);

module.exports = router;