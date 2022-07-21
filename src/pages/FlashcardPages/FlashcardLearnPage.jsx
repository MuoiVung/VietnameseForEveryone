import React from "react";
import { useState, useEffect } from "react";
import StyledButton from "../../components/UI/StyledButton";
import classes from '../FlashcardPageChill/FlashCard.module.css';
import Header from "../../components/Layout/Header";
import Breadcrumb from "../../components/UI/Breadcrumb";
import BreadcrumbItem from "../../components/UI/BreadcrumItem";
import {AiOutlineArrowLeft,AiOutlineArrowRight} from "react-icons/ai"
const CardArray = [
  {
    id: 1,
    question:
      "Dòng nào nêu đúng các phương diện của yêu cầu sử dụng tiếng Việt?",
    answer: "Ngữ âm và chữ viết, phong cách ngôn ngữ, ngữ pháp, từ ngữ.",
    options: [
      "Ngữ âm, ngữ pháp, phong cách ngôn ngữ, chính tả.",
      "Ngữ âm và chữ viết, phong cách ngôn ngữ, ngữ pháp, từ ngữ.",
      "Chữ viết, phong cách ngôn ngữ, chính tả, ngữ âm.",
      " Từ ngữ, ngữ âm, ngữ pháp, phong cách ngôn ngữ.",
    ],
  },
  {
    id: 2,
    question: "Dòng nào khái quát được yêu cầu sử dụng tiếng Việt?",
    answer: 'Sử dụng đúng và chính xác',
    options: [
      'Sử dụng đúng và chính xác',
      'Sử dụng hay và phong phú',
      'Sử dụng chính xác và phong phú',
      'Sử dụng đúng và hay'
    ]
  },
  {
    id: 3,
    question: "Dòng nào nêu đúng và đủ yêu cầu sử dụng tiếng Việt về ngữ âm và chữ viết?",
    answer: ' Phát âm theo âm thanh chuẩn, viết đúng các quy tắc chính tả.',
    options: [
      ' Phát âm theo âm thanh chuẩn, thể hiện ở chữ viết.',
      'Viết đúng các quy tắc chính tả.',
      ' Phát âm theo âm thanh chuẩn, viết đúng các quy tắc chính tả.',
      ' Sử dụng đúng từ ngữ và viết đúng quy tắc ngữ pháp.'
    ]
  },
  {
    id: 4,
    question: "Trường hợp nào sau đây mắc lỗi về ngữ âm và chữ viết?",
    answer: 'Con châu thắng trận tung hoành trên bãi biển.',
    options: [
      '  Từng dấu bàn chân trâu to lớn để lại trên cát.',
      ' Từng dấu bàn chân trâu to lớn để lại trên cát.',
      '  Con châu thắng trận tung hoành trên bãi biển.',
      'Chuỗi hạt trân châu này thật đẹp.'
    ]
  },
  {
    id: 5,
    question: "Dòng nào nêu đúng và đủ yêu cầu sử dụng tiếng Việt về từ ngữ?",
    answer: ' Dùng đúng hình thức và cấu tạo, ý nghĩa và đặc điểm ngữ pháp.',
    options: [
      '  Dùng đúng hình thức và cấu tạo, ý nghĩa và đặc điểm ngữ pháp.',
      ' Dùng đúng quy cách cấu tạo, ý nghĩa và đặc điểm của tiếng Việt.',
      '  Dùng đúng hình thức và cấu tạo, ý nghĩa và đặc điểm ngữ pháp.',
      ' Dùng đúng cách phát âm các từ ngữ theo chuẩn tiếng Việt.'
    ]
  },
  {
    id: 6,
    question: "Câu nào không mắc lỗi dùng từ?",
    answer: 'Anh ấy thật sự là một tấm gương sáng chói.',
    options: [
      ' Một màn sương bàn bạc bay trong không gian.',
      ' Thúy Kiều là con người tài sách vẹn toàn.',
      '  Cuộc họp sẽ kéo dài vì nhiều việc phải bàng bạc kĩ.',
      'Anh ấy thật sự là một tấm gương sáng chói.'
    ]
  },
  {
    id: 7,
    question: "Dòng nào nêu đúng yêu cầu sử dụng tiếng Việt về ngữ pháp?",
    answer: 'Viết câu đúng quy tắc ngữ pháp, dùng đúng dấu câu.',
    options: [
      ' Dùng từ ngữ đúng với hình thức và cấu tạo.',
      ' Viết câu đúng quy tắc ngữ pháp, dùng đúng dấu câu.',
      '  Viết câu đúng quy tắc ngữ pháp, dùng đúng dấu câu.',
      'Viết tiếng Việt đúng theo quy tắc chính tả hiện hành.'
    ]
  },
];

const FlashcardLearnPage = () => {
  const [currentCardNum, setcurrentCardNum] = useState(0);
  const [currentCard, setCurrentCard] = useState(CardArray[0]);
  const [nextBtnIsActive, setNextBtnIsActive] = useState(true);
  const [prevBtnIsActive, setPrevBtnIsActive] = useState(false);
  const [flip, setFlip] = useState(false)

  useEffect(() => {
    (currentCardNum === 0) ? setPrevBtnIsActive(false) : setPrevBtnIsActive(true);
    (currentCardNum === CardArray.length-1) ? setNextBtnIsActive(false) : setNextBtnIsActive(true);
    setCurrentCard(CardArray[currentCardNum]);
  }, [currentCardNum])
  const handleNext = () => {
    setcurrentCardNum((prev) => prev+1);
    (currentCardNum === CardArray.length) ? setNextBtnIsActive(false) : setNextBtnIsActive(true);
  }
  const handlePrev = () => {
    setcurrentCardNum((prev) => prev-1);
  }
  
  return(
    <>
      <Header title="Learn through flashcards">
        <Breadcrumb>
          <BreadcrumbItem>Flashcard</BreadcrumbItem>
          <BreadcrumbItem href="/flashcard/learn">Learn</BreadcrumbItem>
        </Breadcrumb>
      </Header>
      <br/>
      <div className={classes.learnPage}>
        <div>
        <div className={[classes.card, flip ? classes.flip : ''].join(' ')} onClick={() => {setFlip(!flip)}}>
          <div className={classes.front}>
              {currentCard.question}
              <div className={classes.flashcardOptions}>
                  {currentCard.options.map((item, i) => {
                      return <div className={classes.flashcardOption} key={i}>{i+1}. {item}</div>
                  })}
              </div>
          </div>
          <div className={classes.back}><b>ĐÁP ÁN:<br/></b>{currentCard.answer}</div>
        </div>
        <div className={classes.cardNavigator}>
          <button className={classes.arrowBtn} disabled={!prevBtnIsActive} onClick={handlePrev}><AiOutlineArrowLeft/></button>
          <div className={classes.monitor}>{currentCardNum+1} / {CardArray.length}</div>
          <button className={classes.arrowBtn} disabled={!nextBtnIsActive} onClick={handleNext}><AiOutlineArrowRight/></button>
        </div>
        </div>
      </div>
    </>
  )
};

export default FlashcardLearnPage;