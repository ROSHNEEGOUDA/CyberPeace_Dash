import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'; // Import the faSignOutAlt icon
import logo from '/src/assets/logo.png';

const Navbar = () => {
  return (
    <nav className='bg-blue-950 flex items-center justify-between px-4 py-3'>
      <Link to="/" className="flex items-center">
        <img src={logo} alt="Logo" className="h-14 w-60" />
        <span className="text-white font-bold text-lg"></span>
      </Link>

      <div className='flex items-center flex-grow space-x-2 justify-center'>
        <input
          type="text"
          placeholder="Search..."
          className="bg-white border border-gray-300 px-3 py-1 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <button className="bg-blue-500 text-white px-4 py-1 rounded-r-md hover:bg-blue-700">
          Search
        </button>
      </div>

      <div className="flex items-center space-x-4">
        <Link to="/profile">
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
    </nav>
  );
};

export default Navbar;
