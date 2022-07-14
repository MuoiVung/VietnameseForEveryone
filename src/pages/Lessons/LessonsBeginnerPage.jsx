import React from 'react';
import Header from './Header';
import classes from './Lesson.module.css';
import {Link} from 'react-router-dom';

const LessonsBeginnerPage = () => {
  const data = [
    {
      id: 1,
      title: 'Introducing Yourself in Vietnamese',
      description: 'Learn how to introduce yourself',
      image: 'https://cdn-icons-png.flaticon.com/512/5663/5663188.png',
      time: '11 Minutes . Audio',
    },
    {
      id: 2,
      title: 'Introducing Yourself in Vietnamese',
      description: 'Learn how to introduce yourself',
      image: 'https://cdn-icons-png.flaticon.com/512/5663/5663188.png',
      time: '11 Minutes . Audio',
    },
    {
      id: 3,
      title: 'Introducing Yourself in Vietnamese',
      description: 'Learn how to introduce yourself',
      image: 'https://cdn-icons-png.flaticon.com/512/5663/5663188.png',
      time: '11 Minutes . Audio',
    },
    {
      id: 4,
      title: 'Introducing Yourself in Vietnamese',
      description: 'Learn how to introduce yourself',
      image: 'https://cdn-icons-png.flaticon.com/512/5663/5663188.png',
      time: '11 Minutes . Audio',
    },
    {
      id: 5,
      title: 'Introducing Yourself in Vietnamese',
      description: 'Learn how to introduce yourself',
      image: 'https://cdn-icons-png.flaticon.com/512/5663/5663188.png',
      time: '11 Minutes . Audio',
    },
    {
      id: 6,
      title: 'Introducing Yourself in Vietnamese',
      description: 'Learn how to introduce yourself',
      image: 'https://cdn-icons-png.flaticon.com/512/5663/5663188.png',
      time: '11 Minutes . Audio',
    },
    {
      id: 7,
      title: 'Introducing Yourself in Vietnamese',
      description: 'Learn how to introduce yourself',
      image: 'https://cdn-icons-png.flaticon.com/512/5663/5663188.png',
      time: '11 Minutes . Audio',
    },
    {
      id: 8,
      title: 'Introducing Yourself in Vietnamese',
      description: 'Learn how to introduce yourself',
      image: 'https://cdn-icons-png.flaticon.com/512/5663/5663188.png',
      time: '11 Minutes . Audio',
    },
  ];

  return (
    <div>
      <Header />
      <Link to="/lessons:lessonId" className={classes.link}>
        <div className={classes.pageBeginner}>
          {data.map ((item, index) => (
            <div key={index} className={classes.containerItem}>
              <img src={item.image} alt="" className={classes.item_img} />
              <h3>{item.title}</h3>
              <h4>{item.description}</h4>
              <h4>{item.time}</h4>
            </div>
          ))}

        </div>
      </Link>

    </div>
  );
};

export default LessonsBeginnerPage;
