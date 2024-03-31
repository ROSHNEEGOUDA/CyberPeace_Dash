import React from 'react';
import { Link } from 'react-router-dom';
import DashboardContent from './Dashboard'; // Import the DashboardContent component
import MiniCalendar from './calander';
import HomePage from './Live';


const Sidebar = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="bg-blue-800 h-full w-64 flex flex-col justify-between mt-0.3">
        <div className="p-4">
          <h1 className="text-white text-2xl font-bold mb-4">Menu</h1>
          <div>
            <Link to="/" className="block">
              <div className="rounded-lg bg-blue-600 shadow-md p-2 mb-7 text-center hover: transition duration-300 ease-in-out cursor-pointer transform hover:scale-105">
                <span className="text-white font-[500] text-[20px] ">Dashboard</span>
              </div>
            </Link>
            <Link to="/module" className="block">
              <div className="rounded-lg bg-blue-600 shadow-md p-2 mb-7 text-center hover: transition duration-300 ease-in-out cursor-pointer transform hover:scale-105">
                <span className="text-white font-[500] text-[20px]">Modules</span>
              </div>
            </Link>
            <Link to="/liveclass" className="block">
              <div className="rounded-lg bg-blue-600 shadow-md p-2 mb-7 text-center hover: transition duration-300 ease-in-out cursor-pointer transform hover:scale-105">
                <span className="text-white font-[500] text-[20px]">Liveclass</span>
              </div>
            </Link>
            <Link to="/doubt" className="block">
              <div className="rounded-lg bg-blue-600 shadow-md p-2 mb-7 text-center hover: transition duration-300 ease-in-out cursor-pointer transform hover:scale-105">
                <span className="text-white font-[500] text-[20px]">Doubts</span>
              </div>
            </Link>
          </div>
        </div>
        <div className="p-4">
          {/* Additional content or links can be added here */}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
