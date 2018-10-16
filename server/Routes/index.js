// server/routes/index.js

const user = require('./user')
const tutor = require('./tutor')

module.exports = (router) => {
    // user(router)
    tutor(router)
};