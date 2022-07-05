import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import LessonsPage from './pages/LessonsPage';
import QuizArenaPage from './pages/QuizArenaPage';
import FlashcardPage from './pages/FlashcardPage';
import LessonDetailPage from "./pages/LessonDetailPage";
import HomePage from "./components/Layout/HomePage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<HomePage />}>
        <Route path="/" element={<Navigate replace to="/lessons" />} />
        <Route path="/lessons/" element={<LessonsPage />} />
        <Route path="/lessons/:lessonId" element={<LessonDetailPage />} />
        <Route path="quiz-arena" element={<QuizArenaPage />} />
        <Route path="flashcard" element={<FlashcardPage />} />
      </Route>
    </Routes>
  );
}

export default App;
