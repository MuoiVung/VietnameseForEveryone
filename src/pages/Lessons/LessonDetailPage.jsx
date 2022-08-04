import React, {useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";
import {useParams} from 'react-router-dom';
import classes from './Lesson.module.css';
import ReactAudioPlayer from 'react-audio-player';
import SButton from './CustomHooks/SButton';
import Vocabulary from './LessonDetailContent/Vocabulary';
import Notes from './LessonDetailContent/Notes';
import Transcript from './LessonDetailContent/Transcript';
import Comments from './LessonDetailContent/Comments';
import Dialogue from './LessonDetailContent/Dialogue';
import Hide from './CustomHooks/Hide';
import Show from './CustomHooks/Show';
import ShowPathway from './ShowPathway';

const LessonDetailPage = () => {
  const navigate = useNavigate();
  const {lessonId} = useParams ();
  const [lesson, setLesson] = useState (null);

  const [ParamNext,setParamNext] = useState(lessonId)
  const [display, setDisplay] = useState ('none');
  const [hide, setHide] = useState ('true');
  const handleClickShowPathway = () => {
    hide ? setHide (false) : setHide (true);
    !hide ? setDisplay ('block') : setDisplay ('none');
    console.log ('ok!');
  };

  // set hide dialogue
  const [displayDialog, setDisplayDialog] = useState ('block');
  const [hideDialog, setHideDialog] = useState ('true');
  const handleClickDialog = () => {
    hideDialog ? setHideDialog (false) : setHideDialog (true);
    !hideDialog ? setDisplayDialog ('block') : setDisplayDialog ('none');
  };
  // set hide vocabulary
  const [displayVocab, setDisplayVocab] = useState ('block');
  const [hideVocab, setHideVocab] = useState ('true');
  const handleClickVocab = () => {
    hideVocab ? setHideVocab (false) : setHideVocab (true);
    !hideVocab ? setDisplayVocab ('block') : setDisplayVocab ('none');
  };
  // set hide note
  const [displayNote, setDisplayNote] = useState ('block');
  const [hideNote, setHideNote] = useState ('true');
  const handleClickNote = () => {
    hideNote ? setHideNote (false) : setHideNote (true);
    !hideNote ? setDisplayNote ('block') : setDisplayNote ('none');
  };
  // set hide transcript
  const [displayTranscript, setDisplayTranscript] = useState ('block');
  const [hideTranscript, setHideTranscript] = useState ('true');
  const handleClickTranscript = () => {
    hideTranscript ? setHideTranscript (false) : setHideTranscript (true);
    !hideTranscript
      ? setDisplayTranscript ('block')
      : setDisplayTranscript ('none');
  };
  // set hide comment
  const [displayComment, setDisplayComment] = useState ('block');
  const [hideComment, setHideComment] = useState ('true');
  const handleClickComment = () => {
    hideComment ? setHideComment (false) : setHideComment (true);
    !hideComment ? setDisplayComment ('block') : setDisplayComment ('none');
  };
  const URL_API =
    'https://vietnameseforeveryone-576e2-default-rtdb.asia-southeast1.firebasedatabase.app/lesson-beginner';

  useEffect (
    () => {
      const fetchLessonAPI = async () => {
        try {
          const response = await fetch (`${URL_API}/${ParamNext}/.json`);
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
    [ParamNext]
  );

  const [lessons, setLessons] = useState (null);
  const fetchLessonAPI = async () => {
    try {
      const response = await fetch (`${URL_API}/.json`);
      if (!response.ok) {
        throw new Error ('Something went wrong!');
      }
      const lessonData = await response.json ();

      let transformedLessons = [];

      for (const key in lessonData) {
        transformedLessons.push ({
          id: lessonData[key].id,
          title: lessonData[key].title,
          description: lessonData[key].description,
          image: lessonData[key].image,
          stats: lessonData[key].stats,
        });
      }
      setLessons (transformedLessons);
    } catch (error) {
      console.error (error.message);
    }
  };

  useEffect (() => {
    fetchLessonAPI ();
  }, []);

  const handClickNext = () =>{
    if(Number(ParamNext.charAt(6)) === 8){
      return
    }
    setParamNext(`lesson${Number(ParamNext.charAt(6)) + 1}`)
    navigate(`/lessons/beginner/lesson${Number(ParamNext.charAt(6)) + 1}`)
  }

  const handClickPrev = () =>{
    if(Number(ParamNext.charAt(6)) === 1){
      return
    }
    setParamNext(`lesson${Number(ParamNext.charAt(6)) - 1}`)
    navigate(`/lessons/beginner/lesson${Number(ParamNext.charAt(6)) - 1}`)
  }

  return (
    <section className={classes.ld_container}>
      <div>
        <div className={classes.ld_bar}>
          <div className={classes.ld_bar_left}>
            <p className={classes.ld_bar_title}>Level {ParamNext.charAt(6)} Vietnamese</p>
            <div className={classes.ld_bar_subTitle}>
              <span>{ParamNext.charAt(6)}</span>
              <span>/</span>
              <span>24</span>
              <span className={classes.ld_bar_subTitle_completed}>
                Completed
              </span>
            </div>
          </div>
          <div className={classes.ld_bar_right}>
            <div className={classes.ld_bar_step}>
              <SButton onClick={handClickPrev} className={classes.ld_bar_step_arrow}>Prev</SButton>
              <p className={classes.ld_bar_step_des}>{ParamNext}</p>
              <SButton onClick={handClickNext} className={classes.ld_bar_step_arrow}>Next</SButton>
            </div>
            <div
              className={classes.ld_bar_showbtn}
              onClick={handleClickShowPathway}
            >
              <SButton>Show Pathway</SButton>
            </div>
          </div>
        </div>
      </div>
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
              <a href="#dialogue"> <li>Dialogue</li></a>
              <a href="#vocabulary"><li>Vocabulary</li></a>
              <a href="#notes"><li>Notes</li></a>
              <a href="#transcripts"><li>Lesson Transcripts</li></a>
              <a href="#comments"><li>Comments</li></a>
            </ul>
            <div>
              <div className={classes.dialogue_container} id="dialogue">
                <div className={classes.dialogue_header}>
                  <h3>Dialogue - Vietnames</h3>
                  <div onClick={handleClickDialog} id="1">
                    {hideDialog ? <Hide /> : <Show />}
                  </div>
                </div>
                <Dialogue lesson={lesson} displayDialog={displayDialog} />
              </div>
              <div className={classes.vocabulary_container} id="vocabulary">
                <div className={classes.vocabulary_header}>
                  <h3>Vocabulary</h3>
                  <div onClick={handleClickVocab}>
                    {hideVocab ? <Hide /> : <Show />}
                  </div>
                </div>
                <Vocabulary lesson={lesson} displayVocab={displayVocab} />
              </div>

              <div className={classes.notes_container} id="notes">
                <div className={classes.notes_container_header}>
                  <h3>Notes</h3>
                  <div onClick={handleClickNote}>
                    {hideNote ? <Hide /> : <Show />}
                  </div>
                </div>
                <Notes lesson={lesson} displayNote={displayNote} />
              </div>
              <div className={classes.transcript_container} id="transcripts">
                <div className={classes.transcript_header}>
                  <h3>Lesson Transcript</h3>
                  <div onClick={handleClickTranscript}>
                    {hideTranscript ? <Hide /> : <Show />}
                  </div>
                </div>
                <Transcript
                  lesson={lesson}
                  displayTranscript={displayTranscript}
                />
              </div>
              <div className={classes.comments_container} id="comments">
                <div className={classes.comments_header}>
                  <h3>Comments</h3>
                  <div onClick={handleClickComment}>
                    {hideComment ? <Hide /> : <Show />}
                  </div>
                </div>
                <Comments displayComment={displayComment} />
              </div>
            </div>
          </div>
        </div>}
      <div className={classes.showPathway} style={{display: `${display}`}}>
        <ShowPathway lessons={lessons} />
      </div>
    </section>
  );
};

export default LessonDetailPage;
