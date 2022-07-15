import React, { useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import classes from './Lesson.module.css';
import ReactAudioPlayer from 'react-audio-player';
import vAudio from '../../assets/audios/AB_S1L1_010614_vpod101.mp3';
import styled from 'styled-components';


const LessonDetailPage = () => {

  const {lessonId} = useParams ();

  const [lesson, setLesson] = useState (null);
  const URL_API =
    'https://vietnameseforeveryone-576e2-default-rtdb.asia-southeast1.firebasedatabase.app/lesson-beginner';

  const fetchLessonAPI = async () => {
    try {
      const response = await fetch (`${URL_API}/${lessonId}.json`);
      if (!response.ok) {
        throw new Error ('Something went wrong!');
      }
      const lessonData = await response.json ();
      let transformedLessons = [];

      for (const key in lessonData) {
        transformedLessons.push ({
          id: key,
          title: lessonData[key].title,
          description: lessonData[key].description,
          image: lessonData[key].image,
          stats: lessonData[key].stats,
        });
      }
      setLesson(transformedLessons);
    } catch (error) {
      console.error (error.message);
    }
  };
  console.log(lesson);
  useEffect (() => {
    fetchLessonAPI ();
  },[lessonId]);

  return (
    <section className={classes.ld_container}>
      <p>{lessonId}</p>
      <div className={classes.ld_bar}>
        <div className={classes.ld_bar_left}>
          <p className={classes.ld_bar_title}>Level 1 Vietnamese</p>
          <div className={classes.ld_bar_subTitle}>
            <span>0</span>
            <span>/</span>
            <span>24</span>
            <span className={classes.ld_bar_subTitle_completed}>Completed</span>
          </div>
        </div>
        <div className={classes.ld_bar_right}>
          <div className={classes.ld_bar_step}>
            <SButton className={classes.ld_bar_step_arrow}>Prev</SButton>
            <p className={classes.ld_bar_step_des}>Lesson 1</p>
            <SButton className={classes.ld_bar_step_arrow}>Next</SButton>
          </div>
          <div className={classes.ld_bar_showbtn}>
            <SButton>Show Pathway</SButton>
          </div>
          </div>
        </div>
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

const SButton = styled.button`
    background-color:white;
    color: var(--color-primary);
    border-radius: 5px;
    padding: 5px 10px;
    cursor: pointer;
    border: solid 1px var(--color-primary);
    &:hover{
        background-color: var(--color-primary);
        color: white;
    }
`;

export default LessonDetailPage;
