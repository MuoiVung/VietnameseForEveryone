import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import classes from './Lesson.module.css';
import ReactAudioPlayer from 'react-audio-player'
import SButton from './CustomHooks/SButton';
import Header from './Header';
import Vocabulary from './LessonDetailContent/Vocabulary';
import Notes from './LessonDetailContent/Notes';
import Transcript from './LessonDetailContent/Transcript';
import Comments from './LessonDetailContent/Comments';
import Dialogue from './LessonDetailContent/Dialogue';


const LessonDetailPage = () => {
  const {lessonId} = useParams ();
  const [lesson, setLesson] = useState (null);

  const URL_API =
    'https://vietnameseforeveryone-576e2-default-rtdb.asia-southeast1.firebasedatabase.app/lesson-beginner';

  useEffect (
    () => {
      const fetchLessonAPI = async () => {
        try {
          const response = await fetch (`${URL_API}/${lessonId}/.json`);
          if (!response.ok) {
            throw new Error ('Something went wrong!');
          }
          const lessonData = await response.json ();
          setLesson (lessonData);
        } catch (error) {
          console.error (error.message);
        }
      };
      fetchLessonAPI ();
    },
    [lessonId]
  );
  return (
    <section className={classes.ld_container}>
      <Header lessonId={lessonId} />
      {lesson &&
        <div className={classes.ld_content}>
          <div className={classes.ld_baner}>
            <h1>{lesson && lesson.title}</h1>
            <p>{lesson.description}</p>
            <ReactAudioPlayer src={lesson.popAudio} controls />
            <div className={classes.ld_banner__category}>
              <span>Also Appears In:</span>
              <SButton>Beginner</SButton>
              <SButton>Level 1 Vietnamese</SButton>
            </div>
          </div>
          <div className={classes.ld_container_content}>
            <ul className={classes.ld_content_sidebar}>
              <a href='#dialogue'><li>Dialogue</li></a>
              <a href='#vocabulary'><li>Vocabulary</li></a>
              <a href='#vocabulary'><li>Notes</li></a>
              <a href='#transcripts'><li>Lesson Transcripts</li></a>
              <a href='#comments'><li>Comments</li></a>
            </ul>
            <Dialogue lesson={lesson}/>
            <Vocabulary lesson={lesson}/>
            <Notes lesson={lesson}/>
            <Transcript lesson={lesson}/>
            <Comments />
          </div>
        </div>}
    </section>
  );
};

export default LessonDetailPage;
