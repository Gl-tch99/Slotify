import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BookVenuePage from './pages/BookVenuePage';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Routes>
        <Route path="/" index element={<HomePage/>} />
        <Route path="/book_venue" element={<BookVenuePage/>} />
      </Routes>
    </div>
  );
}

export default App;
