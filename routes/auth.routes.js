const router = require('express').Router();
const authController = require('../controllers/auth.controller');

router.get('/login', authController.getLogin);

router.get('/home', authController.getHome);

module.exports = router;