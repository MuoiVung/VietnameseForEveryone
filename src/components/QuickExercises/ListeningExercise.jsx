import { useState, Fragment } from "react";
import ReactAudioPlayer from "react-audio-player";
import exAudio from "../../assets/audios/listening-moi-trau.webm";
import StyledButton from "../../components/UI/StyledButton";
import Container from "./Container";
import classes from "./ListeningExercise.module.scss";

const paragraph = "Phận duyên be bé cơi trầu buồng cau. ";

const paraWords = paragraph.trim().split(" ");

let isChecked = false;

const lowerCaseParaWords = paragraph.trim().toLowerCase().split(" ");

let hiddenParagraph = paragraph.replace(/[^., ]/g, "*");

const ListeningExercise = () => {
  const [enteredInput, setEnteredInput] = useState("");
  const [isFinished, setIsFinished] = useState(false);
  const [isGivenUp, setIsGivenUp] = useState(false);

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

  const checkAnswerHandler = (event) => {
    event.preventDefault();
    if (enteredInput.trim().length === 0) return;

    if (isFinished) return;

    if (!isChecked) {
      isChecked = true;
    }

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

  const giveUpHandler = (event) => {
    event.preventDefault();
    hiddenParagraph = paragraph;
    setIsGivenUp(true);
    setIsFinished(true);
    isChecked = true;
  };

  const nextExHandler = (event) => {
    event.preventDefault();
  };

  const tryAgainHandler = (event) => {
    event.preventDefault();
    setIsGivenUp(false);
    setIsFinished(false);
    isChecked = false;
    hiddenParagraph = paragraph.replace(/[^., ]/g, "*");
  };

  return (
    <Fragment>
      <div className={classes.dialogue}>
        <ReactAudioPlayer src={exAudio} controls />
      </div>

      <form>
        <label htmlFor="dictation">What is the speaker saying?</label>
        <input
          id="dictation"
          style={{ color: "black" }}
          onChange={inputChangeHandler}
          type="text"
          value={enteredInput}
        />
        {!isFinished && (
          <StyledButton onClick={checkAnswerHandler}>Check Answer</StyledButton>
        )}
        {!isFinished && (
          <StyledButton onClick={giveUpHandler}>Give Up</StyledButton>
        )}
        {isFinished && (
          <StyledButton onClick={nextExHandler}>Next</StyledButton>
        )}
        {isFinished && (
          <StyledButton onClick={tryAgainHandler}>Try Again</StyledButton>
        )}
      </form>

      {isChecked && (
        <Container color={isFinished ? "#90ee9080" : "wheat"}>
          {!isGivenUp && <h3>{isFinished ? "Nice job" : "Try again"}</h3>}
          <p className={classes["hidden-para"]}>{hiddenParagraph}</p>
        </Container>
      )}
    </Fragment>
  );
};

export default ListeningExercise;
