import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Notice the change here
import Home from './Home';
import Detail from './Detail';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/item/:id" element={<Detail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

