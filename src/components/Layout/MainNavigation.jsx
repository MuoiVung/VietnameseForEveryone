import React from "react";
import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";

const MainNavigation = () => {
  return (
    <section className={classes.sidebar}>
      MainNavigation
      <nav>
        <ul>
          <li>
            <NavLink
              to="/lessons"
              className={(navData) => (navData.isActive ? classes.active : "")}
            >
              Lessons
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/quiz-arena"
              className={(navData) => (navData.isActive ? classes.active : "")}
            >
              Quiz Arena
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/flashcard"
              className={(navData) => (navData.isActive ? classes.active : "")}
            >
              Flashcard
            </NavLink>
          </li>
        </ul>
      </nav>
      <div>
        <a href="/login">Login</a>
      </div>
    </section>
  );
};

export default MainNavigation;
