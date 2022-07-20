import React, {useState, useEffect} from 'react';
import SButton from '../CustomHooks/SButton';
import classes from '../Lesson.module.css';

const Comments = ({display}) => {
  const [input, setInput] = useState ('');

  const initial = {
    comment: '',
    name: '',
    email: '',
  };
  const [data, setData] = useState (null);

  const handleGetInput = e => {
    const {value, name} = e.target;
    setInput (() => {
      return {...input, [name]: value};
    });
  };
  async function addVocabHandler (comments) {
    try {
      const response = await fetch (
        'https://vietnameseforeveryone-576e2-default-rtdb.asia-southeast1.firebasedatabase.app/comments.json',
        {
          method: 'POST',
          body: JSON.stringify (input),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      const data = await response.json ();
      let dataComment = [];

      for (const key in dataComment) {
        dataComment.push ({
          comment: data[key].comment,
          name: data[key].name,
          email: data[key].email,
        });
      }
      setData (dataComment);
    } catch (e) {
      console.error (e.massage);
    }
  }

  const URL_API =
    'https://vietnameseforeveryone-576e2-default-rtdb.asia-southeast1.firebasedatabase.app/comments';

  const fetchLessonAPI = async () => {
    try {
      const response = await fetch (`${URL_API}/.json`);
      if (!response.ok) {
        throw new Error ('Something went wrong!');
      }
      const dataComment = await response.json ();
      let transformedLessons = [];

      for (const key in dataComment) {
        transformedLessons.push ({
          comment: dataComment[key].comment,
          name: dataComment[key].name,
          email: dataComment[key].email,
        });
      }
      setData (transformedLessons);
    } catch (error) {
      console.error (error.message);
    }
  };

  const handleSubmit = e => {
    e.preventDefault ();
    addVocabHandler (input);
    setInput (initial);
  };
  useEffect (
    () => {
      fetchLessonAPI ();
    },
    [data]
  );

  return (
    <div
      className={classes.comments_container}
      id="comments"
      style={{display: `${display}`}}
    >
      <form onSubmit={handleSubmit} className={classes.form_comments}>
        <textarea
          name="comment"
          id=""
          value={input.comment}
          onChange={handleGetInput}
          className={classes.form_textarea}
          placeholder="Write a comment..."
          cols="30"
          rows="10"
        />
        <input
          type="text"
          name="name"
          value={input.name}
          placeholder="Enter Name"
          onChange={handleGetInput}
          className={classes.form_input_name}
        />
        <input
          type="email"
          value={input.email}
          name="email"
          placeholder="Enter Email"
          onChange={handleGetInput}
          className={classes.form_input_email}
        />
        <SButton type="submit" className={classes.form_input_button}>
          Submit Comments
        </SButton>
      </form>
      {data &&
        data.map ((item, index) => (
          <div key={index} className={classes.comments_item}>
            <h4 className={classes.comments_item_name}>{item.name}</h4>
            <p className={classes.comments_item_comment}>{item.comment}</p>
          </div>
        ))}

    </div>
  );
};

export default Comments;
