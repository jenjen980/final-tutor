const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt');
mongoose.promise = Promise

// Define userSchema
const userSchema = new Schema({
            username: {
              type: String,
              lowercase: true,
              unique: true,
              required: true
            },
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