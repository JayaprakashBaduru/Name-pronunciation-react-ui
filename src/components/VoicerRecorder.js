import React from 'react';
import '../css/Recorder.css';
import Button from 'react-bootstrap/Button'
import MicRecorder from 'mic-recorder-to-mp3';

const Mp3Recorder = new MicRecorder({ bitRate: 128 });

class Recorder extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isRecording: false,
      blobURL: '',
      isBlocked: false,
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
  };

  stop = () => {
    Mp3Recorder
      .stop()
      .getMp3()
      .then(([buffer, blob]) => {
        const blobURL = URL.createObjectURL(blob)
        this.setState({ blobURL, isRecording: false });
      }).catch((e) => console.log(e));
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
        <header className="App-header">
          <div>
            <Button className='m-2' variant="primary" onClick={this.start} disabled={this.state.isRecording}>Record</Button>
            <Button className='m-2' variant="danger" onClick={this.stop} disabled={!this.state.isRecording}>Stop</Button>
          </div>
          <br />
          <audio src={this.state.blobURL} controls="controls" />
        </header>
      </div>
    );
  }
}

export default Recorder;