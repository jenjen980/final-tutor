// server/models/Tutor.js


const mongoose = require('mongoose')


let TutorSchema = new mongoose.Schema(
    {
        teacher: String,
        title: String,
        description: String,
        feature_img: String,
        claps: Number,
        profile_pic:{
            type: String
        }
        comments: [
            {
                tutor: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'User'
                },
                text: String
            }
        ]
    }
);

TutorSchema.methods.clap = function() {
    this.claps++
    return this.save()
}
TutorSchema.methods.comment = function(c) {
    this.comments.push(c)
    return this.save()
}
TutorSchema.methods.addTutor = function (tutor_id) {
    this.tutor = tutor_id
    return this.save()
}
TutorSchema.methods.getUserTutor = function (_id) {
    Tutor.find({'tutor': _id}).then((tutor) => {
        return tutor
    })
}
module.exports = mongoose.model('Tutor', TutorSchema)