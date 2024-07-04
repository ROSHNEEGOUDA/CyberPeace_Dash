import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faStar, faUser, faBell, faSearch, faUsers,
    faFileAlt, faVideo, faClock, faTools,
    faShieldAlt, faShieldVirus, faNetworkWired, faKey,
    faBackward, faForward,
    faFlask
} from '@fortawesome/free-solid-svg-icons';
import image01 from "../../../assets/01.jpg";
import { useMediaQuery } from 'react-responsive';

const CoursePreviewPage = () => {
    const location = useLocation();
    const { course } = location.state || {}; // Default to an empty object if state is undefined
    const weekContent = course.content || []; // Default to an empty array if content is undefined

    const [showNotifications, setShowNotifications] = useState(false);
    const [showProfile, setShowProfile] = useState(false);

    const isDestop = useMediaQuery({ minWidth: 768 });
    const isTablet = useMediaQuery({ minWidth: 440 })
    const isMobile = useMediaQuery({ maxWidth: 440 })

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

    if (!course) {
        return <div>No course data available</div>;
    }

    return (
        <div className={`max-w-7xl mx-auto bg-gray-100 ${isMobile ? "p-3" : "p-6"}`}>
            <div className="flex flex-col gap-6 md:flex-row">
                <div className={`${isDestop ? "w-2/3" : `${isTablet ? "w-full" : ""}`} `}>
                    <div className={`bg-white p-3 rounded-lg shadow-md ${isMobile ? "h-64" : ""}`}>
                        <div className="relative">
                            <img src={image01} alt="Course Image" className={`w-full rounded-lg ${isMobile ? "h-44" : "h-96"}`} />
                            <div className={`flex justify-between mt-4 ${isMobile ? "text-sm" : ""}`}>
                                <button className={`text-white bg-blue-500 hover:bg-blue-700 rounded-full ${isMobile ? "py-1 px-1.5" : "py-2 px-4"}`}>
                                    <FontAwesomeIcon icon={faBackward} className='mr-1' /> Previous
                                </button>
                                <button className={`text-white bg-blue-500 hover:bg-blue-700 rounded-full ${isMobile ? "py-1 px-1.5" : "py-2 px-4"}`}>
                                    Next <FontAwesomeIcon icon={faForward} className='ml-1' />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-6 mt-6 rounded-lg shadow-md">
                        <div className="flex items-center space-x-2 mb-2">
                            <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
                            <span className="text-yellow-500">4.6</span>
                            <span className="text-sm text-gray-600">based on</span>
                            <a href="#" className="underline text-blue-400">10 reviews</a>
                        </div>
                        <h1 className={` font-bold text-gray-800 ${isMobile ? "text-xl" : "text-3xl"}`}>{course.courseName}</h1>
                        <div className={`flex items-center mt-2 space-x-2 ${isMobile ? "text-sm" : ""}`}>
                            <span className="px-2 py-1 bg-yellow-300 text-yellow-800 rounded">Medium</span>
                            <span className="px-2 py-1 bg-gray-300 text-gray-800 rounded flex items-center">
                                <FontAwesomeIcon icon={faTools} className='mr-2' />
                                Kali Linux
                            </span>
                        </div>
                        <p className={`mt-4 text-gray-600 ${isMobile ? "text-sm" : ""}`}>
                            {course.description} adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <div className='flex justify-between'>
                            <div className={`flex items-center space-x-2 mt-4 ${isMobile ? "text-sm" : ""}`}>
                                <FontAwesomeIcon icon={faUser} className="text-gray-500" />
                                <span className="text-gray-500">{course.trainerName}</span>
                                <FontAwesomeIcon icon={faUsers} className="text-gray-500" />
                                <span className="text-gray-500">100+ students enrolled</span>
                            </div>
                            <Link><button className={`text-black mt-4  rounded-md ${isMobile ? "" : "py-2 px-4 bg-gray-300"}`}><FontAwesomeIcon icon={faFlask} />Lab</button></Link>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/3">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className={` font-semibold text-gray-800 mb-4 ${isMobile ? "text-lg" : "text-xl"}`}>Course Content</h2>
                        <div className={`space-y-4 ${isMobile ? "text-xs" : ""}`}>
                            {weekContent.map((week, index) => (
                                <details key={index} className="p-4 bg-gray-100 rounded-lg">
                                    <summary className="font-semibold text-gray-800 cursor-pointer">{week.title}</summary>
                                    <ul className="mt-2 list-disc list-inside">
                                        {week.submodules.map((item, subIndex) => (
                                            <li key={subIndex} className="text-gray-600">{item.title}</li>
                                        ))}
                                    </ul>
                                </details>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CoursePreviewPage;
