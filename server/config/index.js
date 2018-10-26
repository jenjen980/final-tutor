//Connect to Mongo database
const mongoose = require('mongoose')
mongoose.Promise = global.Promise

//your local database url

const url = process.env.MONGODB_URI || "mongodb://jenndean:sand90@ds141633.mlab.com:41633/simple-mern-passport" //change this to what we have

    mongoose.connect(url, { useNewUrlParser: true })
    .then(function() {
        console.log("connected to mongo");
      })
      .catch(function(err) {
        console.log("error connecting to mongo");
        console.log(err);
      });


 module.exports = mongoose.connection