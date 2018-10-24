const express = require('express')
const router = express.Router()
var mongoose = require('mongoose');
var Form = require("../Models/Form");

router.get("/", function(req, res, next){
    res.render("./AboutUs");
})


router.post("/", function(req, res, next){
    console.log("form");
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

module.exports = router;