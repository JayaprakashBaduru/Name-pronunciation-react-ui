import React, {Component} from "react";
import '../css/Recorder.css';
import '../css/SendAudio.css';
import VolumeUpRoundedIcon from '@mui/icons-material/VolumeUpRounded';
import audio2 from '../Audio_files/audio.mp3';
import axios from "axios";

class Browsefile extends Component {
    constructor(props){
        super(props);
        this.state = {
            audio: {},
            blobURL: '',
            empty_file_message: '',
            success_upload_message: ''
        }
    }

    onChange(e) {
        const files = e.target.files
        console.warn("datafile", files)
        
        this.setState({blobURL: URL.createObjectURL(e.target.files[0])}, () => {
            console.log (this.state.blobURL)} );
        this.setState({audio: e.target.files[0]}, () => {
            console.log (this.state.audio)} );
        this.setState({empty_file_message: ""}, () => {
            console.log ('empty file message reset')} );

    }

    sendAudio = () => {
        let data = new FormData();

        if(this.state.blobURL != ''){
            data.append('File', this.state.audio);

            const config = {
                headers: {'content-type': 'multipart/form-data', 'Accept': 'application/json' }
            }
            axios.put('http://192.168.0.100:8081/speech/update?sid=u851872', data, config)
            .then(console.log('Success !'))
            .then(this.setState({success_upload_message: "Audio uploaded!"}));
        }
        else{
            this.setState({empty_file_message: "Please select a file!"}, () => {
                console.log ('no file selected!')} );
        }

    }
  
    render() {
        return (
            <div className="App">
                Upload an audio file :
                <header>
                <div onSubmit={this.onFormSubmit}>
                    <input type="file" name="file" onChange={(e) => this.onChange(e)}/>
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
        )
    }

  
}

export default Browsefile;