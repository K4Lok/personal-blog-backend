const bcrypt = require('bcryptjs');
const ObjectId = require('mongodb').ObjectId;

const db = require('../data/database');

class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }

    async signup() {
        const hashedPassword = await bcrypt.hash(this.password, 12);

        await db.getDb().collection('user').insertOne({
            username: this.username,
            password: hashedPassword
        })
    }

    async isUserExists() {
        return await db.getDb().collection('user').findOne({username: this.username}, {password: 0});
    }

    async isPasswordValid(hashedPassword) {
        return await bcrypt.compare(this.password, hashedPassword);
    }

    async getUserWithName() {
        return await db.getDb().collection('user').findOne({ username: this.username});
    }

}

module.exports = User;