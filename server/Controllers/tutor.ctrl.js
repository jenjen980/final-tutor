/** server/controllers/article.ctrl.js*/

const Tutor = require('./../models/Tutor')
const User = require('./../models/User')
const fs = require('fs')
const cloudinary = require('cloudinary')


module.exports = {
    addTutor: (req, res, next) => {
        let { text, title, claps, description } = req.body  //Change these to match our model tutor file..our database
        if (req.files.image) {
            cloudinary.uploader.upload(req.files.image.path, (result) => {
                let obj = { text, title, claps, description, feature_img: result.url != null ? result.url : '' }
                saveTutor(obj)
            },{
                resource_type: 'image',
                eager: [
                    {effect: 'sepia'}
                ]
            })
        }else {
            saveTutor({ text, title, claps, description, feature_img: '' })
        }
        function saveTutor(obj) {
            new Tutor(obj).save((err, tutor) => {
                if (err)
                    res.send(err)
                else if (!tutor)
                    res.send(400)
                // else {
                //     return tutor.addAuthor(req.body.author_id).then((_article) => {
                //         return res.send(_article)
                //     })
                // }
                next()
            })
        }
    },
    getAll: (req, res, next) => {
        Tutor.find(req.params.id)
        .populate('tutor')
        .populate('comments.tutor').exec((err, tutor)=> {
            if (err)
                res.send(err)
            else if (!tutor)
                res.send(404)
            else
                res.send(tutor)
            next()            
        })
    },
    /**
     * tutor_id
     */
    clapTutor: (req, res, next) => {
        Tutor.findById(req.body.tutor_id).then((tutor)=> {
            return tutor.clap().then(()=>{
                return res.json({msg: "Done"})
            })
        }).catch(next)
    },
    /**
     * comment, tutor_id, tutor_id
     */
    commentTutor: (req, res, next) => {
        Tutor.findById(req.body.tutor_id).then((tutor)=> {
            return tutor.comment({
                tutor: req.body.tutor_id,
                text: req.body.comment
            }).then(() => {
                return res.json({msg: "Done"})
            })
        }).catch(next)
    },
    /**
     * tutor_id
     */
    getTutor: (req, res, next) => {
        Tutor.findById(req.params.id)
        .populate('teacher')
        .populate('comments.teacher').exec((err, tutor)=> {
            if (err)
                res.send(err)
            else if (!tutor)
                res.send(404)
            else
                res.send(tutor)
            next()            
        })
    }
}