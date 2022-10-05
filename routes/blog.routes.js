const router = require('express').Router();
const blogController = require('../controllers/blog.controller');

router.get('/new', blogController.getNew);

module.exports = router;