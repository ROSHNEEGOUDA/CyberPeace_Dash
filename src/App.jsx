import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashboardContent from './components/Dashboard';
import Layout from './layout';
import HomePage from './components/Live';
import LivePage from './components/Liveroom';
import Profile from './components/Profile';
import Auth from './auth/testpage';
import Featuredcompf from './components/Featuredcompf';
import Cm1 from './components/Cm1';
import CoursePage from './components/CoursePage';
import Course from './components/Course';
import CourseDetails from './components/CoursePage';

function App() {
  return (
    
    <Router>
      <Routes>
            <Route path="/" element={<Auth/>} />
            <Route path="/Dashboard" element={<Layout><DashboardContent/></Layout>} />
            <Route path="/liveclass" element={<Layout><HomePage/></Layout>} />
            <Route path="/Liveroom/:roomId" element={<Layout><LivePage/></Layout>} />
            <Route path="/course" element={<Layout><Course/></Layout>} />
            <Route path="/profile" element={<Layout><Profile/></Layout>} />
            <Route path="/:title" element={<Layout><CoursePage/></Layout>} />
            <Route path="/course/:id" element={<Layout><CourseDetails/></Layout>} />
            <Route path="/Featuredcompf" element={<Layout><Featuredcompf/></Layout>} />
            <Route path="/cm1" element={<Layout><Cm1/></Layout>} />
            
            {/* Define your routes here */}

          </Routes>
    </Router>
  );
}

export default App;
