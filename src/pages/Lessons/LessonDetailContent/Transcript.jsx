import React from 'react';
import classes from '../Lesson.module.css';

const Transcript = () => {
  return (
    <div className={classes.transcript_container} id='transcripts'>
      <h3>{`Lesson Transcript`}</h3>
      <p>{`INTRODUCTION`}</p>
      <p
      >{`Becky: Hi everyone! I’m Becky. Welcome to VietnamesePod101.com This is the Absolute Beginner Series, Season 1, Lesson 1- Introducing Yourself in Vietnamese.
Huyen: Xin chào! I’m Huyen.
Becky: In this lesson, you will learn basic greetings and self-introduction in Vietnamese. The conversation takes place at a cafeteria and is between two students, An and Mary.
Huyen: They’re meeting each other for the first time, so they’ll be using formal Vietnamese.
Becky: Let’s listen to the conversation.`}</p>
      <p>{`DIALOGUE`}</p>
      <p>{`An: Xin chào, tôi tên là An.
Mary: Xin chào, tôi tên là Mary.
An: Rất vui được gặp bạn.
Mary: Tôi cũng vậy.`}</p>
    </div>
  );
};

export default Transcript;
