import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import styled from "styled-components";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Listening", "Reading", "Writing", "Speaking"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const StyledDonut = styled.div`
  height: 100%;
`;

const Donut = () => {
  return (
    <StyledDonut>
      <Doughnut
        data={data}
        options={{
          aspectRatio: false,
          plugins: {
            legend: {
              position: "bottom",
              labels: {},
              title: {
                position: "top",
                display: true,
                text: " Numbers Of Hours Per Skills",
                padding: {
                  top: 20,
                },
                font: {
                  size: 16,
                },
              },
            },
          },
        }}
      />
    </StyledDonut>
  );
};

export default Donut;
