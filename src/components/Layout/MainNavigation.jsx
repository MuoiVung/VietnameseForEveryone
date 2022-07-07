import React from "react";
import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";
import userAvatar from "../../assets/img/user-avatar.jpg";
import {
  MdOutlineQuiz as QuizIcon,
  MdOutlinePlayLesson as LessonIcon,
  MdOutlineKeyboardArrowRight as ArrowRightIcon,
  MdOutlineKeyboardArrowDown as ArrowDownIcon,
} from "react-icons/md";
import { RiLogoutBoxLine as LoginIcon } from "react-icons/ri";
import { BsCardHeading as FlashcardIcon } from "react-icons/bs";

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
            <li className={classes["nav-item"]}>
              <NavLink
                to="/lessons"
                className={(navData) =>
                  navData.isActive ? classes.active : ""
                }
              >
                <div className="flex-center">
                  <LessonIcon className={classes.icon} />
                  Lessons
                </div>
                <ArrowRightIcon className={classes["icon-arrow"]} />
                <ArrowDownIcon
                  className={`${classes["icon-arrow"]} ${classes.hidden}`}
                />
              </NavLink>
              <ul className={classes.subnav}>
                <li className={classes["subnav-item"]}>
                  <NavLink
                    to="/lessons/beginner"
                    className={(subnavData) =>
                      subnavData.isActive ? classes.active : ""
                    }
                  >
                    Beginner
                  </NavLink>
                </li>
                <li className={classes["subnav-item"]}>
                  <NavLink
                    to="/lessons/intermediate"
                    className={(subnavData) =>
                      subnavData.isActive ? classes.active : ""
                    }
                  >
                    Intermediate
                  </NavLink>
                </li>
                <li className={classes["subnav-item"]}>
                  <NavLink
                    to="/lessons/advanced"
                    className={(subnavData) =>
                      subnavData.isActive ? classes.active : ""
                    }
                  >
                    Advanced
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className={classes["nav-item"]}>
              <NavLink
                to="/quiz-arena"
                className={(navData) =>
                  navData.isActive ? classes.active : ""
                }
              >
                <div className="flex-center">
                  <QuizIcon className={classes.icon} />
                  Quiz Arena
                </div>
              </NavLink>
            </li>
            <li className={classes["nav-item"]}>
              <NavLink
                to="/flashcard"
                className={(navData) =>
                  navData.isActive ? classes.active : ""
                }
              >
                <div className="flex-center">
                  <FlashcardIcon className={classes.icon} />
                  Flashcard
                </div>
              </NavLink>
            </li>
            <li className={classes["nav-item"]}>
              <NavLink
                to="/login"
                className={(navData) =>
                  navData.isActive ? classes.active : ""
                }
              >
                <LoginIcon className={classes.icon} />
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
