import { useState, Fragment } from "react";
import ReactAudioPlayer from "react-audio-player";
import exAudio from "../../assets/audios/listening-moi-trau.webm";
import StyledButton from "../../components/UI/StyledButton";
import classes from "./ListeningExercise.module.scss";

const paragraph = "Phận duyên be bé cơi trầu buồng cau. ";

const paraWords = paragraph.trim().split(" ");

const lowerCaseParaWords = paragraph.trim().toLowerCase().split(" ");

let hiddenParagraph = paragraph.replace(/[^., ]/g, "*");

const ListeningExercise = () => {
  const [enteredInput, setEnteredInput] = useState("");
  const [isFinished, setIsFinished] = useState(false);

  const enteredWords =
    enteredInput.trim().length !== 0
      ? enteredInput.trim().toLowerCase().split(" ")
      : [];

  //find an array includes all indexes of found words.
  const foundWordIndexes = enteredWords
    .map((word) => {
      return lowerCaseParaWords.reduce((wordIndexes, currWord, index) => {
        if (word === currWord.replace(/[.,?]/, "")) {
          wordIndexes.push(index);
        }
        return wordIndexes;
      }, []);
    })
    .flat();

  const inputChangeHandler = (event) => {
    setEnteredInput(event.target.value);
  };

  const submitFormHandler = (event) => {
    event.preventDefault();
    if (isFinished) return;

    setEnteredInput("");

    if (foundWordIndexes.length !== 0) {
      const hiddenParaWords = hiddenParagraph.split(" ");

      foundWordIndexes.forEach((wordIndex) => {
        hiddenParaWords[wordIndex] = paraWords[wordIndex];
      });
      hiddenParagraph = hiddenParaWords.join(" ");
    }

    if (hiddenParagraph === paragraph) {
      setIsFinished(true);
    }
  };

  return (
    <Fragment>
      <div className={classes.dialogue}>
        <ReactAudioPlayer src={exAudio} controls />
      </div>
      {!isFinished && (
        <form onSubmit={submitFormHandler}>
          <label htmlFor="dictation">What is the speaker saying?</label>
          <input
            id="dictation"
            style={{ color: "black" }}
            onChange={inputChangeHandler}
            type="text"
            value={enteredInput}
          />
          <StyledButton>Check Answer</StyledButton>
          <StyledButton>Give Up</StyledButton>
        </form>
      )}
      <p>{hiddenParagraph}</p>
      {isFinished && (
        <p
          style={{
            fontSize: "3rem",
            color: "var(--color-primary)",
          }}
        >
          Congratulations!
        </p>
      )}
    </Fragment>
  );
};

export default ListeningExercise;
