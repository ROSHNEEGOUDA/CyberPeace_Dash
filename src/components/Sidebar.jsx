import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faPlayCircle,
  faQuestionCircle,
  faGear,
  faFile,
  faComments,
  faTimes,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import dashlogo from "../assets/dashboard.svg";
import { useMediaQuery } from "react-responsive";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/Dashboard"); // State to track active link

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  const isMobile = useMediaQuery({ maxWidth: 767 });

  // Function to set active link and close sidebar if it's mobile
  const handleLinkClick = (link) => {
    setActiveLink(link);
    if (isMobile) {
      closeSidebar();
    }
  };

  return (
    <div className="relative">
      {/* Sidebar Toggle Button */}
      {isMobile && (
        <button
          className="md:hidden bg-blue-500 hover:bg-blue-600 text-white p-1 rounded-sm absolute top-2 left-0  ml-2 border-black z-20"
          onClick={toggleSidebar}
        >
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="text-lg" />
        </button>
      )}
      {/* Sidebar */}
      {(isOpen || !isMobile) && (
        <div className={`bg-blue-100 w-64 md:h-full md:block z-10 ${isMobile ? 'absolute top-0 left-0 h-full' : ''}`}>
          <div className="p-4">
            <h1 className="text-black text-center text-[20px] font-[700] mb-6">
              Cyber Security
            </h1>
            <div>
              <Link to="/Dashboard" className="block" onClick={() => handleLinkClick("/Dashboard")}>
                <div className={`flex items-center rounded-lg p-2 mb-7 text-center cursor-pointer transform ${activeLink === "/Dashboard" ? 'bg-blue-400' : ' '}`}>
                  <img
                    src={dashlogo}
                    alt="Dashboard"
                    className="h-5 w-5 ml-7 mr-3 filter brightness-100"
                    style={{ filter: "brightness(70%)" }}
                  />
                  <span className="text-black font-[600] text-[20px]">
                    Dashboard
                  </span>
                </div>
              </Link>
              {/* Other sidebar links */}
              <Link to="/module" className="block" onClick={() => handleLinkClick("/module")}>
                <div className={`flex items-center rounded-lg p-2 mb-7 text-center cursor-pointer transform ${activeLink === "/module" ? 'bg-blue-400' : ''}`}>
                  <FontAwesomeIcon
                    icon={faBook}
                    className="ml-7 mr-3 h-5 w-5"
                  />
                  <span className="text-black font-[600] text-[20px] mr-14">
                    Courses
                  </span>
                </div>
              </Link>
              <Link to="/liveclass" className="block" onClick={() => handleLinkClick("/liveclass")}>
                <div className={`flex items-center rounded-lg p-2 mb-7 text-center cursor-pointer transform ${activeLink === "/liveclass" ? 'bg-blue-400' : ''}`}>
                  <FontAwesomeIcon
                    icon={faPlayCircle}
                    className="ml-7 mr-3 h-5 w-5"
                  />
                  <span className="text-black font-[600] text-[20px] mr-4">
                    Liveclass
                  </span>
                </div>
              </Link>
              <Link to="/doubt" className="block" onClick={() => handleLinkClick("/doubt")}>
                <div className={`flex items-center rounded-lg p-2 mb-7 text-center cursor-pointer transform ${activeLink === "/doubt" ? 'bg-blue-400' : ''}`}>
                  <FontAwesomeIcon icon={faQuestionCircle} className='ml-7 mr-3 h-5 w-5'/>
                  <span className="text-black font-[600] text-[20px]">Doubts</span>
                </div>
              </Link>
              <Link to="/feedback" className="block" onClick={() => handleLinkClick("/feedback")}>
                <div className={`flex items-center rounded-lg p-2 mb-7 text-center cursor-pointer transform ${activeLink === "/feedback" ? 'bg-blue-400' : ''}`}>
                  <FontAwesomeIcon icon={faComments} className='ml-7 mr-3 h-5 w-5'/>
                  <span className="text-black font-[600] text-[20px]">Feedback</span>
                </div>
              </Link>
              <Link to="/report" className="block" onClick={() => handleLinkClick("/report")}>
                <div className={`flex items-center rounded-lg p-2 mb-7 text-center cursor-pointer transform ${activeLink === "/report" ? 'bg-blue-400' : ''}`}>
                  <FontAwesomeIcon icon={faFile} className='ml-7 mr-3 h-5 w-5'/>
                  <span className="text-black font-[600] text-[20px]">Report</span>
                </div>
              </Link>
              <Link to="/settings" className="block" onClick={() => handleLinkClick("/settings")}>
                <div className={`flex items-center rounded-lg p-2 mb-7 text-center cursor-pointer transform ${activeLink === "/settings" ? 'bg-blue-400' : ''}`}>
                  <FontAwesomeIcon icon={faGear} className='ml-7 mr-3 h-5 w-5'/>
                  <span className="text-black font-[600] text-[20px]">Settings</span>
                </div>
              </Link>
            </div>
          </div>
          <div className="p-4">
            {/* Additional content or links can be added here */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
