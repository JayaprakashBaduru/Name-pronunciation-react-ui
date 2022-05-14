import React, {Component} from "react";
import '../css/Recorder.css';
import '../css/SendAudio.css';
import Button from 'react-bootstrap/Button'
import axios from "axios";

class Browsefile extends Component {
    constructor(props){
        super(props);
        const sid = props.sid;
        console.log(sid);

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
        console.log('test:',this.props.sid);
        let data = new FormData();

        if(this.state.blobURL != ''){
            data.append('File', this.state.audio);

            const config = {
                headers: {'content-type': 'multipart/form-data', 'Accept': 'application/json' }
            }
            axios.put('https://checkops.azurewebsites.net/speech/update?sid='+this.props.sid, data, config)
            .then((response) => {
                console.log(response.status);
                if(response.status==201 ||response.status==200) this.setState({success_upload_message: "Audio uploaded!"});
            })
            // .then(console.log('Success !'))
            // .then(this.setState({success_upload_message: "Audio uploaded!"}));
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
                    {/* <button onClick={this.sendAudio} type="button">Submit</button> */}
                    <Button variant="primary" className="m-2" onClick={this.sendAudio}>
                        Save audio
                    </Button>
                </div>
                </header>
            </div>
        )
    }

  
}

export default Browsefile;