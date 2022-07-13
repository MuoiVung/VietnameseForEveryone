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
      <li>Press "Check" - Correct words will replace the stars.</li>
      <li>Keep going until you have all of the text.</li>
      <li>Do NOT type full stops / periods, commas or dashes ( - ).</li>
      <li>
        Click the "Hint" button to reveal more letters (and the whole sentence).
      </li>
    </ul>
  );

  return (
    <QuickExercise instruction={Instruction}>
      <ListeningExercise />
    </QuickExercise>
  );
};

export default ListeningPage;
