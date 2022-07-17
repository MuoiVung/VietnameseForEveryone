import React from 'react'
import classes from '../Lesson.module.css';
import ReactAudioPlayer from 'react-audio-player';
import ShowHide from '../CustomHooks/ShowHide';

const Dialogue = ({lesson}) => {
  return (
    <div className={classes.ld_dialogue} id='dialogue'>
    <div className={classes.ld_dialogueLeft}>
      <h3>Dialogue - Vietnames</h3>
      <ReactAudioPlayer src={lesson.dialogueAudio} controls />
      <p>{lesson.dialogText}</p>
    </div>
    <div>
        <ShowHide/>
    </div>
  </div>
  )
}

export default Dialogue