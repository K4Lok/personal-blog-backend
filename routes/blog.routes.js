const router = require('express').Router();
const blogController = require('../controllers/blog.controller');
const imageUploadMiddleware = require('../middlewares/image-upload');

router.get('/home', blogController.getHome);

router.get('/new-blog', blogController.getNewBlog);

router.post('/new-blog', blogController.createNewBlog);

router.post('/upload-image', imageUploadMiddleware, blogController.uploadImage);

module.exports = router;