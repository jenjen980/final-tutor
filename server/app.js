// server/app.js

/** require dependencies */
const express = require("express");
const routes = require('./routes/');
const path = require("path");
const mongoose = require('mongoose');
// const cors = require('cors')
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
// const helmet = require('helmet')
const cloudinary = require('cloudinary');

const app = express();
const router = express.Router();
// const url = process.env.MONGODB_URI || "mongodb://localhost:27017/final-tutor" //change this to what we have

// BEGIN OF AUTH CODE
// Require Schema
const User = require("./Models/authModel");

// Templates - Really needs to be react
const expressHandlebars = require("express-handlebars");
const hbs = expressHandlebars.create({ defaultLayout: "application" });
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// Post Data
app.use(bodyParser.urlencoded({ extended: true }));

// Session
const expressSession = require("express-session");
app.use(
  expressSession({
    resave: false,
    saveUninitialized: true,
    secret:
      process.env.SESSION_SEC || "You must generate a random session secret"
  })
);

// Flash
const flash = require("express-flash-messages");
app.use(flash());

// Connect to Mongoose
mongoose.Promise = require("bluebird");
app.use((req, res, next) => {
  if (mongoose.connection.readyState) next();
  else {
    const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/passport";
    mongoose
    //   .connect(mongoUrl, { useMongoClient: true })
      .set('useCreateIndex', true)
      .connect(mongoUrl, { useNewUrlParser: true })
      .then(() => next())
      .catch(err => console.error(`Mongoose Error: ${err.stack}`));
  }
});

// Passport
const passport = require("passport");
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done) {
  done(null, user._id);
});

passport.deserializeUser(function(userId, done) {
  User.findById(userId, (err, user) => done(err, user));
});

// Passport Local
const LocalStrategy = require("passport-local").Strategy;
const local = new LocalStrategy((username, password, done) => {
  User.findOne({ username })
    .then(user => {
      if (!user || !user.validPassword(password)) {
        done(null, false, { message: "Invalid username/password" });
      } else {
        done(null, user);
      }
    })
    .catch(e => done(e));
});
passport.use("local", local);

// Routes
app.use("/", require("./authRoutes")(passport));

//END OF AUTH CODE

/** configure cloudinary */
cloudinary.config({
    cloud_name: 'YOUR_CLOUDINARY_NAME_HERE',
    api_key: 'YOUR_CLOUDINARY_API_KEY_HERE',
    api_secret: 'YOUR_CLOUDINARY_API_SECRET_HERE'
})


// /** connect to MongoDB datastore */
// try {
//     mongoose.connect(url, {
//         //useMongoClient: true
//     })    
// } catch (error) {
    
// };

// let port = 5000 || process.env.PORT

/** set up routes {API Endpoints} */
// routes(router);

/** set up middlewares */
// app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(helmet())
//app.use('/static',express.static(path.join(__dirname,'static')))

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }

app.use('/api', router);

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });
  

/** start server */
app.listen(PORT, () => {
    console.log(`🌎 ==> Server now on port ${PORT}!`);
  });