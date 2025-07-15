import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Scene from './components/Scene';
import UnderConstruction from './components/UI/UnderConstruction';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Scene />} /> */}
        <Route path="/" element={<UnderConstruction />} />
      </Routes>
    </Router>
  );
};

export default App;
