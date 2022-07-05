import React, { Fragment } from "react";
import MainNavigation from "./MainNavigation";
import { Routes, Route } from "react-router-dom";
import LoginPage from "../../pages/LoginPage";

const Layout = (props) => {
  return (
    <Fragment>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="*"
          element={
            <Fragment>
              <MainNavigation />
              <main>{props.children}</main>
            </Fragment>
          }
        />
      </Routes>
    </Fragment>
  );
};

export default Layout;
