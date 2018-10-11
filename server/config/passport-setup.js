const passport =  require('passport');
const LocalStrategy = require('passport-local').Strategy;
const userModel = require('../database/models/user');
const bcrypt = require("bcrypt-nodejs");

passport.serializeUser((user, done)=>{
   console.log(user, "---------serialized")
   done(null, {id: user._id});
})
passport.deserializeUser((user, done)=>{
   userModel.find({_id: user.id}).then(user =>{
       done(null, user);
   }
   )
});
const isValidPassword = function(user, password){
   return bcrypt.compareSync(password, user.password);
}



passport.use('user-login', new LocalStrategy({
   usernameField: 'email',
   passwordField: 'password',
   passReqToCallback: true

}, function(req, username, password, done){
   console.log(username, "username")
   console.log('---------------------------------------------');
   userModel.find({ email: username}).then(user =>{
       console.log(user, "user coming back from db++++++++++++");
       if(!user.length > 0) {
           return done(null, false);
       }
       if(!isValidPassword(user[0], password)){
           console.log("is valid")
           return done(null, false)
       }
       console.log('reached bottom')
       return done(null, user);
   })
}))

passport.use('user-reg', new LocalStrategy({
   usernameField: 'email',
   passwordField: 'password',
   passReqToCallback: true

}, function(req, username, password, done){
   console.log(username, "username")
   console.log('---------------------------------------------');
   userModel.find({ email: username}).then(user =>{
       console.log(user, "user coming back from db");
       if(user.length > 0){
           return done(null, false)
       }else {
           bcrypt.hash(password, null, null, function(err, hash){
               userModel.create({
                   email: username,
                   password: hash,
                   firstName: req.body.firstName,
                   lastName: req.body.lastName,
                   role: req.body.role,
                   isDeleted: req.body.isDeleted
               }).then(user => {
                   return done(null, user);
               })
           })
       }
   })
}))