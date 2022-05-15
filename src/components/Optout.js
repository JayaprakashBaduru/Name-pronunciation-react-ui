import React, {Component} from "react";
import '../css/Recorder.css';
import '../css/SendAudio.css';
import Button from 'react-bootstrap/Button'
import axios from "axios";

class Optout extends Component {
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


    sendAudio = () => {
        console.log('test:',this.props.sid);
        let data = new FormData();

       //send empty file
        data.append('File', '');

        const config = {
            headers: {'content-type': 'multipart/form-data', 'Accept': 'application/json' }
        }
        axios.put('https://checkops.azurewebsites.net/speech/update?sid='+this.props.sid, data, config)
        .then((response) => {
            console.log(response.status);
            if(response.status==201 ||response.status==200) 
                this.setState({success_upload_message: "Opted out successfully!"});
        })
        .catch((error) => {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
                this.setState({success_upload_message: "Opt-out failed. Please try again."});
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
  
    render() {
        return (
            <div className="App">
                <header>
                Note: This will delete the custom voice recording for your name.
                <br />
                <div>
                    <div>
                        <h6 className="fail_message_color">{this.state.empty_file_message}</h6>
                        <h6 className="success_message_color">{this.state.success_upload_message}</h6>
                    </div>
                    {/* <button onClick={this.sendAudio} type="button">Submit</button> */}
                    <Button variant="primary" className="m-2" onClick={this.sendAudio}>
                        Opt Out
                    </Button>
                </div>
                </header>
            </div>
        )
    }

  
}

export default Optout;