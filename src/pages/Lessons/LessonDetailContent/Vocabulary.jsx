import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

const Vocabulary = ({lesson}) => {
  return (
    <div>
      <h3>Vocabulary</h3>
      <ReactAudioPlayer src={lesson.vocabularyAudio} controls />
      
    </div>
  );
};

export default Vocabulary;
