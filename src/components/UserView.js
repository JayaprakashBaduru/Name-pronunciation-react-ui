import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/user.css';
import Public from './Public';
import Other from './Other';
import Work from './Work';
import Skills from './Skills';
import { useParams } from 'react-router-dom';

// {/* <Avatar sx={{ bgcolor: deepOrange[500] }}>{name[0]}</Avatar> */}

function UserView() {
    const { sid } = useParams();
    //   const sid = "Abdullah.Khan@gmail.com";

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phonetic, setPhonetic] = useState("");
    const [shortName, setShortName] = useState("");
    const [voicePath, setVoicePath] = useState("");
    const [custom_voice_path, setCustom_voice_path] = useState("");

    var audio_path = "";

    //dummy data
    const manager = "Jane Doe";
    const location = "Bangalore, India";
    const email = firstName + "@example.com";
    const personal_contact = "100-233-234";
    const work_contact = "234-100-340";
    const address = "Bangalore, India";
    const skills = ["Web development", "Microservices", "Python", "Java"];
    var isCustomVoice = false;

    useEffect(() => {
        const fetchUsers = async () => {
            const res = await axios.get('https://checkops.azurewebsites.net/search/profiles' + '/' + sid);
            console.log('get user data: ', res.data[0]);
            const res_data = res.data[0];
            setFirstName(res_data.firstName);
            setLastName(res_data.lastName);
            setPhonetic(res_data.phonetic);
            setShortName(res_data.shortName);
            setVoicePath(res_data.voicePath);
            setCustom_voice_path(res_data.custom_voice_path);
        }

        fetchUsers();
    }, []);

    if (custom_voice_path == "") {
        audio_path = voicePath
    }
    else {
        audio_path = custom_voice_path;
        isCustomVoice = true;
    }

    return (
        <div class="container">
            <div class="main-body">
                <div class="row">
                    <div class="col-lg-12">
                        <div>
                            <div class="card-body">
                                <h2>Hello {firstName} {lastName}!</h2>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4">
                        <div class="card">
                            <div class="card-body">
                                <Public sid={sid} first_name={firstName} last_name={lastName} preferred_name={shortName} audio={audio_path} isCustomVoice={isCustomVoice} phonetic={phonetic} />
                                <hr class="my-4"></hr>
                                <Other manager={manager} location={location} />
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-8">
                        <Work first_name={firstName} last_name={lastName} email={email} personal_contact={personal_contact} work_contact={work_contact} address={address} />
                        <div class="row">
                            <div class="col-sm-12">
                                <Skills skills={skills} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserView;
