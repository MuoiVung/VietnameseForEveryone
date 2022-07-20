import React, {Fragment} from 'react';
import {Route, Routes} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomePage from './components/Layout/HomePage';
import {
  NotFoundPage,
  LessonsBeginnerPage,
  LessonsIntermediatePage,
  LessonsAdvancedPage,
  LessonDetailPage,
  QuickExercisesPage,
  FlashcardLearnPage,
  FlashcardPracticePage,
  LoginPage,
  ListeningPage,
  ReadingPage,
  WritingPage,
  SpeakingPage,
  Dashboard,
} from './pages';

function App () {
  return (
    <Fragment>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<HomePage />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/lessons/beginner" element={<LessonsBeginnerPage />} />
          <Route
            path="/lessons/intermediate"
            element={<LessonsIntermediatePage />}
          />
          <Route path="/lessons/advanced" element={<LessonsAdvancedPage />} />
          <Route
            path="lessons/beginner/:lessonId"
            element={<LessonDetailPage />}
          />
          <Route path="/quick-exercises" element={<QuickExercisesPage />} />
          <Route
            path="/quick-exercises/listening"
            element={<ListeningPage />}
          />
          <Route path="/quick-exercises/reading" element={<ReadingPage />} />
          <Route path="/quick-exercises/writing" element={<WritingPage />} />
          <Route path="/quick-exercises/speaking" element={<SpeakingPage />} />
          <Route path="/flashcard/learn" element={<FlashcardLearnPage />} />
          <Route
            path="/flashcard/practice"
            element={<FlashcardPracticePage />}
          />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <ToastContainer />
    </Fragment>
  );
}

export default App;
