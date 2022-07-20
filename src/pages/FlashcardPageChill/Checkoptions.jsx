import React from 'react'
import classes from './FlashCard.module.css';

const Checkoptions = (flashcard) => {
    console.log(flashcard)
    return (
        <div>
            {flashcard.flashcard.map((item, i) => {
                return (
                <div className={classes.check_box} key={i}>
                    <label htmlFor={item}>
                    <input id={item} type="radio" name="task"/> {item}
                    </label>
                </div>)
            })}
        </div>
    )
}

export default Checkoptions