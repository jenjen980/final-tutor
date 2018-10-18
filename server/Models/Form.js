
const mongoose = require('mongoose');



let FormSchema = new mongoose.Schema(
    {
        firstName: String,
        lastName: String,
        email: String,
        message: String,
        claps: Number,
)
    };

module.exports = mongoose.model('Form', FormSchema);