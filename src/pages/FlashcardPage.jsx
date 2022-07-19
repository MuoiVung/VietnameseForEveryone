import React, { useState } from "react";
import FlashcardList from "./FlashcardPageChill/FlashcardList";
import "./FlashcardPageChill/appFlashcard.css";




const FlashcardPage = () => {
  const [flashcard, setFlashcard] = useState(SAPM_FKASHCARDS);

  return (
    <>
      <h1>FlashcardPage</h1>
      <div className="flachcard-page ">
        <FlashcardList flashcard={flashcard} setFlashcard={setFlashcard} />
      </div>
    </>
  );
};

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
  // {
  //   id: 2,
  //   question: "Dòng nào khái quát được yêu cầu sử dụng tiếng Việt?",
  //   answer: 'Sử dụng đúng và chính xác',
  //   options: [
  //     'Sử dụng đúng và chính xác',
  //     'Sử dụng hay và phong phú',
  //     'Sử dụng chính xác và phong phú',
  //     'Sử dụng đúng và hay'
  //   ]
  // },
  // {
  //   id: 3,
  //   question: "Dòng nào nêu đúng và đủ yêu cầu sử dụng tiếng Việt về ngữ âm và chữ viết?",
  //   answer: ' Phát âm theo âm thanh chuẩn, viết đúng các quy tắc chính tả.',
  //   options: [
  //     ' Phát âm theo âm thanh chuẩn, thể hiện ở chữ viết.',
  //     'Viết đúng các quy tắc chính tả.',
  //     ' Phát âm theo âm thanh chuẩn, viết đúng các quy tắc chính tả.',
  //     ' Sử dụng đúng từ ngữ và viết đúng quy tắc ngữ pháp.'
  //   ]
  // },
  // {
  //   id: 4,
  //   question: "Trường hợp nào sau đây mắc lỗi về ngữ âm và chữ viết?",
  //   answer: 'Con châu thắng trận tung hoành trên bãi biển.',
  //   options: [
  //     '  Từng dấu bàn chân trâu to lớn để lại trên cát.',
  //     ' Từng dấu bàn chân trâu to lớn để lại trên cát.',
  //     '  Con châu thắng trận tung hoành trên bãi biển.',
  //     'Chuỗi hạt trân châu này thật đẹp.'
  //   ]
  // },
  // {
  //   id: 5,
  //   question: "Dòng nào nêu đúng và đủ yêu cầu sử dụng tiếng Việt về từ ngữ?",
  //   answer: ' Dùng đúng hình thức và cấu tạo, ý nghĩa và đặc điểm ngữ pháp.',
  //   options: [
  //     '  Dùng đúng hình thức và cấu tạo, ý nghĩa và đặc điểm ngữ pháp.',
  //     ' Dùng đúng quy cách cấu tạo, ý nghĩa và đặc điểm của tiếng Việt.',
  //     '  Dùng đúng hình thức và cấu tạo, ý nghĩa và đặc điểm ngữ pháp.',
  //     ' Dùng đúng cách phát âm các từ ngữ theo chuẩn tiếng Việt.'
  //   ]
  // },
  // {
  //   id: 6,
  //   question: "Câu nào không mắc lỗi dùng từ?",
  //   answer: 'Anh ấy thật sự là một tấm gương sáng chói.',
  //   options: [
  //     ' Một màn sương bàn bạc bay trong không gian.',
  //     ' Thúy Kiều là con người tài sách vẹn toàn.',
  //     '  Cuộc họp sẽ kéo dài vì nhiều việc phải bàng bạc kĩ.',
  //     'Anh ấy thật sự là một tấm gương sáng chói.'
  //   ]
  // },
  // {
  //   id: 7,
  //   question: "Dòng nào nêu đúng yêu cầu sử dụng tiếng Việt về ngữ pháp?",
  //   answer: 'Viết câu đúng quy tắc ngữ pháp, dùng đúng dấu câu.',
  //   options: [
  //     ' Dùng từ ngữ đúng với hình thức và cấu tạo.',
  //     ' Viết câu đúng quy tắc ngữ pháp, dùng đúng dấu câu.',
  //     '  Viết câu đúng quy tắc ngữ pháp, dùng đúng dấu câu.',
  //     'Viết tiếng Việt đúng theo quy tắc chính tả hiện hành.'
  //   ]
  // },
];

export default FlashcardPage;
