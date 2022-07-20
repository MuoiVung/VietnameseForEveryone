import React, { useEffect, useState } from "react";
import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";
import userAvatar from "../../assets/img/user-avatar.jpg";
import {
  MdOutlineQuiz as QuizIcon,
  MdOutlinePlayLesson as LessonIcon,
  MdOutlineKeyboardArrowRight as ArrowRightIcon,
  MdOutlineKeyboardArrowDown as ArrowDownIcon,
  MdOutlineHome as DashboardIcon,
} from "react-icons/md";
import { RiLogoutBoxLine as LoginIcon } from "react-icons/ri";
import { BsCardHeading as FlashcardIcon } from "react-icons/bs";

const MainNavigation = () => {
  const [isLessonsActive, setIsLessonsActive] = useState(false);
  const [isFlashcardActive, setIsFlashcardActive] = useState(false);
  const [LoginData, setLoginData] = useState(
    localStorage.getItem("loginDataNewUser")
      ? JSON.parse(localStorage.getItem("loginDataNewUser"))
      : {
          Name: "",
          Email: "",
          Password: "",
          Phonenumber: "",
          NameId: "Demo User",
          Avatar: userAvatar,
        }
  );

  const handleLogout = () => {
    localStorage.removeItem("loginDataNewUser");
    setLoginData(
      localStorage.getItem("loginDataNewUser")
        ? JSON.parse(localStorage.getItem("loginDataNewUser"))
        : {
            Name: "",
            Email: "",
            Password: "",
            Phonenumber: "",
            NameId: "Wimp Mullan",
            Avatar: userAvatar,
          }
    );
  };

  const handleDataUser = async (check) => {
    try {
      const res = await fetch(
        `https://vietnameseforeveryone-576e2-default-rtdb.asia-southeast1.firebasedatabase.app/users/${check}/.json`
      );
      const data = await res.json();
      setLoginData(data);
    } catch (error) {
      alert("chua dang nhap");
    }
  };

  useEffect(() => {
    const getLocalStorageData = () => {
      if (localStorage.getItem("loginDataNewUser")) {
        handleDataUser(LoginData);
      }
    };

    getLocalStorageData();
  }, []);

  const toggleLessonsHandler = (event) => {
    event.preventDefault();
    setIsLessonsActive(!isLessonsActive);
  };

  const toggleFlashcardHandler = (event) => {
    event.preventDefault();
    setIsFlashcardActive(!isFlashcardActive);
  };

  return (
    <section className={classes.sidebar}>
      <div className={classes.container}>
        <h1 className={classes.logo}>Vife</h1>
        <div className={classes.user}>
          <p className={classes["user-avatar"]}>
            <img src={LoginData.Avatar} alt="user avatar" />
          </p>
          <p className={classes["user-name"]}>{LoginData.NameId}</p>
        </div>
        <nav>
          <ul className={classes["nav-list"]}>
            <li className={classes["nav-item"]}>
              <NavLink
                to="/"
                className={(navData) =>
                  navData.isActive ? classes.active : ""
                }
              >
                <div className="flex-center">
                  <DashboardIcon className={classes.icon} />
                  Dashboard
                </div>
              </NavLink>
            </li>
            <li className={classes["nav-item"]}>
              <a
                href="/lessons"
                onClick={toggleLessonsHandler}
                className={isLessonsActive ? classes.active : ""}
              >
                <div className="flex-center">
                  <LessonIcon className={classes.icon} />
                  Lessons
                </div>
                <ArrowRightIcon className={classes["icon-arrow"]} />
                <ArrowDownIcon
                  className={`${classes["icon-arrow"]} ${classes.hidden}`}
                />
              </a>
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
                to="/quick-exercises"
                className={(navData) =>
                  navData.isActive ? classes.active : ""
                }
              >
                <div className="flex-center">
                  <QuizIcon className={classes.icon} />
                  Quick Exercises
                </div>
              </NavLink>
            </li>
            <li className={classes["nav-item"]}>
              <a
                href="/flashcard"
                onClick={toggleFlashcardHandler}
                className={isFlashcardActive ? classes.active : ""}
              >
                <div className="flex-center">
                  <FlashcardIcon className={classes.icon} />
                  Flashcard
                </div>
                <ArrowRightIcon className={classes["icon-arrow"]} />
                <ArrowDownIcon
                  className={`${classes["icon-arrow"]} ${classes.hidden}`}
                />
              </a>
              <ul className={classes.subnav}>
                <li className={classes["subnav-item"]}>
                  <NavLink
                    to="/flashcard/learn"
                    className={(subnavData) =>
                      subnavData.isActive ? classes.active : ""
                    }
                  >
                    Learn
                  </NavLink>
                </li>
                <li className={classes["subnav-item"]}>
                  <NavLink
                    to="/flashcard/practice"
                    className={(subnavData) =>
                      subnavData.isActive ? classes.active : ""
                    }
                  >
                    Practice
                  </NavLink>
                </li>
              </ul>
            </li>
            <li onClick={handleLogout} className={classes["nav-item"]}>
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
