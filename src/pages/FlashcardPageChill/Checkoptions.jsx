import React from "react";
import classes from "./FlashCard.module.css";

getAnswers = (array,correctIndex) => {
  const rightAnswer = array[correctIndex];
  let answers = [[rightAnswer]];
  array.splice(correctIndex,1);
  for (let i = 0; i < 3; i++) {
      let randomNum = Math.floor(Math.random()*array.length);
      answers[0].push(array[randomNum]);
      array.splice(randomNum,1);
  }
  for (let i = answers[0].length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = answers[0][i];
      answers[0][i] = answers[0][j];
      answers[0][j] = temp;
  }
  answers.push(answers[0].indexOf(rightAnswer));
  
  return answers;
}
const colors = ["Trắng","Xanh Dương","Nâu","Đỏ","Vàng","Đen","Xám","Xanh Lá","Tím","Cam"];
console.log(getAnswers(colors,4));

const Checkoptions = (flashcard) => {
  console.log(flashcard);
  return (
    <div>
      {flashcard.flashcard.map((item, i) => {
        return (
          <div className={classes.check_box} key={i}>
            <label htmlFor={item}>
              <input id={item} type="radio" name="task" /> {item}
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default Checkoptions;
