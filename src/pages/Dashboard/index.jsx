import { useEffect, useRef, useState } from "react";
import StyledDashboard from "../../components/Styles/StyledDashboard";
import Header from "../../components/Layout/Header";
import Breadcrumb from "../../components/UI/Breadcrumb";
import BreadcrumItem from "../../components/UI/BreadcrumItem";
import { toast } from "react-toastify";
import Card from "../../components/UI/Card";
import ProgressBar from "../../components/Dashboard/ProgressBar";
import { Link } from "react-router-dom";
import StyledButton from "../../components/UI/StyledButton";
import {
  goldMedal,
  silverMedal,
  bronzeMedal,
  cuteMedal,
  beeMedal,
} from "../../assets/icons";
import Achievement from "./Achievement";

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

  const courses = (
    <section className="db-section courses">
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
                        <ProgressBar completedPercentage={lesson.percentage} />
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
        <Card className="recommend-course">
          <div className="content">
            <h3 className="title">Say thanks in Vietnamese</h3>
            <p className="text">
              A Vietnamese name usually consists of three parts: the family name
              comes first, then the middle name and the first name comes at the
              end.
            </p>
            <div>
              <StyledButton
                as={Link}
                to={"/lessons/beginner/lesson7"}
                fill="true"
              >
                Learn
              </StyledButton>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );

  const achievements = (
    <section className="db-section achievements">
      <h2 className="section-title">Achievements</h2>
      <ul>
        <Achievement
          img={goldMedal}
          alt="A gold medal"
          title="Vocabulary Master"
          level="Level 9"
        />
        <Achievement
          img={bronzeMedal}
          alt="A bronze medal"
          title="Grammar Apprentice"
          level="Level 2"
        />
        <Achievement
          img={cuteMedal}
          alt="A cute medal"
          title="Effortless Cute Guy"
          level="Level 4"
        />
        <Achievement
          img={beeMedal}
          alt="A bee medal"
          title="Hard Working Bee"
          level="Level 7"
        />
        <Achievement
          img={silverMedal}
          alt="A sliver medal"
          title="Speaking Expert"
          level="Level 5"
        />
      </ul>
    </section>
  );

  return (
    <StyledDashboard>
      <Header title="Welcome back, Demo User">
        <Breadcrumb>
          <BreadcrumItem href="/">Dashboard</BreadcrumItem>
        </Breadcrumb>
      </Header>
      <section className="container">
        {courses}
        {achievements}
      </section>
    </StyledDashboard>
  );
};

export default Dashboard;
