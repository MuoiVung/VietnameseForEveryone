import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import classes from '../Lesson.module.css'

const Vocabulary = ({lesson}) => {
  return (
    <div className={classes.vocabulary_container} id='vocabulary'>
      <h3>Vocabulary</h3>
      <ReactAudioPlayer src={lesson.vocabularyAudio} controls />
      
    </div>
  );
};

export default Vocabulary;
