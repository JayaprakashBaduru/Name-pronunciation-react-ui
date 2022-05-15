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
            success_upload_message: '',
            fail_upload_message: ''
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
        this.setState({success_upload_message: ""}, () => {
            console.log ('success')} );
        this.setState({fail_upload_message: ""}, () => {
            console.log ('fail')} );

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
                if(response.status==201 ||response.status==200) 
                    this.setState({success_upload_message: "Audio successfully uploaded!"});
            })
            .catch(function (error) {
                if (error.response) {
                  console.log(error.response.data);
                  console.log(error.response.data.errors);
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
                <header>
                <br />
                <br />
                <div onSubmit={this.onFormSubmit}>
                    <input type="file" name="file" onChange={(e) => this.onChange(e)}/>
                </div>
                <br />
                    <audio src={this.state.blobURL} controls="controls" />
                <br />
                <div>
                    <div>
                        <h6 className="fail_message_color">{this.state.empty_file_message}</h6>
                        <h6 className="success_message_color">{this.state.success_upload_message}</h6>
                        <h6 className="fail_message_color">{this.state.fail_upload_message}</h6>
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