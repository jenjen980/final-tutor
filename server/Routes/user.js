const express = require('express')
const router = express.Router()
const User = require('../Models/User')
const passport = require('passport')

router.post('/register', (req, res, next) => {
   console.log( req.body, 'in user reg')
   passport.authenticate('userRegister', (err, user, info)=>{
       console.log(user, "in user reg")
       if(err){return next(err)}
       if(!user) {return res.json({user:false})}
       req.logIn(user, function(err){
           if (err){return next(err)}
           res.json({status: true, user: user })
       })
   })(req, res, next)

})

router.post('/login',(req, res, next)=>{
    console.log(req.body);
   passport.authenticate('local',(err, user, info)=>{
     console.log(err, user, info)
       if(err) {return next(err)}
       if(!user){return res.json({auth:false})}
       req.logIn(user, function(err){
           if(err){ return next(err); }
           res.json({isUser:true, user:user})
       })
   })(req, res, next)
})



router.get('/logout', (req, res) => {
    console.log("In Log out");
   if (req.user) {
       req.logout()
       res.send({ msg: 'logging out' })
   } else {
       res.send({ msg: 'no user to log out' })
   }
})

//May need to change route below
router.get('/', (req, res, next) => {
    console.log('===== user!!======')
    console.log(req.user)
    if (req.user) {
        res.json({ user: req.user })
    } else {
        res.json({ user: null })
    }
 })

module.exports = router