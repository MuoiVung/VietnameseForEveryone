import React from 'react'
import FlashCard from './FlashCard'

const FlashcardList = ({ flashcard, setFlashcard }) => {
    return (
        <div className='card-grid'>
            {
                flashcard.map(flashcard => {
                    return <FlashCard flashcard={flashcard} key={flashcard.id} setFlashcard={setFlashcard} />
                })
            }
        </div>
    )
}

export default FlashcardList