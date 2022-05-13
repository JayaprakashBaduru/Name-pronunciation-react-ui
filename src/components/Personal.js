import Avatar from '@mui/material/Avatar';
import { deepOrange, orange } from '@mui/material/colors';
import VolumeUpRoundedIcon from '@mui/icons-material/VolumeUpRounded';
import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import AudioPlay from './AudioPlay';
import Recorder from './VoicerRecorder';
import { Audiorec } from './audiorec';


function Personal(props) {
  let audio = new Audio("../Audio_files/audio.mp3")

  const [showModal, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showModal2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  return (
    <div class="d-flex flex-column align-items-center text-center">
      {/* <img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="Admin" class="rounded-circle p-1 mt-2 bg-primary" width="170" /> */}
      <Avatar sx={{ bgcolor: orange[500], width:170, height:170, fontSize:60, marginTop:3 }}>{props.first_name[0]}{props.last_name[0]}</Avatar>
      <div class="mt-3">
        <h4>{props.first_name} {props.last_name}</h4>
        <p class="text-secondary mb-1">Preferred name : {props.preferred_name}</p>
        <hr />
        <p class="text-bold font-size-sm"> Name pronunciation : </p>
        
        <button class="btn btn-primary m-2" onClick={handleShow2}>Play <VolumeUpRoundedIcon /></button> 
        <button class="btn btn-outline-primary m-2" onClick={handleShow}>Edit</button>
      </div>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit name pronunication : </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Please record your name :
          <Recorder />
          {/* <Audiorec /> */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showModal2} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>Listen to name pronunciation: </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <audio
            controls
            src='https://github.com/awamay/Name-pronunciation-react-ui/blob/develop/src/Audio_files/audio.mp3'>
                Your browser does not support the
                <code>audio</code> element.
        </audio>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose2}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose2}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Personal;
