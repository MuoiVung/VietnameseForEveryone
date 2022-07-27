import React from "react";
import SubjectAndCard from "./SubjectAndCard";
import Header from "../../components/Layout/Header";
import Breadcrumb from "../../components/UI/Breadcrumb";
import BreadcrumbItem from "../../components/UI/BreadcrumItem";

const FlashcardLearnPage = () => {
  return(
    <>
      <Header title="Learn Vocabulary Through Flashcards">
        <Breadcrumb>
          <BreadcrumbItem>Flashcard</BreadcrumbItem>
          <BreadcrumbItem href="/flashcard/learn">Learn</BreadcrumbItem>
        </Breadcrumb>
      </Header>
      <br/>
      <SubjectAndCard mode="learn"/>
    </>
  )
};

export default FlashcardLearnPage;