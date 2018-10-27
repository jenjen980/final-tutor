import React, { Component } from 'react';
import axios from 'axios';
import Dropzone from 'react-dropzone';
import request from 'superagent';
// import { Image } from 'react-bootstrap';

const cloudinary_upload_preset = "Default";
const cloudinary_upload_url = "https://api.cloudinary.com/v1_1/dm1qubnlu/image/upload";
// const cloudinary_fetch_url = "https://api.cloudinary.com/v1_1/dm1qubnlu/image/fetch";



class Cloud extends Component {


  constructor(props){
    super(props);
  
  this.state = {
    selectedFile: "",
    uploadedCloudinary: "",
    fetchCloudinary: ""
  };
}

onImageDrop(files){
  this.setState({
    uploadedFile: files[0]
  });
  this.handleImageUpload(files[0]);
};

handleImageUpload(file) {
  let upload = request.post(cloudinary_upload_url)
                      .field('upload_preset',cloudinary_upload_preset)
                      .field('file', file);

  upload.end((err, response) => {
    if (err) {
      console.error(err);
    }

    if (response.body.secure_url !== '') {
      this.setState({
        uploadedCloudinary: response.body.secure_url
      });
      this.props.onImageUpdate(response.body.secure_url);
    }
  });
}

fileUploadHandler = () => {
  const fd = new FormData();
  fd.append("upload_preset", cloudinary_upload_preset);
  // fd.append("file", file);
  fd.append("file", this.state.selectedFile,this.state.selectedFile.name);
  axios.post(cloudinary_upload_url, fd, {
    onUploadProgress: ProgressEvent => {
      console.log("upload progress" + Math.round(ProgressEvent.loaded / ProgressEvent.total *100) + "%")
    
    }
  })
  .then(res => {
    console.log(res);
    // if res.statusText === "OK" alert("Thanks");
  })
  .catch((err) => {
    console.log(err);
  })
}

  
  render() {
    return (
      <div className="Image">
          <Dropzone
            id="direct-upload-dropzone"
            multiple={false}
            accept="image/*"
            // style={{ position: 'relative' }}
            // onChange={this.fileUploadHandler.bind(this)}
            onDrop={this.onImageDrop.bind(this)}>
            
            <p>Drop an image or click to select a file to upload.</p>
         </Dropzone>

      <input type="file" onChange={this.fileSelectedHandler}/>
      <button onClick={this.fileUploadHandler}>Upload</button>
      {this.state.uploadedCloudinary === "" ? null:
      <div>
        <p>{this.state.uploadedCloudinary.name}</p>
        <img id="reviewImage" src={this.state.uploadedCloudinary} alt="preview" />
        </div>}
      </div>
    
    );
  }
}



export default Cloud;
