import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faFileAlt, faCheckCircle, faTimesCircle, faClock, faSearch, faUsers, faBell, faFolderOpen, faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { useMediaQuery } from 'react-responsive';
import image01 from "../../assets/Screenshot 2024-06-19 001148.png"
import ProfileBoy from "../../assets/Profile.webp"
import PT from "../../assets/DashboardUI__109615071.png"
import NS from "../../assets/DashboardUI_images1.png"
import DC from "../../assets/DashboardUI__30764161.png"
import DM from "../../assets/DashboardUI__183600437cryptographyiconblockchaintechnologyrelatedvectorillustration1.png"
import WD from "../../assets/DashboardUI_malwaresymbolredisolatedonwhitebackgroundfreevector1.png"
import Notification from './Notification';
import ToggleProfile from './ToggleProfile';
import { isMatch } from 'date-fns';

const DashboardContent = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const isMobile = useMediaQuery({maxWidth : 536})
  const isTablet = useMediaQuery({maxWidth : 768})

  const toggleProfile = () => {
    setShowProfile(!showProfile);
  }

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  const closeProfile = () => {
    setShowProfile(false);
  }


  return (
    <div className='min-h-full'>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-10">
        <div className="col-span-2">
          <div className="bg-white p-4  rounded-lg shadow-md ">
            <h2 className="text-xl font-bold mb-4">Courses</h2>
            <table className="min-w-full bg-white text-xs">
              <thead>
                <tr>
                  <th className=" border-b text-left">Course</th>
                  <th className=" border-b text-left">Instructor</th>
                  <th className=" border-b text-left">Level</th>
                  <th className=" border-b text-left">Next Assignment</th>
                  {isMobile ? null : <th className=" border-b text-left">Progress</th>}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className=" border-b">Ethical Hacking Essentials</td>
                  <td className=" border-b">
                    <FontAwesomeIcon icon={faUser} className={`${isMobile ? "" : "mr-2"}`} /> Prof Raj Sharma
                  </td>
                  <td className="py-2 border-b">
                    <span className={` text-xs ${isMobile ? "text-yellow-400" : "bg-yellow-400 text-black py-0.5 px-2 rounded-full"}`}>Medium</span>
                  </td>
                  <td className="py-2 border-b">Jun 8, 2024 7:00pm</td>
                  <td className="py-2 border-b">
                  {isMobile ? (<>
                    </>) : (
                      <div className="w-28 bg-gray-200 rounded-full h-1.5">
                      <div className="bg-green-500 h-full rounded-full" style={{ width: '80%' }}></div>
                    </div>
                    )}
                  </td>
                </tr>
                <tr>
                  <td className="py-2 border-b">Ethical Hacking Essentials</td>
                  <td className="py-2 border-b">
                    <FontAwesomeIcon icon={faUser} className={`${isMobile ? "" : "mr-2"}`} /> Prof Raj Sharma
                  </td>
                  <td className="py-2 border-b">
                    <span className={` text-xs ${isMobile ? "text-red-600" : "bg-red-400 text-black py-0.5 px-2 rounded-full"}`}>Hard</span>
                  </td>
                  <td className="py-2 border-b">Jun 8, 2024 7:00pm</td>
                  <td className="py-2 border-b">
                    {isMobile ? (<>
                    </>) : (
                      <div className="w-28 bg-gray-200 rounded-full h-1.5">
                      <div className="bg-green-500 h-full rounded-full" style={{ width: '80%' }}></div>
                    </div>
                    )}
                  </td>
                </tr>
                <tr>
                  <td className="py-2 border-b">Ethical Hacking Essentials</td>
                  <td className="py-2 border-b">
                    <FontAwesomeIcon icon={faUser} className={`${isMobile ? "" : "mr-2"}`} /> Prof Raj Sharma
                  </td>
                  <td className="py-2 border-b">
                    <span className={` text-xs ${isMobile ? "text-green-500" : "bg-green-400 text-black py-0.5 px-2 rounded-full"}`}>Easy</span>
                  </td>
                  <td className="py-2 border-b">Jun 8, 2024 7:00pm</td>
                  <td className="py-2 border-b">
                  {isMobile ? (<>
                    </>) : (
                      <div className="w-28 bg-gray-200 rounded-full h-1.5">
                      <div className="bg-green-500 h-full rounded-full" style={{ width: '80%' }}></div>
                    </div>
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-slate-100 p-4 rounded-lg shadow-md mt-4">
            <div className='flex justify-between'>
              <h2 className="text-xl font-bold mb-4">Explore Courses</h2>
              <Link to="/course">
                <button className='mr-5 w-20 bg-blue-950 text-white rounded-full'>View all</button>
              </Link>
            </div>
            <div className={`flex ${isMobile ? "flex-col space-y-2" : "flex-row gap-2.5"}`}>
              <div className="bg-white p-3 rounded-lg shadow-2xl w-60 cursor-pointer hover:scale-105 transition duration-200">
                <img src={image01} alt="image" className=' h-32 w-full rounded-md mb-2' />
                <span className="bg-yellow-200 text-yellow-700 py-0.5 px-2 text-center rounded-xl text-xs">Medium</span>
                <div className='grid grid-cols-2 space-x-3 mt-2'>
                  <div className='flex items-center text-xs'>
                    <FontAwesomeIcon icon={faFolderOpen} className="mr-1" />
                    <span>Modules</span>
                  </div>
                  <div className="flex items-center text-xs">
                    <FontAwesomeIcon icon={faCalendarDays} className="mr-1" />
                    <span>12 days</span>
                  </div>
                </div>
                <h3 className="text-md font-bold mb-1">Introduction to Cyber Security</h3>
                <p className="text-gray-500 text-xs mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="flex items-center text-gray-500 text-xs">
                    <FontAwesomeIcon icon={faUser} className="mr-1" /> by Alam Lin
                  </span>
                </div>
              </div>
              <div className="bg-white p-3 rounded-lg shadow-2xl w-60 cursor-pointer hover:scale-105 transition duration-200">
                <img src={image01} alt="image" className=' h-32 w-full rounded-md mb-2' />
                <span className="bg-yellow-200 text-yellow-700 py-0.5 px-2 text-center rounded-xl text-xs">Medium</span>
                <div className='grid grid-cols-2 space-x-3 mt-2'>
                  <div className='flex items-center text-xs'>
                    <FontAwesomeIcon icon={faFolderOpen} className="mr-1" />
                    <span>Modules</span>
                  </div>
                  <div className="flex items-center text-xs">
                    <FontAwesomeIcon icon={faCalendarDays} className="mr-1" />
                    <span>12 days</span>
                  </div>
                </div>
                <h3 className="text-md font-bold mb-1">Introduction to Cyber Security</h3>
                <p className="text-gray-500 text-xs mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="flex items-center text-gray-500 text-xs">
                    <FontAwesomeIcon icon={faUser} className="mr-1" /> by Alam Lin
                  </span>
                </div>
              </div>
              <div className="bg-white p-3 rounded-lg shadow-2xl w-60 cursor-pointer hover:scale-105 transition duration-200">
                <img src={image01} alt="image" className=' h-32 w-full rounded-md mb-2' />
                <span className="bg-yellow-200 text-yellow-700 py-0.5 px-2 text-center rounded-xl text-xs">Medium</span>
                <div className='grid grid-cols-2 space-x-3 mt-2'>
                  <div className='flex items-center text-xs'>
                    <FontAwesomeIcon icon={faFolderOpen} className="mr-1" />
                    <span>Modules</span>
                  </div>
                  <div className="flex items-center text-xs">
                    <FontAwesomeIcon icon={faCalendarDays} className="mr-1" />
                    <span>12 days</span>
                  </div>
                </div>
                <h3 className="text-md font-bold mb-1">Introduction to Cyber Security</h3>
                <p className="text-gray-500 text-xs mb-2"></p>
                <div className="flex items-center justify-between mb-4">
                  <span className="flex items-center text-gray-500 text-xs">
                    <FontAwesomeIcon icon={faUser} className="mr-1" /> by Alam Lin
                  </span>
                </div>
              </div>
            </div>


          </div>
        </div>
        <div>
          <div className="bg-white p-4 rounded-lg shadow-md mb-4">
            <div className='flex justify-between'>
              <div>
                <h2 className="text-xl font-bold">Today</h2>
                <h1 className='mb-2 text-sm'>June 18, 2024</h1>
              </div>
              <Link to="/calander">
                <button className='w-20 bg-blue-950 rounded-xl text-white text-sm'>View all</button>
              </Link>
            </div>
            <div className="flex flex-col">
              <div className="bg-gray-100 p-4 rounded-lg mb-2 flex justify-between items-center">
                <div>
                  <h3 className="text-md font-bold">Ethical Hacking</h3>
                  <p className="text-gray-500 text-sm"><FontAwesomeIcon icon={faClock} className='mx-2' />3:00-4:00pm <br /> <br /> Prof Raj Sharma</p>
                </div>
                <button className="bg-blue-900 text-white py-0.5 px-3.5 rounded-full">Join</button>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg mb-4 flex justify-between items-center">
                <div>
                  <h3 className="text-md font-bold">Ethical Hacking</h3>
                  <p className="text-gray-500 text-sm"><FontAwesomeIcon icon={faClock} className='mx-2' />3:00-4:00pm <br /> <br /> Prof Raj Sharma</p>
                </div>
                <button className="bg-blue-900 text-white py-0.5 px-3.5 rounded-full">Join</button>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg mb-4 flex justify-between items-center">
                <div>
                  <h3 className="text-md font-bold">Ethical Hacking</h3>
                  <p className="text-gray-500 text-sm"><FontAwesomeIcon icon={faClock} className='mx-2' />3:00-4:00pm <br /> <br /> Prof Raj Sharma</p>
                </div>
                <button className="bg-blue-900 text-white py-0.5 px-3.5 rounded-full">Join</button>
              </div>
              {/* Repeat for other events */}
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Course Overview</h2>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center justify-between">
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faFileAlt} className="text-blue-500 mr-2" />
                  <span>10 Courses</span>
                </div>
                <span className="text-gray-500">enrolled</span>
              </li>
              <li className="flex items-center justify-between">
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />
                  <span>56 Lessons</span>
                </div>
                <span className="text-gray-500">contained</span>
              </li>
              <li className="flex items-center justify-between">
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faTimesCircle} className="text-red-500 mr-2" />
                  <span>5 Practical Labs</span>
                </div>
                <span className="text-gray-500">involvement</span>
              </li>
              <li className="flex items-center justify-between">
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faUser} className="text-yellow-500 mr-2" />
                  <span>12 Reviews</span>
                </div>
                <span className="text-gray-500">given</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-white p-3 rounded-lg shadow-md mt-4">
        <h2 className="text-xl font-bold mb-4">Popular Course Topics</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="flex flex-row items-center text-xs p-2 rounded-lg cursor-pointer hover:scale-110 transition duration-200">
            <img src={PT} alt="" className='w-9 h-9 mr-2' />
            <span>Penetration Testing</span>
          </div>
          <div className="flex flex-row items-center text-xs p-2 rounded-lg cursor-pointer hover:scale-110 transition duration-200">
            <img src={NS} alt="" className='w-9 h-9 mr-2' />
            <span>Network Security</span>
          </div>
          <div className="flex flex-row items-center text-xs p-2 rounded-lg cursor-pointer hover:scale-110 transition duration-200">
            <img src={DC} alt="" className='w-9 h-9 mr-2' />
            <span>Data Privacy</span>
          </div>
          <div className="flex flex-row items-center text-xs p-2 rounded-lg cursor-pointer hover:scale-110 transition duration-200">
            <img src={DM} alt="" className='w-9 h-9 mr-2' />
            <span>Digital Marketing</span>
          </div>
          <div className="flex flex-row items-center text-xs p-2 rounded-lg cursor-pointer hover:scale-110 transition duration-200">
            <img src={WD} alt="" className='w-9 h-9 mr-2' />
            <span>Web Development</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
