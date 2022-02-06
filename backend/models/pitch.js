// import mongoose and access Schema class
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const PitchSchema = new Schema({
    author: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    tags: {
        type: [String]
    },
    comments: {
        type: [{
            author: String,
            body: String,
            date: String
        }],
        default: []
    },
    likes: {
        type: Number,
        default: 0
    }
});


// create and exprot model
const Pitch = mongoose.model('pitch', PitchSchema)
module.exports = Pitch