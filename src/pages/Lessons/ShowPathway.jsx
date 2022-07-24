import React from 'react';
import {Link} from 'react-router-dom';
import classes from './Lesson.module.css';

const ShowPathway = ({lessons}) => {
  return (
    <div className={classes.showPathway_container}>
      {lessons &&
        lessons.map ((item, index) => (
          <Link
            to={`/lessons/beginner/${item.id}`}
            key={index}
            className={classes.showPathway_Link}
          >
            <div className={classes.showPathway_content}>
              <span className={classes.showPathway_count}>{index + 1}</span>
              <div className={classes.showPathway_title}>
                <h1>{item.title}</h1>
                <span>{item.stats}</span>
              </div>
              <button className={classes.showPathway_checkbox} />
            </div>
          </Link>
        ))}
    </div>
  );
};

export default ShowPathway;
