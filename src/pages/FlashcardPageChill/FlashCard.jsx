import React, { useState } from 'react'
import Checkoptions from './Checkoptions'
import classes from './FlashCard.module.css';
import StyledButton from '../../components/UI/StyledButton';
import styles from "../QuickExercises/ListeningPage.module.scss";

const FlashCard = ({ flashcard, setFlashcard }) => {
    const [flip, setFlip] = useState(false)

    return (
        <div className={classes.content_flashcard}>
            <div className={classes.left}>
                <h3>How to play</h3>
                <div className={classes.contentLeft}>
                <ul className={styles.instruction}>
                    <li>Read the flash card then pick your answer among 4 options.</li>
                    <li>Click "Check Answer" or "Give Up" to flip the card and reveal the right answer.</li>
                    <li>Click "Next Card" to proceed to the next card in the deck.</li>
                    <li>Click "Previous Card" to return to the previous card in the deck.</li>
                    <li>Click "Try Again" to do the current question once again.</li>
                </ul>
                </div>
            </div>
            <div className={classes.right}>
                <h3>Exercise</h3>
                <br/><div className={[classes.card, flip ? classes.flip : ''].join(' ')}>
                    <div className={classes.front}>
                        {flashcard.question}
                        <div className={classes.flashcardOptions}>
                            {flashcard.options.map((item, i) => {
                                return <div className={classes.flashcardOption} key={i}>{i+1}. {item}</div>
                            })}
                        </div>
                    </div>
                    <div className={classes.back}><b>ĐÁP ÁN:<br/></b>{flashcard.answer}</div>
                </div><br/><br/>
                <Checkoptions flashcard={flashcard.options} />
                <div className={classes.bottom}>
                    <StyledButton onClick={() => {setFlip(!flip)}}>
                        Check Answer
                    </StyledButton>
                    <div className={classes.secondaryBtn} onClick={() => {setFlip(!flip)}}>Give Up</div>
                </div>
            </div>
            
        </div>
    )
}

const SAPM_FKASHCARDS = [
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

export default FlashCard