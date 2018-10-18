// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
// import PropTypes from 'prop-types';
// // import { CloudinaryContext, Image } from 'cloudinary-react';
// // import { photosFetched } from '../actions';
// // import PhotoListContainer from './PhotoList';
// // import PhotosUploaderContainer from './PhotosUploader';
// // import { fetchPhotos } from '../utils/CloudinaryService';

// import Cloud from "../Cloud";

// class Fetch extends Component {
//     componentDidMount() {
//         fetchPhotos(this.props.cloudName).then(this.props.onPhotosFetched);
//     }

//     render() {  
//         return (
//             // <CloudinaryContext
//                 cloudName={this.props.cloudName}
//                 uploadPreset={this.props.uploadPreset}
//             // >
//                 {/*This will render the image fetched from a remote HTTP URL using Cloudinary*/}
//                 <Cloud
//                     type="fetch"
//                     publicId="https://res.cloudinary.com/dm1qubnlu/image/upload/v1538512505/tutor/xosg4qa5tqthemcwcc5u.jpg"
//                     Transformation gravity="face" width="150" height="150" crop="thumb"
//                     // publicId="https://cloudinary.com/images/logo.png"
//                     fetch-format="auto"
//                     quality="auto"
//                 />
//         );
//     }
// }

// App.propTypes = {
//     cloudName: PropTypes.string,
//     uploadPreset: PropTypes.string,
//     onPhotosFetched: PropTypes.func,
// };

// App.contextTypes = {
//     cloudName: PropTypes.string,
//     uploadPreset: PropTypes.string,
// };

// const AppContainer = connect(
//     null,
//     { onPhotosFetched: photosFetched }
// )(App);
// Object.assign(AppContainer.contextTypes, App.contextTypes);

// export default Fetch;









// import cloudinary_fetch_url from "./Cloud";

// // export const url = (publicId, options) => {
// //     const scOptions = Util.withSnakeCaseKeys(options);
// //     const cl = CoreCloudinary.new();
// //     return cl.url(publicId, scOptions);
// // };

// export const fetchPhotos = cloudName => {
//     // instead of maintaining the list of images, we rely on the 'myphotoalbum' tag
//     // and simply retrieve a list of all images with that tag.
//     // the version property is used for cache bust (lists are cached by the CDN for 1 minute)
//     // *************************************************************************
//     // Note that this practice is DISCOURAGED in production code and is here
//     // for demonstration purposes only
//     // *************************************************************************
//     const options = {
//         cloudName: cloudName,
//         format: 'json',
//         type: 'list',
//         version: Math.ceil(new Date().getTime() / 1000),
//     };

//     const cloudinary_fetch_url = cloudinary_fetch_url('Default', options);

//     return fetch(cloudinary_fetch_url)
//         .then(res => res.text())
//         .then(text => (text ? JSON.parse(text).resources : []));
// };
