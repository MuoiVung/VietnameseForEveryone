import React from "react";
import { useParams } from "react-router-dom";

const LessonDetailPage = () => {
  const { lessonId } = useParams();
  return (
    <div>
      <h1>LessonDetailPage</h1>
      <p>LessonID: {lessonId}</p>
    </div>
  );
};

export default LessonDetailPage;
