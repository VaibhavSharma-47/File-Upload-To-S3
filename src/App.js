import './App.css';
import React, { Component } from 'react';
import Axios from 'axios'

class App extends Component {
  state = {
    selectedFile:null,
    fileUploadedSuccess:false,
  };

  onFileChange = event => {
    this.setState({selectedFile: event.target.files[0]});
  }

  onFileUpload = event => {
    const formData = new FormData();
    formData.append(
      "demo file",
      this.state.selectedFile,
      this.state.selectedFile.name
    )
    // Call API
    Axios.post("https://x52rbg6h5k.execute-api.us-east-1.amazonaws.com/PrdDeploy/file-upload", formData).then(()=>{
      console.log(formData);
      this.setState({ selectedFile: null });
      this.setState({ fileUploadedSuccess: true });
    })
  }
  fileData = () => {
    if (this.state.selectedFile){
      return (
      <div>
        <h2>File Details</h2>
        <p>File Name: {this.state.selectedFile.name}</p>
        <p>File Type: {this.state.selectedFile.name}</p>
        <p>Last Modified: {this.state.selectedFile.lastModifiedDate.toDateString()}</p>
      
      </div>
      )
    } else if(this.fileUploadedSuccess){
      return (
        <div>
          <br/>
          <h4>Your file has been successfully uploaded</h4>
        </div>
      )
    } else{
      return(
        <div>
          <br/>
          <h4>Choose file and upload</h4>
        </div>
      )
    }
  }
  render() {
    return (
      <div className="container">
        <h2>File upload System </h2>
        <div>
          <input type="file" onChange={this.onFileChange} />
          <button onClick={this.onFileUpload} > 
            Upload
          </button>
        </div>
        {this.fileData()}
      </div>
    )
  }
}
export default App;
