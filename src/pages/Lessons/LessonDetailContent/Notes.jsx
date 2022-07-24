import React from 'react';
import classes from '../Lesson.module.css';

const Notes = ({lesson, displayNote}) => {
  return (
    <div style={{display: `${displayNote}`}} className={classes.notes_content}>
      <div className={classes.notes_forcus}>
        <h4>Lesson Forcus</h4>
        {lesson.notes.forcus_sub
          .split ('br')
          .map ((value, index) => <b key={index}><p>{value}</p></b>)}
        {lesson.notes.forcus
          .split ('br')
          .map ((value, index) => <p key={index}>{value}</p>)}
      </div>
      <div className={classes.notes_phrase}>
        <h4>{`Key Vocabulary & Phrases`}</h4>
        {lesson.notes.phrases
          .split ('br')
          .map ((value, index) => <p key={index}>{value}</p>)}
      </div>
      <div className={classes.notes_cultural}>
        <h4>Cultural Insights</h4>
        {lesson.notes.cultural
          .split ('br')
          .map ((value, index) => <p key={index}>{value}</p>)}
      </div>
    </div>
  );
};
export default Notes;
