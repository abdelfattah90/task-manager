import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CodeInfoPage from './pages/CodeInfoPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/code-info" element={<CodeInfoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;