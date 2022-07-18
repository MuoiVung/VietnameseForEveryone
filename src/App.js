import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./components/Layout/HomePage";
import {
  LessonsPage, NotFoundPage, LessonsBeginnerPage, LessonsIntermediatePage, LessonsAdvancedPage, LessonDetailPage,
  QuickExercisesPage, FlashcardPage, LoginPage, ListeningPage, ReadingPage, WritingPage, SpeakingPage
} from "./pages";


function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<HomePage />}>
        <Route path="/" element={<Navigate replace to="/lessons" />} />
        <Route path="/lessons/" element={<LessonsPage />} />
        <Route path="/lessons/beginner" element={<LessonsBeginnerPage />} />
        <Route path="/lessons/intermediate" element={<LessonsIntermediatePage />} />
        <Route path="/lessons/advanced" element={<LessonsAdvancedPage />} />
        <Route path="/lessons/:lessonId" element={<LessonDetailPage />} />
        <Route path="/quick-exercises" element={<QuickExercisesPage />} />
        <Route path="/quick-exercises/listening" element={<ListeningPage />} />
        <Route path="/quick-exercises/reading" element={<ReadingPage />} />
        <Route path="/quick-exercises/writing" element={<WritingPage />} />
        <Route path="/quick-exercises/speaking" element={<SpeakingPage />} />
        <Route path="flashcard" element={<FlashcardPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
