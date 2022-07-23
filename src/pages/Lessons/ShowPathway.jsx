import React from 'react';
import {Link} from 'react-router-dom';

const ShowPathway = ({lessons}) => {
  return (
    <div style={{padding: '10px'}}>
      {lessons &&
        lessons.map ((item, index) => (
          <Link to={`/lessons/beginner/${item.id}`} key={index}>
            <div
              style={{
                display: 'flex',
                backgroundColor: '#555',
                padding: '10px',
                margin: '10px',
              }}
            >
              <span style={{fontSize: '40px'}}>{index + 1}</span>
              <h1>{item.title}</h1>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default ShowPathway;
