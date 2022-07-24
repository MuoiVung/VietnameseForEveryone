import React from 'react';
import classes from '../Lesson.module.css';
import ReactAudioPlayer from 'react-audio-player';

const Dialogue = ({lesson, displayDialog}) => {
  return (
    <div
      style={{display: `${displayDialog}`}}
      className={classes.dialogue_content}
    >
      <ReactAudioPlayer src={lesson.dialogueAudio} controls />
      <div className={classes.dialogue_textVn}>
        <h4>Vietnamese</h4>
        {lesson.dialogue.vn
          .split ('br')
          .map ((value, index) => <p key={index}>{value}</p>)}
      </div>
      <div className={classes.dialogue_textEng}>
        <h4>English</h4>
        {lesson.dialogue.eng
          .split ('br')
          .map ((value, index) => <p key={index}>{value}</p>)}
      </div>

    </div>
  );
};

export default Dialogue;
