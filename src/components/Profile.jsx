import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'; // Import the user icon
import profilePicture from '../assets/800px-CyberPeace_Logo_2023.png'; // Import the profile picture
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import cf from '../assets/course1.png'; // Import course images
import cybsec from '../assets/course2.png';

const Profile = () => {
  
  useEffect(() => {
    document.title = 'Profile';
    const originalBackground = document.body.className;
    document.body.className = 'bg-gradient-animation';
    return () => {
      document.body.className = originalBackground;
    };
  }, []);

  return (
    <div className="max-w-screen-lg mx-auto p-6">
      <div className="text-center">
        <div className="flex items-center justify-center mb-2">
          <img src={profilePicture} alt="Profile" className='h-[200px] w-[400px]'/> {/* Insert the profile picture */}
        </div>
        <h2 className="text-lg font-semibold mb-2">
        <FontAwesomeIcon icon={faUser} className="text-black mr-2" />
          Roshnee Gouda</h2>
        <p className="text-black text-[17px] font-[600] mb-2">roshnee111@gmail.com</p>
        <p className="text-black text-base font-[600] mb-6">+91 ########</p>
      </div>

      {/* My Courses Section */}
      <div className="text-center mb-6">
        <h2 className="text-[30px] font-semibold mb-4">My Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {/* Course Card 1 */}
          <Link to="/Featuredcompf" className="block">
            <div className="overflow-hidden bg-white shadow-md rounded-md h-[300px] w-[500px] -mx-10 transition duration-300 ease-in-out transform hover:scale-105 group">
              <div className="overflow-hidden">
                <img src={cf} alt="Computer Fundamentals" className="w-full h-56 object-cover" />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">Computer Fundamentals</h2>
                <p className="text-gray-700">Course to get you ready with computers</p>
              </div>
            </div>
          </Link>

          {/* Course Card 2 */}
          <Link to="/Featuredcyber" className="block">
            <div className="overflow-hidden bg-white shadow-md rounded-md h-[300px] w-[500px] mx-5 transition duration-300 ease-in-out transform hover:scale-105 group">
              <div className="overflow-hidden">
                <img src={cybsec} alt="CyberSecurity Fundamentals" className="w-full h-56 object-cover" />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">CyberSecurity Fundamentals</h2>
                <p className="text-gray-700">Start your journey in the field of cybersecurity</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
