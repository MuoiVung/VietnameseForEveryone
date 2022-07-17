import React, { useState } from 'react';
import SButton from '../CustomHooks/SButton';
import classes from '../Lesson.module.css';

const Comments = () => {

  const [input, setInput] = useState("");

  const initial = {
      name: "",
      email: "",
      comment: ""
  }

  const handleGetInput = (e) => {
      setInput(e.target.value);
      console.log(input);
  }
  const handleSubmit =  () => {
    ///
  }

  return (
    <div>
        <h3>Comments</h3>
        <form onSubmit={handleSubmit} className={classes.form_comment}>
          <textarea name="" id=""
          onChange={handleGetInput}
          className={classes.form_textarea}
          placeholder='Write a comment...'
          cols="30" rows="10">
          </textarea>
          <input type="text" 
          placeholder='Enter Name' 
          onChange={handleGetInput}
          className={classes.form_input_name}>
          </input>
          <input type="email"
          placeholder='Enter Email' 
          onChange={handleGetInput}
          className={classes.form_input_email}>
          </input>
          <SButton type='submit' className={classes.form_input_button}>Submit Comments</SButton>
        </form>
    </div>
  )
}

export default Comments