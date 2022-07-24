import React, {useState} from 'react';
import ReactAudioPlayer from 'react-audio-player';
import Example from '../CustomHooks/Example';
import classes from '../Lesson.module.css';

const Vocabulary = ({lesson, displayVocab}) => {
  const [displayExample, setDisplayExample] = useState ('none');
  const [a, setA] = useState (null);
  return (
    <div
      style={{display: `${displayVocab}`}}
      className={classes.vocabulary_content}
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
                  order={index}
                  a={a}
                  setA={setA}
                />
                <div>
                  <p className={classes.vocabulary_item_vn}>{vocab.vn}</p>
                  <p className={classes.vocabulary_item_eng}>{vocab.eng}</p>
                </div>
              </div>
              <div
                style={{display: `${displayExample}`}}
                className={`classes.vocabulary_item_example_${index}`}
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
