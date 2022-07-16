import React, { useEffect, useState } from "react";
import classes from "./Lesson.module.css";
import { Link } from "react-router-dom";

const LessonsBeginnerPage = () => {
  const [lessons, setLessons] = useState(null);
  const URL_API =
    "https://vietnameseforeveryone-576e2-default-rtdb.asia-southeast1.firebasedatabase.app/lesson-beginner";

  const fetchLessonAPI = async () => {
    try {
      const response = await fetch(`${URL_API}/.json`);
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const lessonData = await response.json();
      let transformedLessons = [];

      for (const key in lessonData) {
        transformedLessons.push({
          id: lessonData[key].id,
          title: lessonData[key].title,
          description: lessonData[key].description,
          image: lessonData[key].image,
          stats: lessonData[key].stats,
        });
      }

      setLessons(transformedLessons);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchLessonAPI();
  }, []);

  return (
    <div className={classes.pageBeginner}>
      {lessons &&
        lessons.map((item, index) => (
          <div key={index} className={classes.containerItem}>
            <Link
              to={`/lessons/${item.id}`}
              key={index}
              className={classes.link}
            >
              <img src={item.image} alt="" className={classes.item_img} />
              <h3>{item.title}</h3>
              <h4>{item.description}</h4>
              <h4>{item.stats}</h4>
            </Link>
          </div>
        ))}
      ;
    </div>
  );
};

export default LessonsBeginnerPage;
