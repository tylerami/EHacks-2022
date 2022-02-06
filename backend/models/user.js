// import mongoose and access Schema class
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create schema
const UserSchema = new Schema({
    username: {
        type: String,
        unqiue: true,
        required: true
    },
    password: {
        type: String,
        requried: true
    },
    name: String,
    bio: String,
    skills: [String]
});

// create and exprot model
const User = mongoose.model('user', UserSchema)
module.exports = User