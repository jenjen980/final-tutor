import React, { Component } from 'react';
import axios from 'axios';
import Dropzone from 'react-dropzone';

const cloudinary_upload_preset = "Default";
const cloudinary_upload_url = "https://api.cloudinary.com/v1_1/dm1qubnlu/image/upload";
const cloudinary_fetch_url = "https://api.cloudinary.com/v1_1/dm1qubnlu/image/fetch";



class Cloud extends Component {


  constructor(props){
    super(props);
  
  this.state = {
    selectedFile: "",
    uploadedCloudinary: "",
    fetchCloudinary: ""
  };
}

onPhotoSelected(file) {
  this.setState({
    imageFile: file[0]

  });
   this.fileUploadHandler(file[0]);
}


  fileSelectedHandler = event => {
    this.setState({
      selectedFile: event.target.files[0]
    })
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
          {/* <Dropzone
            id="direct-upload-dropzone"
            multiple={false}
            accept="image/*"
            // style={{ position: 'relative' }}
            onDrop={this.onPhotoSelected.bind(this)}
          /> */}

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
