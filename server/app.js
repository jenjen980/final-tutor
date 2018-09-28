// server/app.js

/** require dependencies */
const express = require("express");
const routes = require('./routes/');
const path = require("path");
const mongoose = require('mongoose');
// const cors = require('cors')
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3001;
// const helmet = require('helmet')
const cloudinary = require('cloudinary');

const app = express();
const router = express.Router();
// const url = process.env.MONGODB_URI || "mongodb://localhost:27017/final-tutor" //change this to what we have

/** configure cloudinary */
cloudinary.config({
    cloud_name: 'YOUR_CLOUDINARY_NAME_HERE',
    api_key: 'YOUR_CLOUDINARY_API_KEY_HERE',
    api_secret: 'YOUR_CLOUDINARY_API_SECRET_HERE'
})

/** connect to MongoDB datastore */
try {
    mongoose.connect(url, {
        //useMongoClient: true
    })    
} catch (error) {
    
};

// let port = 5000 || process.env.PORT

/** set up routes {API Endpoints} */
routes(router);

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