// import { O_EXCL } from 'constants';

const path = require('path');



// // console.log(path.join(__dirname, 'public'));


module.exports = {

    entry: './src/App.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },

    module:{
        rules:[{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }]
    },
        devServer: {
            contentBase: path.join(__dirname, 'public')
        }

    };
