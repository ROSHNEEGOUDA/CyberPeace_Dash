import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faUser,
  faBell,
  faSearch,
  faUsers,
  faFileAlt,
  faVideo,
  faClock,
  faTools,
  faDesktop,
  faShieldAlt,
  faShieldVirus,
  faNetworkWired,
  faKey,
} from "@fortawesome/free-solid-svg-icons";
import ProfileBoy from "../../../assets/Profile.webp";
import WeekContent from "./WeekContent";
import { useMediaQuery } from "react-responsive";

const CoursePage = () => {
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const isDestop = useMediaQuery({minWidth : 768});
  const isTablet = useMediaQuery({minWidth : 440});
  const isMobile = useMediaQuery({maxWidth : 439})

  const toggleProfile = () => {
    setShowProfile(!showProfile);
  };

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  const closeProfile = () => {
    setShowProfile(false);
  };

  const handleEnroll = () => {
    setIsEnrolled(true);
  };

  const location = useLocation();
  const { course } = location.state || {}; // Default to an empty object if state is undefined

  if (!course) {
    return <div>No course data available</div>;
  }

  const weekContent = course.content || []; // Default to an empty array if content is undefined

  // Function to get Tailwind CSS classes based on difficulty level
  const getLevelClasses = (level) => {
    switch (level) {
      case "Beginner":
        return "bg-green-500 text-white px-2 py-1 rounded";
      case "Medium":
        return "bg-yellow-500 text-white px-2 py-1 rounded";
      case "Advanced":
        return "bg-red-500 text-white px-2 py-1 rounded";
      default:
        return "bg-gray-500 text-white px-2 py-1 rounded";
    }
  };

  return (
    <div className={`max-w-7xl mx-auto bg-gray-100 ${isMobile ? "p-3" : "p-6"}`}>
      
      <div className={`flex  gap-2 justify-between h-full ${isTablet ? "flex-row" : "md:flex-row flex-col"}`}>
        <div className={`${isMobile ? " w-full" : "w-2/3"}`}>
          <div className="flex flex-col justify-between items-start md:items-center bg-white p-6 rounded-lg shadow-md">
            <div className="md:flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <div className="space-x-2 py-1 px-2 rounded-3xl text-sm">
                  <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
                  <a href="#" className="text-yellow-500">
                    4.6
                  </a>
                </div>
                <div className="text-sm">based on</div>
                <div className="underline cursor-pointer text-blue-400">
                  10 review
                </div>
              </div>
              <h1 className={` font-bold text-gray-800 ${isMobile ? "text-xl" : "text-3xl"}`}>
                {course.courseName}
              </h1>
              <div className="flex items-center mt-2 space-x-2">
                <span className={getLevelClasses(course.level)}>
                  {course.level}
                </span>
                {course.tools && (
                  <span className="px-2 py-1 bg-gray-300 text-gray-800 rounded">
                    <FontAwesomeIcon icon={faTools} className="mr-2" />
                    {course.tools}
                  </span>
                )}
              </div>
              <p className={`mt-4 text-gray-600 ${isMobile ? "text-sm" : ""}`}>
                {course.description} adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim ve     {/* remove the reaminig text */}
              </p>
              <div className={`flex items-center space-x-2 mt-4 ${isMobile ? "text-sm" : ""}`}>
                <FontAwesomeIcon icon={faUser} className="text-gray-500" />
                <span className="text-gray-500">{course.trainerName}</span>
                <span className="text-gray-500"> </span>
                <FontAwesomeIcon icon={faUsers} className="text-gray-500" />
                <span className="text-gray-500">100+ students enrolled</span>
              </div>
            </div>
          </div>
          <div className="mt-6 bg-white p-6 w-full rounded-lg shadow-md">
            <h2 className={` font-semibold text-gray-800 mb-4 ${isMobile ? " text-lg" : "text-xl"}`}>
              Course Content
            </h2>
            <div className={`flex items-center text-gray-600 mb-4 ${isMobile ? " text-sm flex-col justify-start" : " space-x-4"}`}>
              <div className={`flex space-x-2 ${isMobile ? "justify-start" : "items-center"}`}>
                <FontAwesomeIcon icon={faFileAlt} className="text-gray-500" />
                <span>21 sections</span>
              </div>
              <div className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faVideo} className="text-gray-500" />
                <span>100 lectures</span>
              </div>
              <div className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faClock} className="text-gray-500" />
                <span>72 hours</span>
              </div>
              <div className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faDesktop} className="text-gray-500" />
                <span>10 labs</span>
              </div>
            </div>
            <div className="space-y-4">
              {weekContent.map((content, i) => (
                <WeekContent
                  key={i}
                  weekTitle={content.title}
                  content={content.submodules}
                />
              ))}
            </div>
          </div>
        </div>
        <div className={`mt-6 md:mt-0 md:ml-6 bg-white p-6  rounded-lg shadow-md ${isDestop ? "w-1/3" : `${isTablet ? "w-1/3" : ""}`} `}>
          <img src={course.imgUrl} alt="Enrollment card" className="rounded-lg" />
          {isEnrolled ? (
            <>
              <Link to="/course/coursePage/coursePreview" state={{ course: course }}>
                <button className="w-full bg-blue-500 text-white py-2 rounded mt-4">
                  Preview
                </button>
              </Link>
              <div className="mt-4 text-green-600 text-center font-semibold">
                Enrolled Successfully
              </div>
            </>
          ) : (
            <button
              onClick={handleEnroll}
              className="w-full bg-blue-500 text-white py-2 rounded mt-4"
            >
              Enroll Now
            </button>
          )}
          <div className="mt-4">
            <h2 className="text-xl font-semibold text-gray-800">
              This course includes
            </h2>
            <div className={`space-y-2 text-gray-600 mt-2 ${isMobile ? "text-xs" : ""}`}>
              <div>
                <FontAwesomeIcon icon={faShieldAlt} className="mr-3" />
                Cybersecurity Fundamentals
              </div>
              <div>
                <FontAwesomeIcon icon={faShieldVirus} className="mr-3" />
                Malware Types
              </div>
              <div>
                <FontAwesomeIcon icon={faNetworkWired} className="mr-3" />
                Network Security Basics
              </div>
              <div>
                <FontAwesomeIcon icon={faKey} className="mr-3" />
                Authentication & Authorization
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
