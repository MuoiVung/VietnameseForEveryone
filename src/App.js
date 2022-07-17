import React, { Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import LessonsPage from './pages/Lessons/LessonsPage';
import HomePage from "./components/Layout/HomePage";
import LoadingSpinner from "./components/UI/LoadingSpinner";




const LessonsBeginnerPage = React.lazy(() => import('./pages/Lessons/LessonsBeginnerPage'));
const LessonsIntermediatePage = React.lazy(() => import('./pages/Lessons/LessonsIntermediatePage'));
const LessonsAdvancedPage = React.lazy(() => import('./pages/Lessons/LessonsAdvancedPage'));
const LessonDetailPage = React.lazy(() => import('./pages/Lessons/LessonDetailPage'));
const QuickExercisesPage = React.lazy(() => import('./pages/QuickExercises/QuickExercisesPage'));
const FlashcardPage = React.lazy(() => import('./pages/FlashcardPage'));
const LoginPage = React.lazy(() => import('./pages/LoginPage'));
const ListeningPage = React.lazy(() => import('./pages/QuickExercises/ListeningPage'));
const ReadingPage = React.lazy(() => import('./pages/QuickExercises/ReadingPage'));
const SpeakingPage = React.lazy(() => import('./pages/QuickExercises/SpeakingPage'));
const WritingPage = React.lazy(() => import('./pages/QuickExercises/WritingPage'));


function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
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
      </Routes>
    </Suspense>
  );
}

export default App;
