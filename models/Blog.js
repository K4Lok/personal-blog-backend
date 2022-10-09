const ObjectId = require('mongodb').ObjectId;

const db = require('../data/database');

class Blog {
    constructor(title, description, content) {
        this.title = title;
        this.description = description;
        this.content = content;
    }

    static async getBlogById(id) {
        return await db.getDb().collection('blogs').findOne({_id: ObjectId(id)});
    }

    static async getAllBlogs() {
        return await db.getDb().collection('blogs').find({}, {content: 0}).toArray();
    }

    async createBlog() {
        const date = new Date().toISOString();

        await db.getDb().collection('blogs').insertOne({
            title: this.title,
            description: this.description,
            content: this.content,
            createdDate: date,
            updatedDate: date
        })
    }
}

module.exports = Blog;