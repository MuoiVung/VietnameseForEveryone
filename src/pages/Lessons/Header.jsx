import React from 'react';
import classes from './Lesson.module.css';
import SButton from './CustomHooks/SButton';

const Header = ({lessonId, lesson}) => {
  const handleClickShowPathway = () => {
    console.log ('ok!');
  };
  return (
    <div>
      <div className={classes.ld_bar}>
        <div className={classes.ld_bar_left}>
          <p className={classes.ld_bar_title}>Level 1 Vietnamese</p>
          <div className={classes.ld_bar_subTitle}>
            <span>0</span>
            <span>/</span>
            <span>24</span>
            <span className={classes.ld_bar_subTitle_completed}>Completed</span>
          </div>
        </div>
        <div className={classes.ld_bar_right}>
          <div className={classes.ld_bar_step}>
            <SButton className={classes.ld_bar_step_arrow}>Prev</SButton>
            <p className={classes.ld_bar_step_des}>{lessonId}</p>
            <SButton className={classes.ld_bar_step_arrow}>Next</SButton>
          </div>
          <div
            className={classes.ld_bar_showbtn}
            onClick={handleClickShowPathway}
          >
            <SButton>Show Pathway</SButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
