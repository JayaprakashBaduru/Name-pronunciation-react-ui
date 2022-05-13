import React from 'react';
import '../css/Recorder.css';
import Button from 'react-bootstrap/Button'
import MicRecorder from 'mic-recorder-to-mp3';
import Browsefile from './BrowseAudio';
import axios from "axios";


const Mp3Recorder = new MicRecorder({ bitRate: 128 });

class Recorder extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isRecording: false,
      blobURL: '',
      isBlocked: false,
      audioBlob: '',
      empty_file_message: '',
      success_upload_message: ''
    };
  }

  start = () => {
    if (this.state.isBlocked) {
      console.log('Permission Denied');
    } else {
      Mp3Recorder
        .start()
        .then(() => {
          this.setState({ isRecording: true });
        }).catch((e) => console.error(e));
    }

    this.setState({empty_file_message: ""}, () => {
      console.log ('empty file message reset')} );

  };

  stop = () => {
    Mp3Recorder
      .stop()
      .getMp3()
      .then(([buffer, blob]) => {
        const blobURL = URL.createObjectURL(blob)
        this.setState({ blobURL, isRecording: false, audioBlob: blob });
      }).catch((e) => console.log(e));
  };

  sendAudio = () => {
    let data = new FormData();

    if (this.state.audioBlob != ''){
        data.append('File', this.state.audioBlob);

        const config = {
            headers: {'content-type': 'multipart/form-data', 'Accept': 'application/json' }
        }
        axios.put('http://192.168.0.100:8081/speech/update?sid=a716278', data, config)
        .then(console.log('Success !'))
        .then(this.setState({success_upload_message: "Audio uploaded!"}));

    }
    else{
        this.setState({empty_file_message: "Empty file submitted!"}, () => {
            console.log ('no file sent!')} );
    }

  };

  componentDidMount() {
    navigator.getUserMedia({ audio: true },
      () => {
        console.log('Permission Granted');
        this.setState({ isBlocked: false });
      },
      () => {
        console.log('Permission Denied');
        this.setState({ isBlocked: true })
      },
    );
  }

  render(){
    return (
      <div className="App">
        <header>
          <div>
            <Button className='m-2' variant="primary" onClick={this.start} disabled={this.state.isRecording}>Record</Button>
            <Button className='m-2' variant="danger" onClick={this.stop} disabled={!this.state.isRecording}>Stop</Button>
          </div>
          <br />
          <audio src={this.state.blobURL} controls="controls" />

          <div>
            <div>
                <h6 className="fail_message_color">{this.state.empty_file_message}</h6>
                <h6 className="success_message_color">{this.state.success_upload_message}</h6>
            </div>
            <button onClick={this.sendAudio} type="button">Submit</button>
          </div>
          
        </header>
      </div>
    );
  }
}

export default Recorder;