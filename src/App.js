import React from "react";
import Profile from "./Profile";
import Contact from './Contact'
import {Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div>
      <Routes>
        <Route  path="/" element={<Profile/>} />
        <Route  path="/contact" element={<Contact/>} />
      </Routes>
    </div>
  );
}

export default App;