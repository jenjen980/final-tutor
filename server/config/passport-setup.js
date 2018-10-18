const passport =  require('passport');
const LocalStrategy = require('passport-local').Strategy;
const userModel = require('../Models/User');
const bcrypt = require("bcrypt");

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
// const isValidPassword = function(user, password){
//    return bcrypt.compareSync(password, user.password);
// }

const saltRounds = 10;


passport.use('userRegister', new LocalStrategy({
   usernameField: 'username',
   passwordField: 'password',
   passReqToCallback: true

}, function(req, username, password, done){
    console.log(req)
   console.log(username, "username")
   console.log('---------------------------------------------');
   userModel.find({ email: username}).then(user =>{
       console.log(user, "user coming back from db");
       if(user){
           return done(null, false)
       }else {
           bcrypt.hash(password, saltRounds, function(err, hash){
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

// passport.use(new LocalStrategy(
//     function(username, password, done) {
//         console.log(username, "username")
//       User.findOne({ email: username }, function (err, user) {
//         if (err) { return done(err); }
//         if (!user) { return done(null, false); }
//         // if (!user.verifyPassword(password)) { return done(null, false); }
//         return done(null, user);
//       });
//     }
//   ))

passport.use(new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    // passReqToCallback: true
 
 }, function(username, password, done){
     console.log(req)
    console.log(username, "username")
    console.log('---------------------------------------------');
    userModel.find({ email: username}).then(user =>{
        console.log(user, "user coming back from db");
        if(!user){
            return done(null, false)
        }else {
            bcrypt.compare(password, user.password, function(err, res){
                if (res == true) {
                    console.log("checking for unicorns");
                    return done(null, user)
                } else {
                    res.send("Incorrect Password");
                    res.redirect('/login');
                }
        })
        }
    })
 }))