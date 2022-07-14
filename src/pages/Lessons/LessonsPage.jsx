import React from "react";
import { Link } from "react-router-dom";

const LessonsPage = () => {
  return (
    <div>
      <h1>LessonsPage</h1>
      <p>
        <Link to="/lessons/"> lesson 1</Link>
      </p>
    </div>
  );
};

export default LessonsPage;
