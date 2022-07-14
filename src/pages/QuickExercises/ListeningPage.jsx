import React from "react";
import ReactAudioPlayer from "react-audio-player";
import exAudio from "../../assets/audios/listening-moi-trau.webm";
import QuickExercise from "../../components/QuickExercises/QuickExercise";
import StyledButton from "../../components/UI/StyledButton";
import ListeningExercise from "../../components/QuickExercises/ListeningExercise";
import classes from "./ListeningPage.module.scss";

const ListeningPage = () => {
  const Instruction = (
    <ul className={classes.instruction}>
      <li>Listen and type what you hear in the "Guess" box.</li>
      <li>Press "Check Answer" - Correct words will replace the stars.</li>
      <li>Keep going until you have all of the text.</li>
      <li>Do NOT type full stops / periods, commas or dashes ( - ).</li>
      <li>Click the "Give Up" button to reveal whole letters.</li>
      <li>Click "Next Question" button to start new question</li>
      <li>Click "Try Again" button to do the current question once again</li>
    </ul>
  );

  return (
    <QuickExercise instruction={Instruction}>
      <ListeningExercise />
    </QuickExercise>
  );
};

export default ListeningPage;
