import React from "react";
import styled from "styled-components";

const StyledProgressBar = styled.div`
  height: 0.25rem;
  background-color: #f1f1f1;
  border-radius: 8px;
  .completed-bar {
    height: 100%;
    width: ${(props) => props.completedPercentage}%;
    background-color: var(--color-primary);
  }
`;

const ProgressBar = ({ className, completedPercentage }) => {
  return (
    <StyledProgressBar
      className={className}
      completedPercentage={completedPercentage}
    >
      <div className="completed-bar"></div>
    </StyledProgressBar>
  );
};

export default ProgressBar;
