import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload, faPlus, faTimes } from "@fortawesome/free-solid-svg-icons"; // Import the faPlus and faTimes icons
import cf from "../assets/cf.avif";
import cybsec from "../assets/cybsec.jpg";
import sprinkleSvg from '../assets/Sprinkle.svg';
import { useMediaQuery } from 'react-responsive';

function Home() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDiscussionForm, setShowDiscussionForm] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
    setShowDiscussionForm(false); // Close discussion form when toggling dropdown
  };

  const handleOptionClick = (option) => {
    console.log("Selected option:", option);
    setShowDropdown(false);
    if (option === "New") {
      setShowDiscussionForm(true);
    }
  };

  const isTabletOrMobile = useMediaQuery({ maxWidth: 1024 });

  return (
    <div className="flex flex-col relative" style={{ width: "100%", height: "100%", backgroundImage: `url(${sprinkleSvg})`, backgroundSize: 'cover', backgroundPosition: 'center', zIndex: 0 }}>
      {/* Make Change Button */}
      <div className={`absolute top-${isTabletOrMobile ? '5' : '10'} right-${isTabletOrMobile ? '5' : '6'} z-10 flex flex-col md:flex-row items-center justify-center`}>
        <button className="bg-blue-600 text-white py-1 px-4 rounded-md mx-7 hover:bg-blue-700 flex items-center transition-colors duration-300" onClick={toggleDropdown}>
          <FontAwesomeIcon icon={faPlus} className="mr-2" />
          Make Change
        </button>
        {/* Dropdown */}
        {showDropdown && (
          <div className="absolute top-12 md:top-16 right-5 md:right-6 bg-white shadow-md py-2 px-14 rounded-md z-20">
            <p className="cursor-pointer hover:text-blue-600 mb-2" onClick={() => handleOptionClick("New")}>New</p>
            <p className="cursor-pointer hover:text-blue-600 mb-2" onClick={() => handleOptionClick("Update")}>Update</p>
            <p className="cursor-pointer hover:text-blue-600" onClick={() => handleOptionClick("Delete")}>Delete</p>
          </div>
        )}
      </div>

      {/* Discussion Form */}
      {showDiscussionForm && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-md p-6 rounded-md z-20 border-black mt-8" style={{ width: "90%", maxWidth: "600px" }}>
          <button className="absolute top-2 right-2 text-gray-600 hover:text-gray-800" onClick={() => setShowDiscussionForm(false)}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <h2 className="text-lg font-semibold mb-4">Add Course</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
              <input type="text" id="title" name="title" className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
            </div>
            <div className="mb-4">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
              <textarea id="description" name="description" rows="3" className="mt-1 p-2 border border-gray-300 rounded-md w-full"></textarea>
            </div>
            <div className="mb-4">
              <label htmlFor="image" className="block text-sm font-medium text-gray-700">Image</label>
              <input type="file" id="image" name="image" accept="image/*" className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
            </div>
            <button type="submit" className="bg-blue-600 text-white py-1 px-4 rounded-md hover:bg-blue-700">Submit</button>
          </form>
        </div>
      )}

      {/* Content */}
      <div className="container mx-auto px-4 relative z-0 flex flex-col justify-center items-center">
        <div className="text-center my-10">
          <h1 className="text-3xl md:text-4xl font-bold font-Helvetica text-white mt-16">Start your cybersecurity learning</h1>
          <h2 className="text-lg md:text-xl font-bold font-Arial text-white mt-3">Choose your path from the courses offered by Cyberpeace Foundation</h2>
        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-2 md:mt-3">
          {/* Card 1 */}
          <Link to="/Featuredcompf" className="block">
            <div className="overflow-hidden bg-white shadow-md rounded-md transition duration-300 ease-in-out transform hover:scale-105 group">
              <img src={cf} alt="Computer Fundamentals" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">Computer Fundamentals</h2>
                <p className="text-gray-700">Course to get you ready with computers</p>
              </div>
            </div>
          </Link>

          {/* Card 2 */}
          <Link to="/Featuredcyber" className="block">
            <div className="overflow-hidden bg-white shadow-md rounded-md transition duration-300 ease-in-out transform hover:scale-105 group">
              <img src={cybsec} alt="CyberSecurity Fundamentals" className="w-full h-48 object-cover" />
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
}

export default Home;
