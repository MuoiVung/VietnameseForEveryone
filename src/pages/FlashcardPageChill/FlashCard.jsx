import React, { useState } from 'react'

const FlashCard = ({ flashcard }) => {
    const [flip, setFlip] = useState(false)
    return (
        <div
            className={`card ${flip ? 'flip' : ''}`}
            onClick={() => {
                setFlip(!flip)
            }}
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
            {/* {
                flip ? flashcard.answer : flashcard.question
            } */}
        </div>
    )
}



export default FlashCard