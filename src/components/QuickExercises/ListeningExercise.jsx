import { useState, Fragment, useEffect, useRef } from "react";
import ReactAudioPlayer from "react-audio-player";
import StyledButton from "../../components/UI/StyledButton";
import Container from "./Container";
import classes from "./ListeningExercise.module.scss";
import { fetchListeningExercises } from "../../lib/listening-api";
import { useReducer } from "react";
import { toast } from "react-toastify";

let paragraph = "";

let paraWords;

let lowerCaseParaWords;

let isInitial = true;

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};

const initExercisesData = {
  exercises: [],
  randomExercise: null,
};

const exercisesReducer = (state, action) => {
  const getRandomExercise = (exercises) => {
    let newRandomExercise;
    if (exercises.length > 0) {
      do {
        const randomIndex = getRandomInt(0, exercises.length);
        newRandomExercise = exercises[randomIndex];
      } while (newRandomExercise.vn === state.randomExercise?.vn);
    }
    return newRandomExercise;
  };

  if (action.type === "SET_EXERCISES") {
    const newRandomExercise = getRandomExercise(action.exercises);

    return {
      exercises: action.exercises,
      randomExercise: newRandomExercise
        ? newRandomExercise
        : state.randomExercise,
    };
  }

  if (action.type === "SET_RANDOM_EXERCISE") {
    const newRandomExercise = getRandomExercise(state.exercises);

    return {
      exercises: state.exercises,
      randomExercise: newRandomExercise,
    };
  }

  return initExercisesData;
};

const ListeningExercise = () => {
  const [isGivenUp, setIsGivenUp] = useState(false);
  const [hiddenParagraph, setHiddenParagraph] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
  const enteredInputRef = useRef();
  const [exercisesData, dispatchExercises] = useReducer(
    exercisesReducer,
    initExercisesData
  );

  const isFinished =
    paragraph?.trim().length !== 0 &&
    hiddenParagraph?.trim() === paragraph?.trim();

  useEffect(() => {
    const sendRequest = async () => {
      const data = await fetchListeningExercises();

      if (!data) {
        throw new Error("Something went wrong!");
      }
      dispatchExercises({ type: "SET_EXERCISES", exercises: data });
    };

    sendRequest().catch((error) => toast.error(error.message));
  }, []);

  useEffect(() => {
    const createHiddenPara = () => {
      if (!exercisesData.randomExercise) {
        return;
      }

      paragraph = exercisesData.randomExercise.vn;

      paraWords = paragraph.trim().split(" ");

      lowerCaseParaWords = paragraph.trim().toLowerCase().split(" ");

      setHiddenParagraph(paragraph.replace(/[^., ]/g, "*"));
    };

    createHiddenPara();
  }, [exercisesData.randomExercise]);

  const checkAnswerHandler = (event) => {
    event.preventDefault();
    const enteredInput = enteredInputRef.current.value;

    if (enteredInput.trim().length === 0) return;

    if (isFinished) return;

    if (!isChecked) {
      setIsChecked(true);
    }

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

    let hiddenParaWords = hiddenParagraph.split(" ");

    if (foundWordIndexes.length !== 0) {
      foundWordIndexes.forEach((wordIndex) => {
        hiddenParaWords[wordIndex] = paraWords[wordIndex];
      });
    }

    setHiddenParagraph(hiddenParaWords.join(" "));

    enteredInputRef.current.value = "";
  };

  const giveUpHandler = (event) => {
    event.preventDefault();
    setHiddenParagraph(paragraph);
    setIsGivenUp(true);
    setIsChecked(true);
    enteredInputRef.current.value = "";
  };

  const nextQuesttionHandler = (event) => {
    event.preventDefault();
    dispatchExercises({ type: "SET_RANDOM_EXERCISE" });
    setIsGivenUp(false);
    setIsChecked(false);
    setHiddenParagraph(paragraph.replace(/[^., ]/g, "*"));

    if (isInitial) {
      isInitial = false;
    }
  };

  const tryAgainHandler = (event) => {
    event.preventDefault();
    setIsGivenUp(false);
    setIsChecked(false);
    setHiddenParagraph(paragraph.replace(/[^., ]/g, "*"));

    if (isInitial) {
      isInitial = false;
    }
  };

  // const enterKeyHandler = (event) => {
  //   if (event.key !== "Enter") {
  //     return;
  //   }

  //   if (!isFinished) {
  //     checkAnswerHandler(event);
  //   } else {
  //     nextQuesttionHandler(event);
  //   }
  // };

  // useEffect(() => {
  //   document.addEventListener("keydown", enterKeyHandler, false);
  //   return () => {
  //     document.removeEventListener("keydown", enterKeyHandler);
  //   };
  // }, [hiddenParagraph]);

  return (
    <Fragment>
      {isInitial && (
        <div className={classes.dialogue}>
          <ReactAudioPlayer
            src={exercisesData.randomExercise?.audio}
            controls
          />
        </div>
      )}

      {!isInitial && (
        <div className={classes.dialogue}>
          <ReactAudioPlayer
            src={exercisesData.randomExercise?.audio}
            autoPlay
            controls
          />
        </div>
      )}

      {!isFinished && (
        <form>
          <label htmlFor="dictation">What is the speaker saying?</label>
          <input
            id="dictation"
            style={{ color: "black" }}
            type="text"
            ref={enteredInputRef}
            autoFocus
          />
          <StyledButton type="submit" onClick={checkAnswerHandler}>
            Check Answer
          </StyledButton>
          <StyledButton type="button" onClick={giveUpHandler}>
            Give Up
          </StyledButton>
        </form>
      )}

      {isFinished && (
        <form>
          <label htmlFor="dictation">What is the speaker saying?</label>
          <input disabled />
          <StyledButton type="submit" onClick={nextQuesttionHandler}>
            Next Question
          </StyledButton>
          <StyledButton type="button" onClick={tryAgainHandler}>
            Try Again
          </StyledButton>
        </form>
      )}

      {isChecked && (
        <Container color={isFinished ? "#90ee9080" : "wheat"}>
          {!isGivenUp && <h3>{isFinished ? "Nice job" : "Try again"}</h3>}
          <p className={classes["hidden-para"]}>{hiddenParagraph}</p>
          {isFinished && <p>{exercisesData.randomExercise.eng}</p>}
        </Container>
      )}
    </Fragment>
  );
};

export default ListeningExercise;
