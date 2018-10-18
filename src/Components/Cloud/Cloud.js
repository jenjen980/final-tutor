import React, { Component } from 'react';
import axios from 'axios';

const cloudinary_upload_preset = "Default";
const cloudinary_upload_url = "https://api.cloudinary.com/v1_1/dm1qubnlu/image/upload";
const cloudinary_fetch_url = "https://api.cloudinary.com/v1_1/dm1qubnlu/image/fetch";

class Cloud extends Component {


  constructor(props){
    super(props);
  
  this.state = {
    // selectedFile: null
    uploadedCloudinary: "",
    fetchCloudinary: ""
  };
}


  fileSelectedHandler = event => {
    this.setState({
      selectedFile: event.target.files[0]
    })
  }
  
  fileUploadHandler = () => {
    const fd = new FormData();
    fd.append("upload_preset", cloudinary_upload_preset);
    fd.append("file", this.state.selectedFile,this.state.selectedFile.name);
    axios.post(cloudinary_upload_url, fd, {
      onUploadProgress: ProgressEvent => {
        console.log("upload progress" + Math.round(ProgressEvent.loaded / ProgressEvent.total *100) + "%")
      
      }
    })
    .then(res => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    })
  }
  
  render() {
    return (
      <div className="Image">
      <input type="file" onChange={this.fileSelectedHandler}/>
      <button onClick={this.fileUploadHandler}>Upload</button>
      {this.state.uploadedCloudinary === "" ? null:
      <div>
        <img id="reviewImage" src={this.state.uploadedCloudinary} alt="preview" />
        </div>}
      </div>
    
    );
  }
}

export default Cloud;
