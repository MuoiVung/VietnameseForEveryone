import React, { Fragment, useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import exAudio from "../../assets/audios/listening-moi-trau.webm";
import QuickExercise from "../../components/QuickExercises/QuickExercise";
import StyledButton from "../../components/UI/StyledButton";
import classes from "./ListeningPage.module.css";

const paragraph =
  "Phận duyên be bé cơi trầu buồng cau. " +
  "Hẹn thề bên nhau đến khi bạc đầu. " +
  "Tròn lăn lông lốc trên dòng tình duyên. " +
  "Chuyện hợp hay tan còn chăng hồng nhan. " +
  "Chuyện tình em đi có chăng vội vàng. " +
  "Chuyện tình em trôi ghềnh thác ngược xuôi. " +
  "Đêm khuya thanh vắng. " +
  "Trống canh dồn trong đêm đen. " +
  "Tim em đã hát mối duyên tình con con. " +
  "Quả cau nho nhỏ miếng trầu hôi. " +
  "Này của Xuân Hương mới quệt rồi. " +
  "Phải duyên ta lại thắm nồng cùng nhau. " +
  "Đừng xanh như lá, bạc như là vôi. " +
  "Chuyện tình em đi có chăng vội vàng. " +
  "Chuyện tình em trôi ghềnh thác ngược xuôi. " +
  "Đêm khuya thanh vắng. " +
  "Trống canh dồn trong đêm đen. " +
  "Tim em đã hát mối duyên tình con con. ";

const paraWords = paragraph.trim().split(" ");

const lowerCaseParaWords = paragraph.trim().toLowerCase().split(" ");

let hiddenParagraph = paragraph.replace(/[^., ]/g, "*");

const ListeningPage = () => {
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

  const Instruction = (
    <ul>
      <li>Listen and type what you hear in the "Guess" box.</li>
      <li>Press "Check" - Correct words will replace the stars.</li>
      <li>Keep going until you have all of the text.</li>
      <li>Do NOT type full stops / periods, commas or dashes ( - ).</li>
      <li>
        Click the "Hint" button to reveal more letters (and the whole sentence).
      </li>
    </ul>
  );

  const ListeningExercise = (
    <Fragment>
      <div>
        <p>Mời trầu </p>
        <ReactAudioPlayer src={exAudio} controls />
      </div>
      {!isFinished && (
        <form onSubmit={submitFormHandler}>
          <label htmlFor="dictation">
            Write the text into this text field:
          </label>
          <textarea
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

  return (
    <QuickExercise instruction={Instruction} exercise={ListeningExercise} />
  );
};

export default ListeningPage;
