import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import classes from './Lesson.module.css';
import ReactAudioPlayer from 'react-audio-player';
import SButton from './CustomHooks/SButton';
import Header from './Header';
import Vocabulary from './LessonDetailContent/Vocabulary';
import Notes from './LessonDetailContent/Notes';
import Transcript from './LessonDetailContent/Transcript';
import Comments from './LessonDetailContent/Comments';
import Dialogue from './LessonDetailContent/Dialogue';
import Hide from './CustomHooks/Hide';
import Show from './CustomHooks/Show';

const LessonDetailPage = () => {
  const {lessonId} = useParams ();
  const [lesson, setLesson] = useState (null);
  const [display, setDisplay] = useState ('block');
  const [hide, setHide] = useState ('true');

  const handleClick = () => {
    hide ? setHide (false) : setHide (true);
    !hide ? setDisplay ('block') : setDisplay ('none');
  };
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
              <SButton>Beginner Vietnamese</SButton>
            </div>
          </div>
          <div className={classes.ld_container_content}>
            <ul className={classes.ld_content_sidebar}>
              <a href="#dialogue"><li>Dialogue</li></a>
              <a href="#vocabulary"><li>Vocabulary</li></a>
              <a href="#notes"><li>Notes</li></a>
              <a href="#transcripts"><li>Lesson Transcripts</li></a>
              <a href="#comments"><li>Comments</li></a>
            </ul>
            <div>
              <div>
                <div className={classes.dialogue_header}>
                  <h3>Dialogue - Vietnames</h3>
                  <div onClick={handleClick}>
                    {hide ? <Hide /> : <Show />}
                  </div>
                </div>
                <Dialogue lesson={lesson} display={display} />
              </div>
              <div>
                <div className={classes.vocabulary_header}>
                  <h3>Vocabulary</h3>
                  <div onClick={handleClick}>
                    {hide ? <Hide /> : <Show />}
                  </div>
                </div>
                <Vocabulary lesson={lesson} display={display} />
              </div>

              <div>
                <div className={classes.notes_container_header}>
                  <h3>Notes</h3>
                  <div onClick={handleClick}>
                    {hide ? <Hide /> : <Show />}
                  </div>
                </div>
                <Notes lesson={lesson} display={display} />
              </div>
              <div>
                <div className={classes.transcript_header}>
                  <h3>Lesson Transcript</h3>
                  <div onClick={handleClick}>
                    {hide ? <Hide /> : <Show />}
                  </div>
                </div>
                <Transcript lesson={lesson} display={display} />
              </div>
              <div>
                <div className={classes.comments_header}>
                  <h3>Comments</h3>
                  <div onClick={handleClick}>
                    {hide ? <Hide /> : <Show />}
                  </div>
                </div>
                <Comments display={display} />
              </div>
            </div>
          </div>
        </div>}
    </section>
  );
};

export default LessonDetailPage;
