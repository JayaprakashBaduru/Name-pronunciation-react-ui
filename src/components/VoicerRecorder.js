import React from 'react';
import '../css/Recorder.css';
import Button from 'react-bootstrap/Button'
import MicRecorder from 'mic-recorder-to-mp3';
import axios from "axios";


const Mp3Recorder = new MicRecorder({ bitRate: 128 });

class Recorder extends React.Component {

  constructor(props){
    super(props);
    const sid = props.sid;
    console.log(sid);

    this.state = {
      isRecording: false,
      blobURL: '',
      isBlocked: false,
      audioBlob: '',
      empty_file_message: '',
      success_upload_message: '',
      fail_upload_message: ''
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
    this.setState({success_upload_message: ""}, () => {
      console.log ('success')} );
    this.setState({fail_upload_message: ""}, () => {
      console.log ('fail')} );

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
    console.log('test:',this.props.sid);

    if (this.state.audioBlob != ''){
        data.append('File', this.state.audioBlob);

        const config = {
            headers: {'content-type': 'multipart/form-data', 'Accept': 'application/json' }
        }
        axios.put('https://checkops.azurewebsites.net/speech/update?sid='+this.props.sid, data, config)
        .then((response) => {
            console.log(response.status);
            if(response.status==201) 
                this.setState({success_upload_message: "Audio uploaded!"});
        })
        .catch(function (error) {
            if (error.response) {
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
              this.setState({fail_upload_message: "Audio upload failed. Please try again."});
            }
            else if (error.request) {
              console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
            }
            console.log(error.config);
        });
        // .then(console.log('Success !'))
        // .then(this.setState({success_upload_message: "Audio uploaded!"}));

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
          <br />
          <div>
            <Button className='m-2' variant="success" onClick={this.start} disabled={this.state.isRecording}>Record</Button>
            <Button className='m-2' variant="danger" onClick={this.stop} disabled={!this.state.isRecording}>Stop</Button>
          </div>
          <br />
          <audio src={this.state.blobURL} controls="controls" />

          <div>
            <div>
                <h6 className="fail_message_color">{this.state.empty_file_message}</h6>
                <h6 className="success_message_color">{this.state.success_upload_message}</h6>
                <h6 className="fail_upload_message">{this.state.fail_upload_message}</h6>
            </div>
            {/* <button onClick={this.sendAudio} type="button">Submit</button> */}
            <Button variant="primary" className="m-2" onClick={this.sendAudio}>
              Save audio
            </Button>
          </div>
          
        </header>
      </div>
    );
  }
}

export default Recorder;