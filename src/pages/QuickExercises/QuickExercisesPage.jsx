import React, { Fragment } from "react";
import {
  writeIcon,
  listenIcon,
  readIcon,
  speakIcon,
} from "../../assets/icons/QuickExercisesIcons";
import classes from "./QuickExercisesPage.module.css";
import { Link } from "react-router-dom";

const skills = (
  <section className={classes.container}>
    <h2 className={classes.title}>Quick Exercises</h2>
    <div className={classes.notice}>
      <p className={classes["notice-title"]}>Select a skill, random exercise</p>
      <p className={classes["notice-content"]}>
        Please choose a skill which you want to practice. We will generate a
        random exercise for you!
      </p>
    </div>

    <ul className={classes.skills}>
      <li className={classes.skill}>
        <p className={classes["skill-img"]}>
          <img src={listenIcon} alt="a boy is listening" />
        </p>
        <h3 className={classes["skill-header"]}>Listening</h3>
        <p className={classes["skill-content"]}>
          Listen some sentences and write them again.
        </p>
        <Link to="/quick-exercises/listening" className={classes["skill-btn"]}>
          Start
        </Link>
      </li>

      <li className={classes.skill}>
        <p className={classes["skill-img"]}>
          <img src={readIcon} alt="a boy is reading" />
        </p>
        <h3 className={classes["skill-header"]}>Reading</h3>
        <p className={classes["skill-content"]}>
          Read a paragraph and answer questions.
        </p>
        <Link to="/" className={classes["skill-btn"]}>
          Start
        </Link>
      </li>

      <li className={classes.skill}>
        <p className={classes["skill-img"]}>
          <img src={writeIcon} alt="a boy is writting" />
        </p>
        <h3 className={classes["skill-header"]}>Writing</h3>
        <p className={classes["skill-content"]}>
          Rearrange all words to complete a correct sentence.
        </p>
        <Link to="/" className={classes["skill-btn"]}>
          Start
        </Link>
      </li>

      <li className={classes.skill}>
        <p className={classes["skill-img"]}>
          <img src={speakIcon} alt="two people are speaking" />
        </p>
        <h3 className={classes["skill-header"]}>Speaking</h3>
        <p className={classes["skill-content"]}>
          Hear an audio and repeat that audio.
        </p>
        <Link to="/" className={classes["skill-btn"]}>
          Start
        </Link>
      </li>
    </ul>
  </section>
);

const QuickExercisesPage = () => {
  return <Fragment>{skills}</Fragment>;
};

export default QuickExercisesPage;
