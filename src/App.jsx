import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Scene from './components/Scene';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Scene />} />
      </Routes>
    </Router>
  );
};

export default App;
