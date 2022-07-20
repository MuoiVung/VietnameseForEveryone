import React, { Fragment } from "react";
import Container from "./Container";
import classes from "./QuickExercise.module.scss";
import Header from "../Layout/Header";
import Breadcrumb from "../UI/Breadcrumb";
import BreadcrumItem from "../UI/BreadcrumItem";

const QuickExercise = (props) => {
  return (
    <Fragment>
      <Header title="Listening Exercise">
        <Breadcrumb>
          <BreadcrumItem href="/quick-exercises">Quick Exercises</BreadcrumItem>
          <BreadcrumItem href="/quick-exercises/listening">
            Listening
          </BreadcrumItem>
        </Breadcrumb>
      </Header>
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
