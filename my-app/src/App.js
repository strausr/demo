import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button.js';
import { Image } from 'cloudinary-react';

class App extends Component {
    constructor(props){
    super(props);
    this.state = {
      publicId: 'sample'
    };
  };

  openUploadWidget = () => {
    var component = this;
    window.cloudinary.openUploadWidget({ cloud_name: "rcstraus", upload_preset: "hqcywqj7", sources:['local','url','facebook','dropbox', 'google_photos']}, 
          function(error, result){

            if(result)            
              component.setState({ publicId: result[0].public_id });
        });
  }

  render() {
    return (
      <div className={'box'}>
                <div className={'font'}>Generate a profile pic using Cloudinary's upload widget and image transformations</div>
                <table >
                    <tbody>
                        <tr>
                            <td className={'padl'}></td>
                            <td className={'boxSmall'}>
                              <Button openUploadWidget={this.openUploadWidget} publicId={this.state.publicId}/>
                            </td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
                <br/>
                <div>
                  <span className={'pads'}>
                            <Image cloudName="rcstraus" publicId={this.state.publicId} width="300" crop="scale" effect="sepia"/>
                          </span>
                          <span className={'pads'}>
                            <Image cloudName="rcstraus" publicId={this.state.publicId} width="300" crop="scale" effect="grayscale"/>
                          </span>
                          <span className={'pads'}>
                            <Image cloudName="rcstraus" publicId={this.state.publicId} width="300" crop="scale" effect="blur:300"/>
                          </span>
                </div>
            </div>
    );
  }
}

export default App;
