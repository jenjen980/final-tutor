// server/models/User.js

const mongoose = require('mongoose')


let UserSchema = new mongoose.Schema(
    {
        name: String,
        email: String,
        tutor: String,
        tutor_id: String,
        token: String,
        tutor_pic: String,
        followers: [                        //change this to what we need in our app..or take it out
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
            }
        ],
        following: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
            }
        ]
    }
)
UserSchema.methods.follow = function (tutor_id) {
    if (this.following.indexOf(tutor_id) === -1) {
        this.following.push(tutor_id)        
    }
    return this.save()
}
UserSchema.methods.addFollower = function (fs) {
    this.followers.push(fs)        
}
module.exports = mongoose.model('User', UserSchema)