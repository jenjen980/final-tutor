// server/routes/tutor.js

const tutorcontroller = require('./../controllers/tutor.ctrl')


module.exports = (router) => {
    /**
     * get all tutors
     */
    router
        .route('/tutors')
        .get(tutorcontroller.getAll)
    /**
     * add a tutor
     */
    router
        .route('/tutor')
        .post(tutorcontroller.addTutor)
    /**
     * clap on a tutor
     */
    router
        .route('/tutor/clap')
        .post(tutorcontroller.clapTutor)
    /**
     * comment on a Tutor
     */
    router
        .route('/tutor/comment')
        .post(tutorcontroller.commentTutor)
    /**
     * get a particlular tutor to view
     */
    router
        .route('/tutor/:id')
        .get(tutorcontroller.getTutor)
}