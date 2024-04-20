import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import course1 from "../assets/course1.png";
import course2 from "../assets/course2.png";
import course3 from "../assets/course3.png";
import course4 from "../assets/course4.png";
import course5 from "../assets/course5.png";
import course6 from "../assets/course6.png";
import '../index.css';

function Featuredcompf() {
  useEffect(() => {
    document.title = 'Computer Fundamentals';
    const originalBackground = document.body.className;
    document.body.className = 'bg-gradient-animation';
    return () => {
      document.body.className = originalBackground;
    };
  }, []);
  
  return (
    <div>
      {/* Main Content */}
      <div>
        <center>
          <h1 className="text-5xl mt-10 font-Helvetica font-bold text-white">
            Computer Fundamentals
          </h1>
          <h2 className="text-2xl mt-5 font-Helvetica text-black font-[500]">
            Featured Courses
          </h2>
        </center>
      </div>

      <div className="container mx-auto mt-8 px-4">
        <div className="grid grid-cols-1 gap-8">
          {/* Card 1 */}
          <Link to="/cm1" className=" w-11/12 ml-6 block bg-white shadow-md rounded-md overflow-hidden transform transition duration-300 hover:scale-105">
            <div className="p-4 flex items-center">
              <div className="flex-1">
                <h2 className="text-xl font-bold mb-2">Module 1</h2>
                <p className="text-gray-700">This is the First course that we want to sell to you</p>
              </div>
              <img src={course1} alt="Course1" className="w-32 h-32 object-cover" />
            </div>
          </Link>

          {/* Card 2 */}
          <Link to="/cm" className="w-11/12 ml-6 block bg-white shadow-md rounded-md overflow-hidden transform transition duration-300 hover:scale-105">
            <div className="p-4 flex items-center">
              <div className="flex-1">
                <h2 className="text-xl font-bold mb-2">Module 2</h2>
                <p className="text-gray-700">This is the Second course that we want to sell to you</p>
              </div>
              <img src={course2} alt="Course2" className="w-32 h-32 object-cover" />
            </div>
          </Link>

          {/* Card 3 */}
          <Link to="/cm" className="w-11/12 ml-6 block bg-white shadow-md rounded-md overflow-hidden transform transition duration-300 hover:scale-105">
            <div className="p-4 flex items-center">
              <div className="flex-1">
                <h2 className="text-xl font-bold mb-2">Module 3</h2>
                <p className="text-gray-700">This is the Second course that we want to sell to you</p>
              </div>
              <img src={course3} alt="Course2" className="w-32 h-32 object-cover" />
            </div>
          </Link>
          {/* Card 4 */}
          <Link to="/cm" className="w-11/12 ml-6 block bg-white shadow-md rounded-md overflow-hidden transform transition duration-300 hover:scale-105">
            <div className="p-4 flex items-center">
              <div className="flex-1">
                <h2 className="text-xl font-bold mb-2">Module 4</h2>
                <p className="text-gray-700">This is the Second course that we want to sell to you</p>
              </div>
              <img src={course4} alt="Course2" className="w-32 h-32 object-cover" />
            </div>
          </Link>

          {/* Card 5 */}
          <Link to="/cm" className="w-11/12 ml-6 block bg-white shadow-md rounded-md overflow-hidden transform transition duration-300 hover:scale-105">
            <div className="p-4 flex items-center">
              <div className="flex-1">
                <h2 className="text-xl font-bold mb-2">Module 5</h2>
                <p className="text-gray-700">This is the Second course that we want to sell to you</p>
              </div>
              <img src={course5} alt="Course2" className="w-32 h-32 object-cover" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Featuredcompf;
