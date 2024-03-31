import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashboardContent from './components/Dashboard';
import MainLayout from './layout';
import HomePage from './components/Live';
import LivePage from './components/Liveroom';
import Home from './components/Module';
import Profile from './components/Profile';

function App() {
  return (
    
    <Router>
      <Routes>
            <Route path="/" element={<MainLayout><DashboardContent/></MainLayout>} />
            <Route path="/liveclass" element={<MainLayout><HomePage/></MainLayout>} />
            <Route path="/Liveroom/:roomId" element={<MainLayout><LivePage/></MainLayout>} />
            <Route path="/module" element={<MainLayout><Home/></MainLayout>} />
            <Route path="/profile" element={<MainLayout><Profile/></MainLayout>} />
            
            {/* Define your routes here */}

          </Routes>
    </Router>
  );
}

export default App;
