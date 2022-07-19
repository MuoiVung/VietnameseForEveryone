import React, { useState } from 'react'
import Checkoptions from './Checkoptions'

const FlashCard = ({ flashcard, setFlashcard }) => {
    const [flip, setFlip] = useState(false)

    return (
        <div className='content_flashcard'>
            <div className='left'>
                <h3>How to play</h3>
                <div className='content-left'>
                    Listen and type what you hear in the "Guess" box.
                    Press "Check Answer" - Correct words will replace the stars.
                    Keep going until you have all of the text.
                    Do NOT type full stops / periods, commas or dashes ( - ).
                    Click the "Give Up" button to reveal whole letters.
                    Click "Next Question" button to start new question
                    Click "Try Again" button to do the current question once again
                </div>
            </div>
            <div className='right'>
                <h3>Exercise</h3>
                <div
                    className={`card ${flip ? 'flip' : ''} `}
                >
                    <div className='front'>
                        {flashcard.question}
                        <div className='flashcarrd-options'>
                            {flashcard.options.map((item, i) => {
                                return <div className='flashcarrd-option' key={i}>{item}</div>
                            })}
                        </div>
                    </div>
                    <div className='back'>{flashcard.answer}</div>
                </div>
                <Checkoptions flashcard={flashcard.options} />
            </div>
            <div className='bottom'>
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