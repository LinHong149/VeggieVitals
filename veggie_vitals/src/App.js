import './App.css';
import Home from './pages/home'
import Forum from './pages/forum'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/forum" element={<Forum />} />
      </Routes>
  </Router>
  );
}

export default App;
