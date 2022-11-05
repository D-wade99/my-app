import React from "react";
import Profile from "./Profile";
import Contact from './Contact'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route  path="/" element={<Profile/>} />
          <Route  path="/contact" element={<Contact/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;