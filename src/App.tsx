import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CodeExplainClauda from './pages/CodeExplainClauda';
import './App.css';
import CodeExplainGemini from './pages/CodeExplainGemini';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/code-clauda" element={<CodeExplainClauda />} />
        <Route path="/code-gemini" element={<CodeExplainGemini />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;