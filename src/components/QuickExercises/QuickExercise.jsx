import React, { Fragment } from "react";
import Container from "./Container";
import classes from "./QuickExercise.module.scss";
import Title from "../Layout/Title";

const QuickExercise = (props) => {
  return (
    <Fragment>
      <Title>Listening Exercise</Title>
      <section className={classes.body}>
        <section className={classes.instruction}>
          <p className={classes.title}>How to play</p>
          <Container>{props.instruction}</Container>
        </section>

        <section className={classes.exercise}>
          <p className={classes.title}>Exercise</p>
          <Container>{props.children}</Container>
        </section>
      </section>
    </Fragment>
  );
};

export default QuickExercise;
