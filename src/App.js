import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import LessonsPage from './pages/LessonsPage';
import QuizArenaPage from './pages/QuizArenaPage';
import FlashcardPage from './pages/FlashcardPage';
import LessonDetailPage from "./pages/LessonDetailPage";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate replace to="/lessons" />} />
        <Route path="/lessons/" element={<LessonsPage />} />
        <Route path="/lessons/:lessonId" element={<LessonDetailPage />} />
        <Route path="quiz-arena" element={<QuizArenaPage />} />
        <Route path="flashcard" element={<FlashcardPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
