import React, {Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomePage from './components/Layout/HomePage';
import LoadingSpinner from './components/UI/LoadingSpinner';

const NotFoundPage = React.lazy (() => import ('./pages/NotFoundPage'));
const LessonsBeginnerPage = React.lazy (() =>
  import ('./pages/Lessons/LessonsBeginnerPage')
);
const LessonsIntermediatePage = React.lazy (() =>
  import ('./pages/Lessons/LessonsIntermediatePage')
);
const LessonsAdvancedPage = React.lazy (() =>
  import ('./pages/Lessons/LessonsAdvancedPage')
);
const LessonDetailPage = React.lazy (() =>
  import ('./pages/Lessons/LessonDetailPage')
);
const QuickExercisesPage = React.lazy (() =>
  import ('./pages/QuickExercises/QuickExercisesPage')
);
const FlashcardLearnPage = React.lazy (() =>
  import ('./pages/FlashcardPages/FlashcardLearnPage')
);
const FlashcardPracticePage = React.lazy (() =>
  import ('./pages/FlashcardPages/FlashcardPracticePage')
);
const LoginPage = React.lazy (() => import ('./pages/LoginPage'));
const ListeningPage = React.lazy (() =>
  import ('./pages/QuickExercises/ListeningPage')
);
const ReadingPage = React.lazy (() =>
  import ('./pages/QuickExercises/ReadingPage')
);
const WritingPage = React.lazy (() =>
  import ('./pages/QuickExercises/WritingPage')
);
const SpeakingPage = React.lazy (() =>
  import ('./pages/QuickExercises/SpeakingPage')
);
const Dashboard = React.lazy (() => import ('./pages/Dashboard'));

function App () {
  return (
    <Suspense fallback={<LoadingSpinner />}>
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
    </Suspense>
  );
}

export default App;
