import React from 'react'
import Checkoptions from './Checkoptions'
import FlashCard from './FlashCard'

const FlashcardList = ({ flashcard }) => {
    return (
        <div className='card-grid'>
            {
                flashcard.map(flashcard => {
                    return <FlashCard flashcard={flashcard} key={flashcard.id} />
                })
            }
            {
                flashcard.map((item, i) => {
                    return <Checkoptions item={item} key={i} />
                })
            }
        </div>
    )
}

export default FlashcardList