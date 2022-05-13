import '../css/App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navigation from '../components/Navbar';
import UserList from '../components/UserList';;

function GetAudio() {
    const [audio, setAudio] = useState([]);

    const user = {
        "sid":"u851838",
        "text":"Sujit",
        "gender":"M",
        "lang":"en",
        "iso_country":"US"
    };

    //POST request with body equal on data in JSON format
    fetch('http://192.168.0.100:8080/speech/default', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
    })
    .then((response) => response.json())
    //Then with the data from the response in JSON...
    .then(console.log('Success:'))
    //Then with the error genereted...
    .catch((error) => {
    console.error('Error:', error);
    });
    
    return (
        <div>
        
        <br class="my-2"></br>
        
        </div>
    );
}

export default GetAudio;
