import { useEffect, useRef, useState } from "react";
import StyledDashboard from "../../components/Styles/StyledDashboard";
import Header from "../../components/Layout/Header";
import Breadcrumb from "../../components/UI/Breadcrumb";
import BreadcrumItem from "../../components/UI/BreadcrumItem";
import { toast } from "react-toastify";
import Card from "../../components/UI/Card";
import ProgressBar from "../../components/Dashboard/ProgressBar";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [lessons, setLessons] = useState([]);
  const isInitial = useRef(true);

  useEffect(() => {
    const fetchLessons = async () => {
      try {
        const response = await fetch(
          "https://vietnameseforeveryone-576e2-default-rtdb.asia-southeast1.firebasedatabase.app/lesson-beginner/.json"
        );

        const lessonsData = await response.json();

        const transformedLessons = [];

        for (const key in lessonsData) {
          transformedLessons.push(lessonsData[key]);
        }

        setLessons(transformedLessons);
      } catch (error) {
        throw new Error(error.message);
      }
    };

    if (isInitial.current) {
      toast.promise(
        fetchLessons,
        {
          pending: "Loading lessons...",
          success: "Got Lessons successfully!",
          error: "Could not get lessons!",
        },
        {
          autoClose: 2000,
        }
      );
      isInitial.current = false;
    }
  }, []);

  return (
    <StyledDashboard>
      <Header title="Welcome back, Demo User">
        <Breadcrumb>
          <BreadcrumItem href="/">Dashboard</BreadcrumItem>
        </Breadcrumb>
      </Header>
      <section className="container">
        <section className="courses">
          <div className="left">
            <h2 className="section-title">Continue Learning</h2>
            <ul className="continue-courses">
              {lessons.map((lesson) => {
                if (lesson.percentage)
                  return (
                    <Card className="card" key={lesson.id}>
                      <Link to={`lessons/beginner/${lesson.id}`}>
                        <li className="course">
                          <img src={lesson.image} alt={lesson.id} />
                          <div className="content">
                            <p className="title">
                              <span className="name">{lesson.title}</span>
                              <span className="percentage">
                                {lesson.percentage}%
                              </span>
                            </p>
                            <ProgressBar
                              completedPercentage={lesson.percentage}
                            />
                          </div>
                        </li>
                      </Link>
                    </Card>
                  );
                return null;
              })}
            </ul>
          </div>
          <div className="right">
            <h2 className="section-title">Recommended for You</h2>
            <div className="recommend-course">
              <h3 className="title">Essential Vietnamese for Emergencies</h3>
              <p className="content">
                Don't get caught in an emergency without these language skills!
                Learn how to ask for help and call the police. Learn how to ask
                for medical assistance.
              </p>
              <p className="level">Beginner</p>
            </div>
          </div>
        </section>
      </section>
    </StyledDashboard>
  );
};

export default Dashboard;
