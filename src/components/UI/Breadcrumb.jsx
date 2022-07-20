import React from "react";
import styled from "styled-components";

const Sbreadcrumb = styled.ul`
  margin: 0.5rem 0;
  list-style: none;
  font-size: 0.875rem;
  display: flex;
  li {
    margin-right: 0.5rem;
  }
  li::after {
    content: "/";
    margin-left: 0.5rem;
  }
  li:last-child::after {
    content: "";
  }
`;

const Breadcrumb = ({ children }) => {
  return <Sbreadcrumb>{children}</Sbreadcrumb>;
};

export default Breadcrumb;
