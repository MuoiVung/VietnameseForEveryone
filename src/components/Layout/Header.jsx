import React from "react";
import StyledHeader from "../Styles/StyledHeader";
import Title from "../../components/Layout/Title";

const Header = ({ title, children }) => {
  return (
    <StyledHeader>
      <Title>{title}</Title>
      {children}
    </StyledHeader>
  );
};

export default Header;
