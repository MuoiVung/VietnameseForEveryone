import React from 'react';
import classes from '../Lesson.module.css';

const Transcript = ({lesson}) => {
  console.log();
  return (
    <div className={classes.transcript_container} id='transcripts'>
      <h3>{`Lesson Transcript`}</h3>
      <h4>{`INTRODUCTION`}</h4>
      <p>{lesson.transcripts.introduction}</p>
      <h4>{`DIALOGUE`}</h4>
      <p>{lesson.transcripts.dialog}</p>
    </div>
  );
};

export default Transcript;
