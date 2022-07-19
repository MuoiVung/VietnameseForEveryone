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
                <div
                    className={[classes.card, flip ? classes.flip : ''].join(' ')}
                    onClick={() => {
                        setFlip(!flip)
                    }}
                >
                    <div className={classes.front}>
                        {flashcard.question}
                        <div className={classes.flashcardOptions}>
                            {flashcard.options.map((item, i) => {
                                return <div className={classes.flashcardOption} key={i}>-{item}</div>
                            })}
                        </div>
                    </div>
                    <div className={classes.back}><b>ĐÁP ÁN:<br/></b>{flashcard.answer}</div>
                </div>
                <Checkoptions flashcard={flashcard.options} />
                <div className={classes.bottom}>
                    <StyledButton onClick={() => {
                        setFlip(true)
                    }}>
                        Check Answer
                    </StyledButton>
                    <div className={classes.secondaryBtn}>Give Up</div>
                </div>
            </div>
            
        </div>
    )
}



export default FlashCard