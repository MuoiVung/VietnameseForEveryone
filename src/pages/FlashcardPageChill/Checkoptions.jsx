import React from 'react'

const Checkoptions = (flashcard) => {
    console.log(flashcard)
    return (
        <div>
            {
                flashcard.flashcard.map((item, i) => {
                    return <div className='check_box' key={i}><input type="radio" name='options' /> <span>{item}</span></div>
                })
            }
        </div>
    )
}

export default Checkoptions