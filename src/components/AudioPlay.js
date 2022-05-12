import React from "react";
import VolumeUpRoundedIcon from '@mui/icons-material/VolumeUpRounded';
import audio2 from '../Audio_files/audio.mp3';

function AudioPlay(props) {
  const audio = new Audio("../Audio_files/audio.mp3")

  const playAudio = () => {
    new Audio(audio).play();
  }

  
return (
    <button onClick={playAudio} class="btn btn-primary m-2">Play <VolumeUpRoundedIcon /></button>
);
  
}

export default AudioPlay;