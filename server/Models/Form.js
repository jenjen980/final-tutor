
const mongoose = require('mongoose');
const Schema = mongoose.Schema
mongoose.promise = Promise



const formSchema = new Schema(
    {
        firstName:{
            type: String,
            trim: true,
            required: true
        },
        lastName: {
            type: String,
            trim: true,
            required: true
        },
        email: {
            type: String,
            match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
        },
        message: {
            type: String
        }
    })

const Form = mongoose.model("Form", formSchema)
module.exports = Form