import React from "react";
import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";
import userAvatar from "../../assets/img/user-avatar.jpg";
import { MdOutlineQuiz as QuizIcon } from "react-icons/md";
import { RiLogoutBoxLine as LoginIcon } from "react-icons/ri";

const MainNavigation = () => {
  return (
    <section className={classes.sidebar}>
      <div className={classes.container}>
        <h1 className={classes.logo}>Vife</h1>
        <div className={classes.user}>
          <p className={classes["user-avatar"]}>
            <img src={userAvatar} alt="user avatar" />
          </p>
          <p className={classes["user-name"]}>Wimp Mullan</p>
        </div>
        <nav>
          <ul className={classes["nav-list"]}>
            <li>
              <span className={classes.icon}></span>
              <NavLink
                to="/lessons"
                className={(navData) =>
                  navData.isActive ? classes.active : ""
                }
              >
                Lessons
              </NavLink>
            </li>
            <li>
              <span className={classes.icon}>
                <QuizIcon />
              </span>
              <NavLink
                to="/quiz-arena"
                className={(navData) =>
                  navData.isActive ? classes.active : ""
                }
              >
                Quiz Arena
              </NavLink>
            </li>
            <li>
              <span className={classes.icon}></span>
              <NavLink
                to="/flashcard"
                className={(navData) =>
                  navData.isActive ? classes.active : ""
                }
              >
                Flashcard
              </NavLink>
            </li>
            <li>
              <LoginIcon className={classes.icon} />
              <NavLink
                to="/login"
                className={(navData) =>
                  navData.isActive ? classes.active : ""
                }
              >
                Logout
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default MainNavigation;
