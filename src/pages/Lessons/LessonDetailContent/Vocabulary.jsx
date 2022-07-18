import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import Example from '../CustomHooks/Example';
import ShowHide from '../CustomHooks/Hide';
import classes from '../Lesson.module.css'

const Vocabulary = ({ lesson }) => {

  return (
    <div className={classes.vocabulary_container} id='vocabulary'>
      <div className={classes.vocabulary_header}>
        <h3>Vocabulary</h3>
        <ShowHide />
      </div>
      <ReactAudioPlayer src={lesson.vocabularyAudio} controls />
      {
        lesson.vocabulary && lesson.vocabulary.map((vocab, index) => (
          <div key={index}>
            <div className={classes.vocabulary_item}>
              <p className={classes.vocabulary_item_br}></p>
              <div className={classes.vocabulary_item_difenition}>
                <Example className={classes.vocabulary_item_icon}></Example>
                <div>
                  <p className={classes.vocabulary_item_vn}>{vocab.vn}</p>
                  <p className={classes.vocabulary_item_eng}>{vocab.eng}</p>
                </div>
              </div>
              <div className={classes.vocabulary_item_example}>
                <p>{vocab.example}</p>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default Vocabulary;
