import './App.css';
import Home from './pages/home'
import Forum from './pages/forum'
import API from './pages/API'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/api" element={<API />} />
      </Routes>
  </Router>
  );
}

export default App;
