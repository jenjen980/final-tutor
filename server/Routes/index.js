const user = require('./user');
const tutor = require('./tutor');



const form = require("./form");


const router = require('express').Router();

router.use('/user', user);
// router.use('/tutor', tutor);



router.use('/form', form)



module.exports = router;