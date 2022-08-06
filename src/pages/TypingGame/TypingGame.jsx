import React from 'react'
import classes from "./typingGame.module.css";
import { useEffect, useRef, useState } from 'react';
import Header from "../../components/Layout/Header";
import Breadcrumb from "../../components/UI/Breadcrumb";
import BreadcrumbItem from "../../components/UI/BreadcrumItem";
import StyledButton from "../../components/UI/StyledButton";
import styles from '../FlashcardPages/FlashCard.module.css';

const paragraphs = [
  "Mọi người đều có quyền được học hành. Phải áp dụng chế độ giáo dục miễn phí, ít nhất là ở bậc tiểu học và giáo dục cơ sở. Giáo dục tiểu học là bắt buộc. Giáo dục kỹ thuật và ngành nghề phải mang tính phổ thông, và giáo dục cao học phải theo nguyên tắc công bằng cho bất cứ ai có đủ khả năng.",
  "Bao nhiêu năm rồi làm gì và được gì. Ngày tháng sao vội đi đôi khi không như ý. Trôi qua bao nhiêu năm nữa. Có lẽ ta không ngây ngô như bây giờ",
  'Có thể khẳng định rằng Tiếng Việt là một thứ tiếng đẹp, một thứ tiếng hay. Nó là một thứ tiếng "đẹp" bởi "rất rành mạch trong lối nói, rất uyển chuyển trong câu kép, rất ngon lành trong những câu tục ngữ". Không chỉ vậy, tiếng Việt có một hệ thống nguyên âm, phụ âm phong phú và giàu về thanh điệu. Tiếng Việt có những khả năng dồi dào về phần cấu tạo từ ngữ, cũng như hình thức diễn đạt. Từ vựng qua thời gian cũng tăng lên và ngữ pháp trở nên uyển chuyển, chính xác hơn. Ngày nay, chúng ta cần phải giữ gìn sự trong sáng, giàu đẹp của tiếng Việt.'
];

const TypingGame = () => {
  const inputRef = useRef(null);
  const [charIndex, setCharIndex] = useState(0);
  const [typedCharsArr, setTypedCharsArr] = useState([])
  const [currentPara, setCurrentPara] = useState(2)
  const [paraToCharsArr, setParaToCharsArr] = useState(paragraphs[2].split(""));

  useEffect(() => {
    document.addEventListener("keydown", () => inputRef.current.focus());
  }, []);
  const handleChangePara = () => {
    let randomIndex = 0;
    do {
      randomIndex = Math.floor(Math.random() * paragraphs.length);
    } while (randomIndex===currentPara);
    setCurrentPara(randomIndex);
  }
  useEffect(() => {
    setParaToCharsArr(paragraphs[currentPara].split(""));
    setCharIndex(0);
    setTypedCharsArr([]);
    inputRef.current.value="";
  }, [currentPara])
  
  const handleType = (e) => {
    setTypedCharsArr(e.target.value.split(""));
    let typedChar = e.target.value.split("")[charIndex];
    if (typedChar) {
      setCharIndex(index => index + 1);
    } else {
      setCharIndex(index => (index>0) ? index - 1 : index);
    }
  }
  return (
    <>
    <Header title="Practice typing vietnamese">
        <Breadcrumb>
          <BreadcrumbItem href="/typing">Typing</BreadcrumbItem>
        </Breadcrumb>
      </Header>
      <br/>
    <div className={styles.page_layout}>
      <div className={styles.left}>
        <h3>Cách gõ dấu tiếng Việt:</h3><br/>
        <h4>Telex: </h4>
        <p style={{color:"black"}}>
        Chữ S: dấu Sắc;<br/> 
        chữ F: dấu Huyền;<br/> 
        chữ R: dấu Hỏi; <br/>
        chữ X: dấu Ngã; <br/>
        chữ J: dấu Nặng; <br/>
        chữ W: dấu Á (ă) hoặc dấu Ơ (ơ, ư);<br/> 
        đánh đúp chữ aa, ee, oo…sẽ cho dấu Ô;<br/> 
        đánh đúp chữ dd: chữ Đ</p><br/>
        <h4>VNI: </h4>
        <p style={{color:"black"}}> 
        Phím 1 là dấu sắc<br/>
        Phím 2 là dấu huyền<br/>
        Phím 3 là dấu hỏi<br/>
        Phím 4 là dấu ngã<br/>
        Phím 5 là dấu nặng<br/>
        Phím 6 là dấu ô (â, ô)<br/>
        Phím 7 là dấu mũ (ư, ơ)<br/>
        Phím 8 là dấu á (ă)<br/>
        Phím 9 dùng gõ chữ "Đ" khi kết hợp với chữ "D"</p><br/>
      </div>
      <div className={styles.right}>
        <div className={classes.typing_wrapper}>
    <input type="text" ref={e => (inputRef.current = e)} onChange={handleType} className={classes.input_field}/>
      <div className={classes.typing_area}><p>
      {paraToCharsArr.map((char,i) => (
        <span 
          key={`char_${i}`} 
          className={[(i===charIndex) && classes.active,(i<charIndex && typedCharsArr[i]===paraToCharsArr[i]) && classes.correct, (i<charIndex && typedCharsArr[i]!==paraToCharsArr[i]) && classes.incorrect].join(' ')}>
          {char}
        </span>
      ))}
      </p></div>
      
      </div><br/><StyledButton onClick={handleChangePara}>Change Paragraph</StyledButton></div>
      </div>
    </>
  )
}

export default TypingGame