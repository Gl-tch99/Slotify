import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BookVenuePage from './pages/BookVenuePage';
import { VenueListPage } from './components/VenueListPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import OnboardWelcomePage from './pages/OnboardWelcomePage';
import OwnerOnboarding from './pages/OwnerOnboarding';

function App() {
  return (
    <div className="min-h-screen bg-light-base dark:bg-dark-base">
      <Routes>
        <Route path="/" index element={<HomePage />} />
        <Route path="/book_venue" element={<BookVenuePage />} />
        <Route path="/venues" element={<VenueListPage />} />
        <Route path="*" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/onboard_welcome" element={<OnboardWelcomePage />} />
        <Route path="/onboard" element={<OwnerOnboarding />} />
      </Routes>
    </div>
  );
}

export default App;
