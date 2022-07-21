import React, {useState} from 'react';
import ReactAudioPlayer from 'react-audio-player';
import Example from '../CustomHooks/Example';
import classes from '../Lesson.module.css';

const Vocabulary = ({lesson, display}) => {
  const [displayExample, setDisplayExample] = useState ('none');

  return (
    <div
      className={classes.vocabulary_container}
      id="vocabulary"
      style={{display: `${display}`}}
    >
      <ReactAudioPlayer src={lesson.vocabularyAudio} controls />
      {lesson.vocabulary &&
        lesson.vocabulary.map ((vocab, index) => (
          <div key={index}>
            <div className={classes.vocabulary_item}>
              <p className={classes.vocabulary_item_br} />
              <div className={classes.vocabulary_item_difenition}>
                <Example
                  className={classes.vocabulary_item_icon}
                  setDisplayExample={setDisplayExample}
                />
                <div>
                  <p className={classes.vocabulary_item_vn}>{vocab.vn}</p>
                  <p className={classes.vocabulary_item_eng}>{vocab.eng}</p>
                </div>
              </div>
              <div
                style={{display: `${displayExample}`}}
                className={classes.vocabulary_item_example}
              >
                {vocab.example
                  .split ('br')
                  .map ((value, index) => <p key={index}>{value}</p>)}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Vocabulary;
