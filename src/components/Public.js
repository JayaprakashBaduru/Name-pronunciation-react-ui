import Avatar from '@mui/material/Avatar';
import '../css/personal.css';
import { deepOrange, orange } from '@mui/material/colors';
import VolumeUpRoundedIcon from '@mui/icons-material/VolumeUpRounded';
import React, { useState } from "react";
import { Modal, Button, DropdownButton, Dropdown } from "react-bootstrap";
import Recorder from './VoicerRecorder';
import Browsefile from './BrowseAudio';
import Optout from './Optout';


function Public(props) {
    const [showModal, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showModal2, setShow2] = useState(false);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    const [showModal3, setShow3] = useState(false);

    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);

    const [showModal4, setShow4] = useState(false);

    const handleClose4 = () => setShow4(false);
    const handleShow4 = () => setShow4(true);


    return (
        <div class="d-flex flex-column align-items-center text-center">
            {/* <img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="Admin" class="rounded-circle p-1 mt-2 bg-primary" width="170" /> */}
            <Avatar sx={{ bgcolor: orange[500], width: 170, height: 170, fontSize: 60, marginTop: 3 }}>{props.first_name[0]}{props.last_name[0]}</Avatar>
            <div class="mt-3">
                <h4>{props.first_name} {props.last_name}</h4>
                <p class="text-secondary mb-1">SID : {props.sid}</p>
                <p class="text-secondary mb-1">Preferred name : {props.preferred_name} (Phonetics: {props.phonetic})</p>
                <hr />
                <p class="text-bold font-size-sm"> Name pronunciation : </p>
                <div className='audio_btns'>
                    <button class="btn btn-primary m-2" onClick={handleShow2}>Play <VolumeUpRoundedIcon /></button>
                    {/* <button class="btn btn-outline-primary m-2" onClick={handleShow}>Edit</button> */}
                    {/* <DropdownButton id="dropdown-basic-button" title="Edit">
                        <Dropdown.Item onClick={handleShow}>Record audio</Dropdown.Item>
                        <Dropdown.Item onClick={handleShow3}>Upload audio file</Dropdown.Item>
                        <Dropdown.Item disabled={!props.isCustomVoice} onClick={handleShow4}>Opt out of custom audio</Dropdown.Item>
                    </DropdownButton> */}
                </div>
            </div>

            {/* <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit name pronunciation : </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Please record your name :
                    <Recorder sid={props.sid} />
                </Modal.Body>
                <Modal.Footer>
                    <div></div>
                </Modal.Footer>
            </Modal> */}

            <Modal show={showModal2} onHide={handleClose2}>
                <Modal.Header closeButton>
                    <Modal.Title>Listen to name pronunciation: </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* <audio
            controls
            src='http://DESKTOP-20M.local:8080/download/audio?q=L1VzZXJzL2F3YW5pa2EvaGFja2F0aG9uL2F1ZGlwLm1wMw=='>
                Your browser does not support the
                <code>audio</code> element.
        </audio> */}
                    <audio src={props.audio} controls="controls" />
                    {/* <audio src='https://checkops.azurewebsites.net/download/audio?q=L2hvbWUvc2l0ZS93d3dyb290L2E3MTYyMDAtZGVmLWZpbGUud2F2' controls="controls" /> */}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose2}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* <Modal show={showModal3} onHide={handleClose3}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit name pronunciation : </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Upload an audio file :
                    <Browsefile sid={props.sid} />
                </Modal.Body>
                <Modal.Footer>
                    <div></div>
                </Modal.Footer>
            </Modal> */}

            {/* <Modal show={showModal4} onHide={handleClose4}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit name pronuncication : </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Opt of of custom voice option ?
                    <Optout sid={props.sid} />
                </Modal.Body>
                <Modal.Footer>
                    <div></div>
                </Modal.Footer>
            </Modal> */}

        </div>
    );
}

export default Public;
