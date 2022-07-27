import React from 'react'
import { useState, useEffect } from "react";
import classes from './FlashCard.module.css';
import {AiOutlineArrowLeft,AiOutlineArrowRight} from "react-icons/ai"
import {BsXCircleFill,BsCheckCircleFill} from "react-icons/bs"
import styles from "../QuickExercises/ListeningPage.module.scss";
import StyledButton from "../../components/UI/StyledButton";

const colors = [
  ["White","Blue","Brown","Red","Yellow","Black","Gray","Green","Purple","Orange"],
  ["Trắng","Xanh Dương","Nâu","Đỏ","Vàng","Đen","Xám","Xanh Lá","Tím","Cam"]
];
const numbers = [
  ["0","1","2","3","4","5","6","7","8","9","10"],
  ["Không","Một","Hai","Ba","Bốn","Năm","Sáu","Bảy","Tám","Chín","Mười"]
];
const bodyParts = [
  ["Head","Face","Hair","Eye","Ear","Nose","Mouth","Tooth","Lips","Skin","Neck","Shoulder","Chest","Belly","Arm","Hand","Leg","Foot"],
  ["Đầu","Khuôn mặt","Tóc","Mắt","Tai","Mũi","Miệng","Răng","Môi","Da","Cổ","Vai","Ngực","Bụng","Cánh Tay","Bàn Tay","Cẳng Chân","Bàn Chân"]
];
const subjects = [
  {
    name: "Colors",
    array: colors
  },
  {
    name: "Numbers",
    array: numbers
  },
  {
    name: "Body Parts",
    array: bodyParts
  }
];
const getAnswers = (array,correctIndex) => {
  const rightAnswer = array[correctIndex];
  let answers = [[rightAnswer]];
  let tempArr = [...array];
  tempArr.splice(correctIndex,1);
  for (let i = 0; i < 3; i++) {
      let randomNum = Math.floor(Math.random()*tempArr.length);
      answers[0].push(tempArr[randomNum]);
      tempArr.splice(randomNum,1);
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
// const SAPM_FKASHCARDS = [
//   {
//     id: 1,
//     question:
//       "Dòng nào nêu đúng các phương diện của yêu cầu sử dụng tiếng Việt?",
//     answer: "Ngữ âm và chữ viết, phong cách ngôn ngữ, ngữ pháp, từ ngữ.",
//     options: [
//       "Ngữ âm, ngữ pháp, phong cách ngôn ngữ, chính tả.",
//       "Ngữ âm và chữ viết, phong cách ngôn ngữ, ngữ pháp, từ ngữ.",
//       "Chữ viết, phong cách ngôn ngữ, chính tả, ngữ âm.",
//       " Từ ngữ, ngữ âm, ngữ pháp, phong cách ngôn ngữ.",
//     ],
//   },
//   {
//     id: 2,
//     question: "Dòng nào khái quát được yêu cầu sử dụng tiếng Việt?",
//     answer: 'Sử dụng đúng và chính xác',
//     options: [
//       'Sử dụng đúng và chính xác',
//       'Sử dụng hay và phong phú',
//       'Sử dụng chính xác và phong phú',
//       'Sử dụng đúng và hay'
//     ]
//   },
//   {
//     id: 3,
//     question: "Dòng nào nêu đúng và đủ yêu cầu sử dụng tiếng Việt về ngữ âm và chữ viết?",
//     answer: ' Phát âm theo âm thanh chuẩn, viết đúng các quy tắc chính tả.',
//     options: [
//       ' Phát âm theo âm thanh chuẩn, thể hiện ở chữ viết.',
//       'Viết đúng các quy tắc chính tả.',
//       ' Phát âm theo âm thanh chuẩn, viết đúng các quy tắc chính tả.',
//       ' Sử dụng đúng từ ngữ và viết đúng quy tắc ngữ pháp.'
//     ]
//   },
//   {
//     id: 4,
//     question: "Trường hợp nào sau đây mắc lỗi về ngữ âm và chữ viết?",
//     answer: 'Con châu thắng trận tung hoành trên bãi biển.',
//     options: [
//       '  Từng dấu bàn chân trâu to lớn để lại trên cát.',
//       ' Từng dấu bàn chân trâu to lớn để lại trên cát.',
//       '  Con châu thắng trận tung hoành trên bãi biển.',
//       'Chuỗi hạt trân châu này thật đẹp.'
//     ]
//   },
//   {
//     id: 5,
//     question: "Dòng nào nêu đúng và đủ yêu cầu sử dụng tiếng Việt về từ ngữ?",
//     answer: ' Dùng đúng hình thức và cấu tạo, ý nghĩa và đặc điểm ngữ pháp.',
//     options: [
//       '  Dùng đúng hình thức và cấu tạo, ý nghĩa và đặc điểm ngữ pháp.',
//       ' Dùng đúng quy cách cấu tạo, ý nghĩa và đặc điểm của tiếng Việt.',
//       '  Dùng đúng hình thức và cấu tạo, ý nghĩa và đặc điểm ngữ pháp.',
//       ' Dùng đúng cách phát âm các từ ngữ theo chuẩn tiếng Việt.'
//     ]
//   },
//   {
//     id: 6,
//     question: "Câu nào không mắc lỗi dùng từ?",
//     answer: 'Anh ấy thật sự là một tấm gương sáng chói.',
//     options: [
//       ' Một màn sương bàn bạc bay trong không gian.',
//       ' Thúy Kiều là con người tài sách vẹn toàn.',
//       '  Cuộc họp sẽ kéo dài vì nhiều việc phải bàng bạc kĩ.',
//       'Anh ấy thật sự là một tấm gương sáng chói.'
//     ]
//   },
//   {
//     id: 7,
//     question: "Dòng nào nêu đúng yêu cầu sử dụng tiếng Việt về ngữ pháp?",
//     answer: 'Viết câu đúng quy tắc ngữ pháp, dùng đúng dấu câu.',
//     options: [
//       ' Dùng từ ngữ đúng với hình thức và cấu tạo.',
//       ' Viết câu đúng quy tắc ngữ pháp, dùng đúng dấu câu.',
//       '  Viết câu đúng quy tắc ngữ pháp, dùng đúng dấu câu.',
//       'Viết tiếng Việt đúng theo quy tắc chính tả hiện hành.'
//     ]
//   },
// ];

const SubjectAndCard = ({mode}) => {
  const [currentCardNum, setcurrentCardNum] = useState(0);
  const [currentCard, setCurrentCard] = useState([subjects[0].array[0][0],subjects[0].array[1][0]]);
  const [nextBtnIsActive, setNextBtnIsActive] = useState(true);
  const [prevBtnIsActive, setPrevBtnIsActive] = useState(false);
  const [flip, setFlip] = useState(false)
  const [currentSubject, setCurrentSubject] = useState(0)
  const [answersArray, setAnswersArray] = useState(getAnswers(subjects[currentSubject].array[1],currentCardNum));
  const [checkedAnswer, setCheckedAnswer] = useState(0);
  const [isChecking, setIsChecking] = useState(false);
  useEffect(() => {
    (currentCardNum === 0) ? setPrevBtnIsActive(false) : setPrevBtnIsActive(true);
    (currentCardNum === subjects[currentSubject].array[0].length-1) ? setNextBtnIsActive(false) : setNextBtnIsActive(true);
    setCurrentCard([subjects[currentSubject].array[0][currentCardNum],subjects[currentSubject].array[1][currentCardNum]]);
    setFlip(false);
    setIsChecking(false);
    setCheckedAnswer(0);
    setAnswersArray(getAnswers(subjects[currentSubject].array[1],currentCardNum))
  }, [currentCardNum,currentSubject])

  const handleNext = () => {
    setcurrentCardNum((prev) => prev+1);
    (currentCardNum>=subjects[currentSubject].array[0].length-1) && setcurrentCardNum(0);
  }
  const handlePrev = () => {
    setcurrentCardNum((prev) => prev-1);
    currentCardNum<=0 && setcurrentCardNum(subjects[currentSubject].array[0].length-1);
  }
  const handleChangeSubject = (i) => {
    (i!==currentSubject) && setCurrentSubject(i);
    setcurrentCardNum(0);
  }
  const handleSelect = (e) => {
    setcurrentCardNum(Number(e.target.value));
  }
  const handleCheckAnswer = () => {
    setIsChecking(true);
    setFlip(!flip);
  }
  const handleProgress = () => {
    setIsChecking(false);
    handleNext();
  }
  const handleTryAgain = () => {
    setIsChecking(false);
    setFlip(false);
  }
  const handleRandom = () => {
    setcurrentCardNum(Math.floor(Math.random()*subjects[currentSubject].array[0].length))
  }
 
  
  return(
      <div className={classes.page_layout}>
        <div className={classes.left}>
          <h3>Subjects</h3>
          <div className={classes.contentLeft}>
            <ul className={styles.instruction}>
              {subjects.map((subject, i) => (
                <li key={`subject_${i}`}><StyledButton disabled={(i===currentSubject)} className={(i===currentSubject) && classes.activeSubject} onClick={() => handleChangeSubject(i)}>{subject.name}</StyledButton></li>
              ))}
            </ul>
          </div>
        </div>
        <div className={classes.right}>   
          <h3>{subjects[currentSubject].name}</h3><br/>
          <div className={[classes.card, flip ? classes.flip : ''].join(' ')} onClick={() => {mode==="learn" && setFlip(!flip)}}>
            <div className={classes.front}>{currentCard[0]}</div>
            <div className={classes.back}>{currentCard[1]}</div>
          </div>
          {mode==="learn" && <div className={classes.cardNavigator}>
            <button className={classes.arrowBtn} disabled={!prevBtnIsActive} onClick={handlePrev}><AiOutlineArrowLeft/></button>
            <div className={classes.monitor}>
              <select className={classes.num_selector} value={currentCardNum} onChange={handleSelect}>
                {subjects[currentSubject].array[0].map((numMonitor,i) => (
                  <option key={numMonitor} value={i}>({numMonitor}) {i+1}</option>
                ))}
              </select> / {subjects[currentSubject].array[0].length}
            </div>
            <button className={classes.arrowBtn} disabled={!nextBtnIsActive} onClick={handleNext}><AiOutlineArrowRight/></button>
          </div>}
          {mode==="practice" && <><br/>
          <div> <span  style={{fontSize:"1.1rem", fontWeight:"bold"}}>Word</span> {currentCardNum+1} / {subjects[currentSubject].array[0].length} </div>
          <div>{answersArray[0].map((answer, i) => {
            return (
              <div className={classes.check_box} key={i}>
                <label htmlFor={answer}>
                  <input disabled={isChecking} id={answer} type="radio" checked={checkedAnswer===i} onChange={() => setCheckedAnswer(i)} name="task" /> {answer}
                  {(isChecking && i===checkedAnswer) && <>{(i===answersArray[1]) ? <BsCheckCircleFill style={{color:"green", marginLeft:"10px"}}/> : <BsXCircleFill style={{color:"red", marginLeft:"10px"}}/>}
                  </>}
                </label>
              </div>
            );
          })}</div>
          <div className={classes.bottom}>
            {isChecking ? <><StyledButton onClick={handleProgress}>Next Word</StyledButton>
            <div className={classes.secondaryBtn} onClick={handleTryAgain}>Try Again</div></>
            :<><StyledButton onClick={handleCheckAnswer}>Check Answer</StyledButton>
            <div className={classes.secondaryBtn} onClick={handleRandom}>Random Word</div></>}
          </div>
          </>}
        </div>
      </div>
  )
}

export default SubjectAndCard