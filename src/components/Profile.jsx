import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBook, faUsers, faTrash } from '@fortawesome/free-solid-svg-icons'; // Import icons
import profilePicture from '../assets/800px-CyberPeace_Logo_2023.png'; // Import the profile picture
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { auth } from '../firebase';

const Profile = () => {
  
  // useEffect(() => {
  //   document.title = 'Profile';
  //   const originalBackground = document.body.className;
  //   document.body.className = 'bg-gradient-animation';
  //   return () => {
  //     document.body.className = originalBackground;
  //   };
  // }, []);

  // Sample user statistics data
  const userStatistics = {
    coursesEnrolled: 5,
    studentsEnrolled: 120,
    coursesCreated: 10,
  };

  // Retrieve the name from session storage
  const userName = sessionStorage.getItem('userName');
  const userEmail = sessionStorage.getItem('userEmail');

  const handleDeleteAccount = () => {
    const confirmDelete = window.confirm("Are you sure you want to delete your account?");
    if (confirmDelete) {
      // Delete the user's account
      const user = auth.currentUser;
      user.delete().then(() => {
        // Account deleted successfully
        console.log("User account deleted");
        // Clear session storage
        sessionStorage.clear();
        // Redirect to the sign-in page
        window.location.href = "/";
      }).catch((error) => {
        // An error occurred
        console.error(error);
      });
    }
  };

  return (
    <div className="max-w-screen-lg mx-auto p-6 h-[100vh] bg-slate-100 w-full">
      <div className="text-center">
        <div className="flex items-center justify-center mb-2">
          <img src={profilePicture} alt="Profile" className='h-[200px] w-[360px]'/> {/* Insert the profile picture */}
        </div>
        <h2 className="text-lg font-semibold mb-2">
          <FontAwesomeIcon icon={faUser} className="text-black mr-2" />
          {userName}
        </h2>
        <p className="text-black text-[17px] font-[600] mb-2">{userEmail}</p>
        <button className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700" onClick={handleDeleteAccount}>
          <FontAwesomeIcon icon={faTrash} className="mr-2" />
          Delete Account
        </button>
      </div>

      {/* User statistics section */}
      <div className="text-center mb-6">
        <h2 className="text-[30px] font-semibold mb-4">User Statistics</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white shadow-md rounded-md p-4">
            <FontAwesomeIcon icon={faBook} className="text-black text-4xl mb-2" />
            <p className="text-lg font-semibold">{userStatistics.coursesEnrolled}</p>
            <p className="text-gray-600">Courses Enrolled</p>
          </div>
          <div className="bg-white shadow-md rounded-md p-4">
            <FontAwesomeIcon icon={faUsers} className="text-black text-4xl mb-2" />
            <p className="text-lg font-semibold">{userStatistics.studentsEnrolled}</p>
            <p className="text-gray-600">Students Enrolled</p>
          </div>
          <div className="bg-white shadow-md rounded-md p-4">
            <FontAwesomeIcon icon={faBook} className="text-black text-4xl mb-2" />
            <p className="text-lg font-semibold">{userStatistics.coursesCreated}</p>
            <p className="text-gray-600">Courses Created</p>
          </div>
        </div>
      </div>

      {/* Add more components like course management, student management, etc. here */}

    </div>
  );
};

export default Profile;
