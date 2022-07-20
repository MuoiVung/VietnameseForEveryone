import React from 'react';
import classes from '../Lesson.module.css';

const Transcript = ({lesson, display}) => {
  return (
    <div
      className={classes.transcript_container}
      id="transcripts"
      style={{display: `${display}`}}
    >
      <div className={classes.transcript_introduction}>
        <h4>{`INTRODUCTION`}</h4>
        {lesson.transcripts.introduction
          .split ('br')
          .map ((value, index) => <p key={index}>{value}</p>)}
      </div>
      <div className={classes.transcript_dialog}>
        <h4>{`DIALOGUE`}</h4>
        {lesson.transcripts.dialog
          .split ('br')
          .map ((value, index) => <p key={index}>{value}</p>)}
      </div>
    </div>
  );
};

export default Transcript;
