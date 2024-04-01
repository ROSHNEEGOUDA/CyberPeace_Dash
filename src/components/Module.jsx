import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import cf from "../assets/cf.avif";
import cybsec from "../assets/cybsec.jpg";
import sprinkleSvg from '../assets/Sprinkle.svg';

function Home() {
  return (
    <div className="flex flex-col" style={{ position: "relative", width: "100%", height: "100vh", backgroundImage: `url(${sprinkleSvg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>

      {/* Add Course Section */}
      <div className="bg-white text-center rounded-lg shadow-md p-4 absolute top-6 left-6 mt-14 h-[90px] w-[170px]" style={{ zIndex: 1 }}>
        <h2 className="text-base font-semibold">
          <FontAwesomeIcon icon={faUpload} className="mr-2" />
          Add Course
        </h2>
        {/* Form or component for adding a course */}
        <form className="flex flex-col items-center w-full">
          {/* Form fields go here */}
          <button className="bg-blue-600 text-white py-1 px-2 mt-2 rounded-md hover:bg-blue-700 w-24 text-sm">Add Course</button>
        </form>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4">
        <div className="text-center my-10">
          <h1 className="text-3xl md:text-4xl font-bold font-Helvetica text-white mt-16">Start your cybersecurity learning</h1>
          <h2 className="text-lg md:text-xl font-bold font-Arial text-white mt-3">Choose your path from the courses offered by Cyberpeace Foundation</h2>
        </div>

       {/* Add Assignment Section */}
       <div className="bg-white rounded-lg shadow-md p-4 absolute top-6 right-6 mt-14 h-[90px] w-[200px]" style={{ zIndex: 1 }}>
        <h2 className="text-base font-semibold">
          <FontAwesomeIcon icon={faUpload} className="mr-2" />
          <span>Add Assignment</span>
        </h2>
        {/* Form or component for adding an assignment */}
        <form className="flex flex-col items-center w-full">
          {/* Form fields go here */}
          <button className="bg-blue-600 text-white py-1 px-2 mt-2 rounded-md hover:bg-blue-700 w-28 text-[13.1px]">
            <span>Add Assignment</span>
          </button>
        </form>
      </div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-36">
          {/* Card 1 */}
          <Link to="/Featuredcompf" className="block">
            <div className="overflow-hidden bg-white shadow-md h-[300px] w-[550px] ml-3 rounded-md transition duration-300 ease-in-out transform hover:scale-105 group">
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