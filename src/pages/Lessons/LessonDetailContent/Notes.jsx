import React from 'react';
import classes from '../Lesson.module.css';

const Notes = ({lesson}) => {

  return (
    <div className={classes.notes_container} id="notes">
      <h3>Notes</h3>
      <div>
      <h4><i>Lesson Forcus</i></h4>
      <p>{lesson.notes.forcus}</p>
      </div>
      <div>
        <h4>{`Key Vocabulary & Phrases`}</h4>
        <p>{lesson.notes.phrases}</p>
      </div>
      <div>
        <h4>Cultural Insights</h4>
        <p>{lesson.notes.cultural}</p>
      </div>
    </div>
  )
}
export default Notes;
