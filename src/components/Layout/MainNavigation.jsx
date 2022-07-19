import React, {useEffect, useState} from 'react';
import classes from './MainNavigation.module.css';
import {NavLink} from 'react-router-dom';
import userAvatar from '../../assets/img/user-avatar.jpg';
import {
  MdOutlineQuiz as QuizIcon,
  MdOutlinePlayLesson as LessonIcon,
  MdOutlineKeyboardArrowRight as ArrowRightIcon,
  MdOutlineKeyboardArrowDown as ArrowDownIcon,
} from 'react-icons/md';
import {RiLogoutBoxLine as LoginIcon} from 'react-icons/ri';
import {BsCardHeading as FlashcardIcon} from 'react-icons/bs';

const MainNavigation = () => {
  const [LoginData, setLoginData] = useState (
    localStorage.getItem ('loginDataNewUser')
      ? JSON.parse (localStorage.getItem ('loginDataNewUser'))
      : {
          Name: '',
          Email: '',
          Password: '',
          Phonenumber: '',
          NameId: 'Wimp Mullan',
          Avatar: userAvatar,
        }
  );

  const handleLogout = () => {
    localStorage.removeItem ('loginDataNewUser');
    setLoginData (
      localStorage.getItem ('loginDataNewUser')
        ? JSON.parse (localStorage.getItem ('loginDataNewUser'))
        : {
            Name: '',
            Email: '',
            Password: '',
            Phonenumber: '',
            NameId: 'Wimp Mullan',
            Avatar: userAvatar,
          }
    );
  };

  const handleDataUser = async check => {
    try {
      const res = await fetch (
        `https://vietnameseforeveryone-576e2-default-rtdb.asia-southeast1.firebasedatabase.app/users/${check}/.json`
      );
      const data = await res.json ();
      setLoginData (data);
    } catch (error) {
      alert ('chua dang nhap');
    }
  };

  useEffect (() => {
    const getLocalStorageData = () => {
      if (localStorage.getItem ('loginDataNewUser')) {
        handleDataUser (LoginData);
      }
    };

    getLocalStorageData ();
  }, []);
  return (
    <section className={classes.sidebar}>
      {/* <div className={classes.container}>
        <h1 className={classes.logo}>Vife</h1>
        <div className={classes.user}>
          <p className={classes["user-avatar"]}>
            {LoginData.Avatar && <img src={LoginData.Avatar} alt="user avatar" /> }
          </p>
          <p className={classes["user-name"]}>{LoginData.NameId}</p>
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
      </div> */}
      <h1>ABC</h1>
    </section>
  );
};

export default MainNavigation;
