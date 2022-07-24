import React from "react";
import { useState, useEffect } from "react";
import classes from '../FlashcardPageChill/FlashCard.module.css';
import Header from "../../components/Layout/Header";
import Breadcrumb from "../../components/UI/Breadcrumb";
import BreadcrumbItem from "../../components/UI/BreadcrumItem";
import {AiOutlineArrowLeft,AiOutlineArrowRight} from "react-icons/ai"
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
  ["Head","Face","Hair","Eye","Ear","Nose","Mouth","Tooth","Lips","Skin","Neck","Vai","Ngực","Bụng","Arm","Hand","Leg","Foot"],
  ["Đầu","Khuôn mặt","Tóc","Mắt","Tai","Mũi","Miệng","Răng","Môi","Da","Cổ","Shoulder","Chest","Belly","Cánh Tay","Bàn Tay","Cẳng Chân","Bàn Chân"]
];

const subjects = [["Colors","Numbers","Body Parts"],[colors,numbers,bodyParts]];

const FlashcardLearnPage = () => {
  const [currentCardNum, setcurrentCardNum] = useState(0);
  const [currentCard, setCurrentCard] = useState([subjects[1][0][0],subjects[1][1][0]]);
  const [nextBtnIsActive, setNextBtnIsActive] = useState(true);
  const [prevBtnIsActive, setPrevBtnIsActive] = useState(false);
  const [flip, setFlip] = useState(false)
  const [currentSubject, setCurrentSubject] = useState(0)

  useEffect(() => {
    (currentCardNum === 0) ? setPrevBtnIsActive(false) : setPrevBtnIsActive(true);
    (currentCardNum === subjects[1][currentSubject][0].length-1) ? setNextBtnIsActive(false) : setNextBtnIsActive(true);
    setCurrentCard([subjects[1][currentSubject][0][currentCardNum],subjects[1][currentSubject][1][currentCardNum]]);
    setFlip(false);
  }, [currentCardNum,currentSubject])
  const handleNext = () => {
    setcurrentCardNum((prev) => Number(prev)+1);
  }
  const handlePrev = () => {
    setcurrentCardNum((prev) => Number(prev)-1);
  }
  const handleChangeSubject = (i) => {
    (i!==currentSubject) && setCurrentSubject(i);
    setcurrentCardNum(0);
  }
  const handleSelect = (e) => {
    setcurrentCardNum(e.target.value);
  }
  
  return(
    <>
      <Header title="Learn Vocabulary Through Flashcards">
        <Breadcrumb>
          <BreadcrumbItem>Flashcard</BreadcrumbItem>
          <BreadcrumbItem href="/flashcard/learn">Learn</BreadcrumbItem>
        </Breadcrumb>
      </Header>
      <br/>
      <div className={classes.learnPage}>
        <div className={classes.left}>
            <h3>Subjects</h3>
            <div className={classes.contentLeft}>
            <ul className={styles.instruction}>
                {subjects[0].map((subject, i) => (
                  <li key={`subject_${i}`}><StyledButton disabled={(i===currentSubject)} className={(i===currentSubject) && classes.activeSubject} onClick={() => handleChangeSubject(i)}>{subject}</StyledButton></li>
                ))}
            </ul>
            </div>
        </div>
        <div className={classes.right}>   
          <h3>{subjects[0][currentSubject]}</h3><br/>
          <div className={[classes.card, flip ? classes.flip : ''].join(' ')} onClick={() => {setFlip(!flip)}}>
            <div className={classes.front}>{currentCard[0]}</div>
            <div className={classes.back}>{currentCard[1]}</div>
          </div>
          <div className={classes.cardNavigator}>
            <button className={classes.arrowBtn} disabled={!prevBtnIsActive} onClick={handlePrev}><AiOutlineArrowLeft/></button>
            <div className={classes.monitor}>
              <select className={classes.num_selector} onChange={handleSelect} value={currentCardNum}>
                {subjects[1][currentSubject][0].map((numMonitor,i) => (
                  <option key={numMonitor} value={i}>{i+1}</option>
                ))}
              </select> / {subjects[1][currentSubject][0].length}
            </div>
            <button className={classes.arrowBtn} disabled={!nextBtnIsActive} onClick={handleNext}><AiOutlineArrowRight/></button>
          </div>
        </div>
      </div>
    </>
  )
};

export default FlashcardLearnPage;