import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BookVenuePage from './pages/BookVenuePage';

function App() {
  return (
    <div className="min-h-screen bg-light-base dark:bg-dark-base">
      <Routes>
        <Route path="/" index element={<HomePage />} />
        <Route path="/book_venue" element={<BookVenuePage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
