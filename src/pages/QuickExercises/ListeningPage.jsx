import React, { useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import exAudio from "../../assets/audios/listening-moi-trau.webm";

const paragraph =
  "Phận duyên be bé cơi trầu buồng cau ." +
  "Hẹn thề bên nhau đến khi bạc đầu" +
  "Tròn lăn lông lốc trên dòng tình duyên " +
  "Chuyện hợp hay tan còn chăng hồng nhan " +
  "Chuyện tình em đi có chăng vội vàng " +
  "Chuyện tình em trôi ghềnh thác ngược xuôi " +
  "Đêm khuya thanh vắng " +
  "Trống canh dồn trong đêm đen " +
  "Tim em đã hát mối duyên tình con con " +
  "Quả cau nho nhỏ miếng trầu hôi " +
  "Này của Xuân Hương mới quệt rồi " +
  "Phải duyên ta lại thắm nồng cùng nhau " +
  "Đừng xanh như lá bạc như là vôi " +
  "Chuyện tình em đi có chăng vội vàng " +
  "Chuyện tình em trôi ghềnh thác ngược xuôi " +
  "Đêm khuya thanh vắng " +
  "Trống canh dồn trong đêm đen " +
  "Tim em đã hát mối duyên tình con con ";

const lowerCaseParaWords = paragraph.toLowerCase().split(" ");
const paraWords = paragraph.split(" ");

let hiddenParagraph = paragraph.replace(/[^.,? ]/g, "*");

const ListeningPage = () => {
  const [enteredInput, setEnteredInput] = useState("");
  const [isFinished, setIsFinished] = useState(false);

  const enteredWords =
    enteredInput.length !== 0 ? enteredInput.toLowerCase().split(" ") : [];

  //find an array includes all indexes of found words.
  const foundWordIndexes = enteredWords
    .map((word) => {
      return lowerCaseParaWords.reduce((wordIndexes, currWord, index) => {
        if (word === currWord) {
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
    <section style={{ padding: "0 20%" }}>
      <h2>Listening Exercise</h2>

      <div>
        <h3>How to Play</h3>
        <ul>
          <li>Listen and type what you hear in the "Guess" box.</li>
          <li>Press "Check" - Correct words will replace the stars.</li>
          <li>Keep going until you have all of the text.</li>
          <li>Do NOT type full stops / periods, commas or dashes ( - ).</li>
          <li>
            Click the "Hint" button to reveal more letters (and the whole
            sentence).
          </li>
        </ul>
      </div>

      <div>
        <ReactAudioPlayer src={exAudio} autoPlay controls />
      </div>

      {!isFinished && (
        <form onSubmit={submitFormHandler}>
          <input
            style={{ color: "black" }}
            onChange={inputChangeHandler}
            type="text"
            value={enteredInput}
          />
          <button>Check</button>
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
    </section>
  );
};

export default ListeningPage;
