import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import logo from '/src/assets/logo.png';

const Navbar = () => {
  return (
    <nav className='bg-blue-600 flex items-center justify-between px-4 py-2'>
      <Link to="/" className="flex items-center">
        <img src={logo} alt="Logo" className="h-12 w-60" />
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

      <Link to="/profile">
      <div className="flex items-center justify-center rounded-full bg-blue-500 p-4  hover:text-blue-500 transition duration-300 ease-in-out cursor-pointer transform hover:scale-110">
      <FontAwesomeIcon icon={faUser} className="text-white text-lg" />
        </div>
        
        </Link>
      
    </nav>
  );
};

export default Navbar;
