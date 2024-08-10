
import React from 'react';

import { BrowserRouter as Router, Route,Navigate, Routes } from 'react-router-dom';
import Home from './Home';
import Room from './Room';
function Video(){
    return (
        <div className="App">
        <Router>
    
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/room/:roomID" element={<Room />} />
    </Routes>
    </Router>
        </div>
      );
}
export default Video;