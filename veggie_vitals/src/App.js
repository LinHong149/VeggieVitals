import './App.css';
import Home from './pages/home'
import Forum from './pages/forum'
import API from './pages/API'
import Recipe from './pages/recipe'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router className="App">
      <Routes>
        <Route path="VeggieVitals/" element={<Home />} />
        <Route path="VeggieVitals/forum" element={<Forum />} />
        <Route path="VeggieVitals/api" element={<API />} />
        <Route path="VeggieVitals/recipe" element={<Recipe />} />
      </Routes>
  </Router>
  );
}

export default App;
