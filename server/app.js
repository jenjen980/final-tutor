// server/app.js

/** require dependencies */
const express = require("express");
const routes = require('./routes/');
const path = require("path");
const cors = require('cors')
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3001;
// const helmet = require('helmet')
const cloudinary = require('cloudinary');

const app = express();
app.use(cors());
const router = express.Router();
// const url = process.env.MONGODB_URI || "mongodb://localhost:27017/final-tutor" //change this to what we have

const morgan = require('morgan')
const passportSetup =require('./config/passport-setup');
const session = require('express-session')
const dbConnection = require('./config')
const MongoStore = require('connect-mongo')(session)
const passport = require('passport');
const cookieSession = require('cookie-session');
// const app = express()

// BEGIN OF AUTH CODE
app.use(cookieSession({
  maxAge: 24 * 60 *60* 1000,
  keys: "anything"
}))
app.use(passport.initialize());
app.use(passport.session());

// Require Schema
// const User = require("./Models/user");

// Route requires
const user = require('./Routes/user')

// MIDDLEWARE
app.use(morgan('dev'))
app.use(
    bodyParser.urlencoded({
        extended: false
    })
)
app.use(bodyParser.json())

// Sessions
app.use(
  session({
      secret: 'fraggle-rock', //pick a random string to make the hash that is generated secure
      store: new MongoStore({ mongooseConnection: dbConnection }),
      resave: false, //required
      saveUninitialized: false //required
  })
)

// Passport
app.use(passport.initialize())
app.use(passport.session()) // calls the deserializeUser

// Routes
app.use('/user', user)

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


/** set up routes {API Endpoints} */
// routes(router);

/** set up middlewares */
// app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(helmet())
//app.use('/static',express.static(path.join(__dirname,'static')))

// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//     app.use(express.static("client/build"));
//   }

// app.use('/api', router);

// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "./client/build/index.html"));
//   });
  

/** start server */
app.listen(PORT, () => {
    console.log(`🌎 ==> Server now on port ${PORT}!`);
  });