import React from "react";
import StyledDashboard from "../../components/Styles/StyledDashboard";
import Header from "../../components/Layout/Header";
import Breadcrumb from "../../components/UI/Breadcrumb";
import BreadcrumItem from "../../components/UI/BreadcrumItem";

const Dashboard = () => {
  return (
    <StyledDashboard>
      <Header title="Welcome back, Demo User">
        <Breadcrumb>
          <BreadcrumItem href="/">Dashboard</BreadcrumItem>
        </Breadcrumb>
      </Header>
      <section className="container">
        <section className="courses">
          <ul className="continue-courses">
            <h2 className="small-title">Continue Learning</h2>
            <li className="course">
              <img />
              <div className="content"></div>
            </li>
          </ul>
          <div className="recommend-course">
            <h3 className="title">Essential Vietnamese for Emergencies</h3>
            <p className="content">
              Don't get caught in an emergency without these language skills!
              Learn how to ask for help and call the police. Learn how to ask
              for medical assistance.
            </p>
            <p className="level">Beginner</p>
          </div>
        </section>
      </section>
    </StyledDashboard>
  );
};

export default Dashboard;
