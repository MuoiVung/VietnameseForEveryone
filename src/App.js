import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import LessonsPage from './pages/Lessons/LessonsPage';
import LessonsBeginnerPage from './pages/Lessons/LessonsBeginnerPage';
import LessonsIntermediatePage from './pages/Lessons/LessonsIntermediatePage';
import LessonsAdvancedPage from './pages/Lessons/LessonsAdvancedPage';
import QuickExercisesPage from './pages/QuickExercises/QuickExercisesPage';
import FlashcardPage from './pages/FlashcardPage';
import LessonDetailPage from "./pages/Lessons/LessonDetailPage";
import HomePage from "./components/Layout/HomePage";
import LoginPage from "./pages/LoginPage";

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
        <Route path="quick-exercises" element={<QuickExercisesPage />} />
        <Route path="flashcard" element={<FlashcardPage />} />
      </Route>
    </Routes>
  );
}

export default App;
