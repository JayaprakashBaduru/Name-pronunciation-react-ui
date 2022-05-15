import Button from 'react-bootstrap/Button'
import React, { useState } from "react";
import axios from "axios";
import '../css/SendAudio.css';


function Work(props) {
    const sid = props.sid;
    const firstName = props.first_name;
    const lastName = props.last_name;
    const shortName = props.preferred_name;

    const [prefName, setPrefName] = useState(shortName);
    const [successMessage, setSuccessMessage] = useState("");

    const onChange = e => {
        setPrefName(e.target.value);
    }

    // data for post request
    const text = prefName;
    const gender = "M";
    const lang = "en";
    const iso_country = "US";
 

    const onClick = () => {
        console.log("updated pref_name: ", prefName);

        const body = {
            "sid": sid,
            "firstName": firstName,
            "lastName": lastName,
            "text": text,
            "gender": gender,
            "lang": lang,
            "iso_country": iso_country,
            "shortName": prefName
        }

        const headers = { 
            'Content-Type': 'application/json'
        };

        axios.post('https://checkops.azurewebsites.net/speech/create', body, { headers })
        .then((response) => {
            console.log(response.status);
            if(response.status==201 ||response.status==200) 
            setSuccessMessage("Preferred name successfully updated!");
        })
        .catch(function (error) {
            if (error.response) {
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
              this.setState({success_upload_message: "Audio upload failed. Please try again."});
            }
            else if (error.request) {
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
            }
            console.log(error.config);
        })


    }

    return (
        <div class="card">
            <div class="card-body">
                <div class="row mb-3">
                    <div class="col-sm-3">
                        <h6 class="mb-0">Full Name</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                        <input type="text" class="form-control" value={props.first_name + ' ' + props.last_name} />
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col-sm-3">
                        <h6 class="mb-0">Email</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                        <input type="text" class="form-control" value={props.sid} />
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col-sm-3">
                        <h6 class="mb-0">Personal contact</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                        <input type="text" class="form-control" value={props.personal_contact} />
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col-sm-3">
                        <h6 class="mb-0">Work contact</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                        <input type="text" class="form-control" value={props.work_contact} />
                    </div>
                </div>
                {/* <div class="row mb-3">
                    <div class="col-sm-3">
                        <h6 class="mb-0">Address</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                        <input type="text" class="form-control" value={props.address} />
                    </div>
                </div> */}
                <div class="row mb-3">
                    <div class="col-sm-3">
                        <h6 class="mb-0">Preferred name</h6>
                    </div>
                    <div class="col-sm-7 text-secondary">
                        <input type="search" class="form-control" onChange={onChange} placeholder="Enter preferred name" defaultValue={props.preferred_name} />
                    </div>
                    <div class="col-sm-2 text-secondary">
                        <Button onClick={onClick}>Update</Button>
                    </div>
                    <div>
                        <h6 className="success_message_color">{successMessage}</h6>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Work;
