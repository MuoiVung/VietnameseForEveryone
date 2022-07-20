import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SbreadcrumItem = styled.li`
  a {
    text-transform: capitalize;
    text-decoration: none;
    color: black;
    opacity: 0.8;
  }
  a:hover {
    opacity: 1;
    color: var(--color-primary);
  }
`;

const BreadcrumItem = ({ href, children }) => {
  return (
    <SbreadcrumItem>
      <Link to={href}>{children}</Link>
    </SbreadcrumItem>
  );
};

export default BreadcrumItem;
