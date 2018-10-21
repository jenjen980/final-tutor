const express = require('express')
const router = express.Router()
var mongoose = require('mongoose');
var Form = require("../Models/Form");

// router.get("/", function(req, res, next){
//     res.render("./AboutUs");
// })

//changed from form
router.get("/", function(req, res){
    res.send({
        type: "GET",
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        message: req.body.message
});

router.post("/form", function(req, res, next){
    console.log(req.body);
    var formInfo = req.body;
    res.send({
        type: "POST",
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        message: req.body.message
    });
})
})

// router.put("/Form", function(req, res){
//     console.log(req.body);
//     res.send({
//         type: "PUT",
//         firstName: req.body.firstName,
//         lastName: req.body.lastName,
//         email: req.body.email,
//         message: req.body.message
//     });
// });


// app.post("/Form", (req, res) => {
//     var newForm = new Form(req.body);
//     newForm.save((err, doc) => {
//         if(err){
//             res.send(err);
//         }else{
//             res.send(doc);
//         }
//     });
// });

module.exports = router;