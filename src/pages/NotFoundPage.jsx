import React from "react";
import { Link } from "react-router-dom";
import NotFoundWrapper from "../components/Wrappers/NotFoundWrapper";
import img from "../assets/img/page-not-found.svg";
import StyledButton from "../components/UI/StyledButton";

const NotFoundPage = () => {
  return (
    <NotFoundWrapper>
      <div className="content">
        <img src={img} alt="page not found" />
        <StyledButton to="/" as={Link}>
          Back Home
        </StyledButton>
      </div>
    </NotFoundWrapper>
  );
};

export default NotFoundPage;
