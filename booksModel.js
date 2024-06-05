const mongoose = require("mongoose")

const booksSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    quote: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("library", booksSchema)