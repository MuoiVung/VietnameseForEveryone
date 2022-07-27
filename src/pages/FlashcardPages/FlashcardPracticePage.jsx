import React, { useState } from "react";
import Header from "../../components/Layout/Header";
import Breadcrumb from "../../components/UI/Breadcrumb";
import BreadcrumbItem from "../../components/UI/BreadcrumItem";
import SubjectAndCard from "./SubjectAndCard";

const FlashcardPracticePage = () => {

  return (
    <>
      <Header title="Flashcard Game">
        <Breadcrumb>
          <BreadcrumbItem>Flashcard</BreadcrumbItem>
          <BreadcrumbItem href="/flashcard/practice">Practice</BreadcrumbItem>
        </Breadcrumb>
      </Header>
      <SubjectAndCard mode="practice"/>
    </>
  );
};

export default FlashcardPracticePage;
