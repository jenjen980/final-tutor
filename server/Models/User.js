const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcryptjs');
mongoose.promise = Promise

// Define userSchema
const userSchema = new Schema({

            firstName: {
                type: String,
                default: ''
            },
            lastName: {
                type: String,
                default: ''
            },
            email: {
                type: String,
                lowercase: true,
                unique: true,
                required: true
            },
            role: {
                type: String,
                enum: ['Tutor', 'Student'],
                default: 'Student'
            },
            password: {
                type: String,
                required: true
            },
            isDeleted: {
                type: Boolean,
                default: false
            }

})

const User = mongoose.model('User', userSchema)
module.exports = User