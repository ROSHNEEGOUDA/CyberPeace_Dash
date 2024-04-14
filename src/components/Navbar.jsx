import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import logo from '/src/assets/logo.png';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className='bg-blue-950 flex flex-col md:flex-row items-center justify-between px-4 py-3 relative z-50'>
      <div className="flex items-center justify-between w-full md:w-auto">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="h-14 w-60" />
          <span className="text-white font-bold text-lg"></span>
        </Link>

        <button className="block md:hidden focus:outline-none" onClick={toggleDropdown}>
          <svg className="h-6 w-6 fill-current text-white" viewBox="0 0 24 24">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4 6H20V8H4V6ZM4 12H20V14H4V12ZM4 18H20V20H4V18Z"
            />
          </svg>
        </button>
      </div>

      <div className="hidden md:flex flex-grow md:space-x-2 justify-center mt-4 md:mt-0">
        <input
          type="text"
          placeholder="Search..."
          className="bg-white border border-gray-300 px-3 py-1 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <button className="bg-blue-500 text-white px-4 py-1 rounded-r-md hover:bg-blue-700">
          Search
        </button>
      </div>

      <div className="flex flex-col md:flex-row items-center mt-4 md:mt-0 hidden md:flex">
        <Link to="/profile" className="mr-4">
          <div className="flex items-center justify-center rounded-full bg-blue-500 p-4  hover:text-blue-500 transition duration-300 ease-in-out cursor-pointer transform hover:scale-110">
            <FontAwesomeIcon icon={faUser} className="text-white text-lg" />
          </div>
        </Link>
        
        {/* Logout Button */}
        <button className="bg-blue-500 text-white px-4 py-1 rounded-md hover:bg-blue-700">
          <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
          Logout
        </button>
      </div>

      {/* Dropdown */}
      {isDropdownOpen && (
        <div className="absolute top-full left-0 mt-1 bg-blue-800 w-full border border-gray-300 rounded-md shadow-md z-50">
          <Link to="/profile" className="block px-4 py-3 hover:bg-blue-700">
            <FontAwesomeIcon icon={faUser} className="text-white mr-2" />
            Profile
          </Link>
          <button className="block px-4 py-3 hover:bg-blue-700 w-full text-left" onClick={toggleDropdown}>
            <FontAwesomeIcon icon={faSignOutAlt} className="text-white mr-2" />
            Logout
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
