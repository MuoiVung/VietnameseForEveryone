import React from "react";
import { useParams, Link } from "react-router-dom";

const LessonsPage = () => {
  const { lessonId } = useParams();

  return (
    <div>
      <h1>LessonsPage</h1>
      <p>{lessonId}</p>
      <Link to="/lessons/lesson1">lesson 1</Link>
    </div>
  );
};

export default LessonsPage;
