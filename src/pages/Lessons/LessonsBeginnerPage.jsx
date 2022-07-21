import React, {Fragment, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import classes from './Lesson.module.css';
import Header from '../../components/Layout/Header';
import Breadcrumb from '../../components/UI/Breadcrumb';
import BreadcrumItem from '../../components/UI/BreadcrumItem';

const LessonsBeginnerPage = () => {
  const [lessons, setLessons] = useState (null);
  const URL_API =
    'https://vietnameseforeveryone-576e2-default-rtdb.asia-southeast1.firebasedatabase.app/lesson-beginner';

  const fetchLessonAPI = async () => {
    try {
      const response = await fetch (`${URL_API}/.json`);
      if (!response.ok) {
        throw new Error ('Something went wrong!');
      }
      const lessonData = await response.json ();
      let transformedLessons = [];

      for (const key in lessonData) {
        transformedLessons.push ({
          id: lessonData[key].id,
          title: lessonData[key].title,
          description: lessonData[key].description,
          image: lessonData[key].image,
          stats: lessonData[key].stats,
        });
      }
      setLessons (transformedLessons);
    } catch (error) {
      console.error (error.message);
    }
  };

  useEffect (() => {
    fetchLessonAPI ();
  }, []);

  return (
    <Fragment>
      <Header title="Beginner Lessons">
        <Breadcrumb>
          <BreadcrumItem>Lessons</BreadcrumItem>
          <BreadcrumItem href="/lessons/beginner">beginner</BreadcrumItem>
        </Breadcrumb>
      </Header>
      <div className={classes.pageBeginner}>
        {lessons &&
          lessons.map ((item, index) => (
            <div key={index} className={classes.containerItem}>
              <Link
                to={`/lessons/beginner/${item.id}`}
                key={index}
                className={classes.item_link}
              >
                <img src={item.image} alt="" className={classes.item_img} />
                <h4 className={classes.item_title}>{item.title}</h4>
                <div className={classes.item_description}>
                  <p className={classes.item_text}>{item.description}</p>
                  <p className={classes.item_text}>{item.stats}</p>
                </div>
              </Link>
            </div>
          ))}
      </div>
    </Fragment>
  );
};

export default LessonsBeginnerPage;
