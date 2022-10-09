const multer = require('multer');
const uuid = require('uuid').v4;

const upload = multer({
    storage: multer.diskStorage({
        destination: 'blog-data/images',
        filename: (req, file, callback) => {
            const pathWithName = uuid() + '-' + file.originalname;
            req.res.locals.pathWithName = pathWithName;
            callback(null, pathWithName);
        }
    })
});

// const imageUploadMiddleware = upload.single('images');
const imageUploadMiddleware = upload.any();

module.exports = imageUploadMiddleware;