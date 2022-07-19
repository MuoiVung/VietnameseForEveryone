import React, {useState} from 'react';
import ReactAudioPlayer from 'react-audio-player';
import Example from '../CustomHooks/Example';
import Hide from '../CustomHooks/Hide';
import classes from '../Lesson.module.css';

const Vocabulary = ({lesson}) => {
  const [display, setDisplay] = useState ('none');

  return (
    <div className={classes.vocabulary_container} id="vocabulary">
      <div className={classes.vocabulary_header}>
        <h3>Vocabulary</h3>
        <Hide />
      </div>
      <ReactAudioPlayer src={lesson.vocabularyAudio} controls />
      {lesson.vocabulary &&
        lesson.vocabulary.map ((vocab, index) => (
          <div key={index}>
            <div className={classes.vocabulary_item}>
              <p className={classes.vocabulary_item_br} />
              <div className={classes.vocabulary_item_difenition}>
                <Example
                  className={classes.vocabulary_item_icon}
                  setDisplay={setDisplay}
                />
                <div>
                  <p className={classes.vocabulary_item_vn}>{vocab.vn}</p>
                  <p className={classes.vocabulary_item_eng}>{vocab.eng}</p>
                </div>
              </div>
              <div
                style={{display: `${display}`}}
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
