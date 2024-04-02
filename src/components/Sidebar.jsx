import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faChalkboardTeacher, faUpload, faPlayCircle, faQuestionCircle, faGear, faFile, faComment, faDashboard, faCommentAlt, faComments } from '@fortawesome/free-solid-svg-icons'; // Import the faQuestionCircle icon
import DashboardContent from './Dashboard'; // Import the DashboardContent component
import MiniCalendar from './calander';
import HomePage from './Live';
import dashlogo from '../assets/dashboard.svg';


const Sidebar = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="bg-blue-100 h-full w-64 flex flex-col justify-between mt-0.3">
        <div className="p-4">
          <h1 className="text-black text-center text-2xl font-bold mb-6">Menu</h1>
          <div>
            <Link to="/" className="block">
              <div className="flex items-center rounded-lg bg-blue-600 shadow-md p-2 mb-7 text-center hover:transition duration-300 ease-in-out cursor-pointer transform hover:scale-105">
                <img src={dashlogo} alt="Dashboard" className="h-5 w-5 ml-7 mr-3 filter brightness-100" style={{ filter: 'brightness(70%)' }} />
                <span className="text-white font-[500] text-[20px] ">Dashboard</span>
              </div>
            </Link>
            <Link to="/module" className="block">
              <div className="flex items-center rounded-lg bg-blue-600 shadow-md p-2 mb-7 text-center hover:transition duration-300 ease-in-out cursor-pointer transform hover:scale-105">
                <FontAwesomeIcon icon={faBook} className='ml-7 mr-3 h-5 w-5'/>
                <span className="text-white font-[500] text-[20px] mr-14">Courses</span>
              </div>
            </Link>
            <Link to="/liveclass" className="block">
              <div className="flex items-center rounded-lg bg-blue-600 shadow-md p-2 mb-7 text-center hover:transition duration-300 ease-in-out cursor-pointer transform hover:scale-105">
                <FontAwesomeIcon icon={faPlayCircle} className='ml-7 mr-3 h-5 w-5'/>
                <span className="text-white font-[500] text-[20px] mr-4">Liveclass</span>
              </div>
            </Link>
            <Link to="/doubt" className="block">
              <div className="flex items-center rounded-lg bg-blue-600 shadow-md p-2 mb-7 text-center hover:transition duration-300 ease-in-out cursor-pointer transform hover:scale-105">
                <FontAwesomeIcon icon={faQuestionCircle} className='ml-7 mr-3 h-5 w-5'/>
                <span className="text-white font-[500] text-[20px]">Doubts</span>
              </div>
            </Link>
            <Link to="/doubt" className="block">
              <div className="flex items-center rounded-lg bg-blue-600 shadow-md p-2 mb-7 text-center hover:transition duration-300 ease-in-out cursor-pointer transform hover:scale-105">
                <FontAwesomeIcon icon={faComments} className='ml-7 mr-3 h-5 w-5'/>
                <span className="text-white font-[500] text-[20px]">Feedback</span>
              </div>
            </Link>
            <Link to="/doubt" className="block">
              <div className="flex items-center rounded-lg bg-blue-600 shadow-md p-2 mb-7 text-center hover:transition duration-300 ease-in-out cursor-pointer transform hover:scale-105">
                <FontAwesomeIcon icon={faFile} className='ml-7 mr-3 h-5 w-5'/>
                <span className="text-white font-[500] text-[20px]">Report</span>
              </div>
            </Link>
            <Link to="/doubt" className="block">
              <div className="flex items-center rounded-lg bg-blue-600 shadow-md p-2 mb-7 text-center hover:transition duration-300 ease-in-out cursor-pointer transform hover:scale-105">
                <FontAwesomeIcon icon={faGear} className='ml-7 mr-3 h-5 w-5'/>
                <span className="text-white font-[500] text-[20px]">Setting</span>
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
