import React from "react";
import styled from "styled-components";
import Card from "../../components/UI/Card";

const StyledAchievement = styled(Card)`
  li {
    text-align: center;
    text-transform: capitalize;
  }
  img {
    display: inline-block;
    max-width: 5rem;
    height: auto;
    object-fit: cover;
  }
  .title {
    font-size: 1rem;
    margin: 0.5rem;
  }
  .level {
    color: var(--color-primary);
  }
`;

const Achievement = ({ img, alt, title, level }) => {
  return (
    <StyledAchievement>
      <li>
        <img src={img} alt={alt} />
        <p className="title">{title}</p>
        <p className="level">{level}</p>
      </li>
    </StyledAchievement>
  );
};

export default Achievement;
