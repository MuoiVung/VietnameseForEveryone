import React from 'react'
import classes from '../Lesson.module.css';
import ReactAudioPlayer from 'react-audio-player';
import ShowHide from '../CustomHooks/Hide';

const Dialogue = ({ lesson }) => {
  
  return (
    <div className={classes.dialogue_container} id='dialogue'>
      <div className={classes.dialogue_header}>
        <h3>Dialogue - Vietnames</h3>
        <ShowHide />
      </div>
      <ReactAudioPlayer src={lesson.dialogueAudio} controls />
      <div >
        <p>{lesson.dialogue.vn}</p>
        <p>{lesson.dialogue.eng}</p>
      </div>


    </div>
  )
}

export default Dialogue