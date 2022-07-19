import React, { useState } from 'react'
import Checkoptions from './Checkoptions'
import classes from './FlashCard.module.css';

const FlashCard = ({ flashcard, setFlashcard }) => {
    const [flip, setFlip] = useState(false)

    return (
        <div className={classes.content_flashcard}>
            <div className={classes.left}>
                <h3>How to play</h3>
                <div className={classes.contentLeft}>
                    Listen and type what you hear in the "Guess" box.
                    Press "Check Answer" - Correct words will replace the stars.
                    Keep going until you have all of the text.
                    Do NOT type full stops / periods, commas or dashes ( - ).
                    Click the "Give Up" button to reveal whole letters.
                    Click "Next Question" button to start new question
                    Click "Try Again" button to do the current question once again
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
                                return <div className={classes.flashcardOption} key={i}>{item}</div>
                            })}
                        </div>
                    </div>
                    <div className={classes.back}>{flashcard.answer}</div>
                </div>
                <Checkoptions flashcard={flashcard.options} />
            </div>
            <div className={classes.bottom}>
                <button onClick={() => {
                    setFlip(!flip)
                }}>
                    Check Answer
                </button>
                <button>Give Up</button>
            </div>
        </div>
    )
}



export default FlashCard