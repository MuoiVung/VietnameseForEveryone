import React, { useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import classes from './Lesson.module.css';
import ReactAudioPlayer from 'react-audio-player';
import vAudio from '../../assets/audios/AB_S1L1_010614_vpod101.mp3';
import SButton from './CustomHooks/SButton'
import Header from './Header';


const LessonDetailPage = () => {

  const {lessonId} = useParams ();
  const [lesson, setLesson] = useState (null);

  console.log(lessonId);

  const URL_API =
    'https://vietnameseforeveryone-576e2-default-rtdb.asia-southeast1.firebasedatabase.app/lesson-beginner';

  const fetchLessonAPI = async () => {
    try {
      const response = await fetch (`${URL_API}/${lessonId}/.json`);
      if (!response.ok) {
        throw new Error ('Something went wrong!');
      }
      const lessonData = await response.json ();
      console.log(lessonData)
      setLesson(lessonData);
    } catch (error) {
      console.error (error.message);
    }
  };

  useEffect (() => {
    fetchLessonAPI ();
  },[lessonId]);

  return (
    <section className={classes.ld_container}>
       <p>{lessonId}</p>
       <Header />
        <div className={classes.ld_baner}>
          <h1>Introducing Yourself in Vietnamese</h1>
          <p>Learn how to introduce yourself</p>
          <div><ReactAudioPlayer src={vAudio} controls /></div>
          <div className={classes.ld_banner__category}>
            <span>Also Appears In:</span>
            <SButton>Beginner</SButton>
            <SButton>Level 1 Vietnamese</SButton>
          </div>
      </div>
      
    </section>
  );
};


export default LessonDetailPage;
