import React from "react";
import classes from "./ComingSoon.module.scss";
import comingSoonImg from "../../assets/img/coming-soon.svg";

const ComingSoon = () => {
  return (
    <section className={classes.container}>
      <div className={classes.content}>
        <div className={classes.comingSoonImg}>
          <img src={comingSoonImg} alt="A woman is studying!" />
        </div>
        <p className={classes.title}>Coming Soon</p>
        <p className={classes.noti}>
          We're working hard to give you the best experience!
        </p>
      </div>
    </section>
  );
};

export default ComingSoon;
