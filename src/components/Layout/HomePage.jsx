import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import MainNavigation from "./MainNavigation";
import classes from "./HomePage.module.css";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <Fragment>
      <MainNavigation />
      <div className={classes.container}>
        <main className={classes.main}>
          <Outlet />
        </main>
        <Footer />
      </div>
    </Fragment>
  );
};

export default HomePage;
