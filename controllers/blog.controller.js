const Blog = require('../models/Blog');

async function getHome(req, res) {
    const blogs = await Blog.getAllBlogs();

    res.render('home', {blogs: blogs});
}

function getNewBlog(req, res) {
    res.render('new-blog');
}

async function createNewBlog(req, res) {
    const blogData = req.body;
    const blog = new Blog(blogData.title, blogData.description, blogData.content);

    try {
        await blog.createBlog();
    } catch(error) {
        return;
    }

    res.redirect('/home');
}

function uploadImage(req, res) {
    if(!res.locals.pathWithName) {
        return res.status(500).json({
            uploaded: false,
            errorMessage: 'Not able to locate the file path!'
        });
    }
    res.status(200).json({
        uploaded: true,
        url: `/blog/uploads/${res.locals.pathWithName}`,
    });
}

module.exports = {
    getHome: getHome,
    getNewBlog: getNewBlog,
    createNewBlog: createNewBlog,
    uploadImage: uploadImage
};