import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Card from "../../components/UI/Card";

const StyledSkill = styled(Link)`
  text-align: center;
  position: relative;
  color: var(--color-heading);
  text-decoration: none;
  transition: transform 0.25s;
  &:hover {
    display: block;
    transform: scale(1.02);
  }
  li {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
  img {
    margin-bottom: 1rem;
    width: 1.5rem;
    height: auto;
    object-fit: cover;
  }
  .name {
    margin-bottom: 0.5rem;
    font-size: 1.25rem;
  }
  .quantity {
    color: var(--color-light-black);
    font-size: 0.75rem;
    text-transform: uppercase;
  }
`;

const Skill = ({ goTo, src, alt, name, quantity }) => {
  return (
    <StyledSkill to={goTo} className="skill">
      <Card>
        <img src={src} alt={alt} />
        <p className="name">{name}</p>
        <p className="quantity">{quantity}</p>
      </Card>
    </StyledSkill>
  );
};

export default Skill;
