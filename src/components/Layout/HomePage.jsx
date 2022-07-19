import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import MainNavigation from "./MainNavigation";
import classes from "./HomePage.module.css";

const HomePage = () => {
  return (
    <Fragment>
      <MainNavigation />
      <main className={classes.container}>
        <Outlet />
      </main>
    </Fragment>
  );
};

export default HomePage;
