import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import UserCourseCard from "./CourseCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMediaQuery } from "react-responsive";

const AdminCourse = () => {
  const [courses, setCourses] = useState([]);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const istablete = useMediaQuery({ maxHeight: 768, minWidth: 450 })
  const isTablet1 = useMediaQuery({ maxWidth: 672 })
  const isMobile = useMediaQuery({ maxWidth: 426 })

  const toggleProfile = () => {
    setShowProfile(!showProfile);
  }

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  const closeProfile = () => {
    setShowProfile(false);
  }

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_BASEURL}/api/courses`
        );
        if (response.ok) {
          const data = await response.json();
          setCourses(data);
        } else {
          const errorData = await response.text();
          console.error("Error fetching courses:", errorData);
        }
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };
    fetchCourses();
  }, []);

  return (
    <div className={`min-h-screen ${isMobile ? "p-2" : "p-6"}`}>
      <div className=" bg-white mt-6 rounded-lg shadow-md p-2 mb-4">
        <div className={`flex justify-between items-center ${isTablet1 ? "flex-col" : ""}`}>
          {isMobile ? (
            <>
              <div className="flex flex-col text-xs">
                <div className="flex space-x-7 mb-2">
                  <button className="px-2 py-1 rounded-lg focus:outline-none focus:bg-gray-300">
                    All
                  </button>
                  <button className="px-2 py-1 rounded-lg focus:outline-none focus:bg-gray-300">
                    Completed
                  </button>
                  <button className="px-2 py-1 rounded-lg focus:outline-none focus:bg-gray-300">
                    Active
                  </button>
                </div>
                <div className="flex space-x-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-600">Sort By:</span>
                    <select className="focus:outline-none cursor-pointer text-xs">
                      <option>Last Active</option>
                      <option>Newest</option>
                      <option>Oldest</option>
                    </select>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-600">Filter:</span>
                    <select className="text-sm focus:outline-none">
                      <option>Free</option>
                      <option>Paid</option>
                    </select>
                  </div>
                </div>
              </div>

            </>
          ) : (
            <>
              <div className="flex space-x-4">
                <button className="px-4 py-2 rounded-lg focus:outline-none focus:bg-gray-300">
                  All
                </button>
                <button className="px-4 py-2 rounded-lg focus:outline-none focus:bg-gray-300">
                  Completed
                </button>
                <button className="px-4 py-2 rounded-lg focus:outline-none focus:bg-gray-300">
                  Active
                </button>
              </div>
              <div className="flex space-x-4">
                <div className="flex items-center space-x-2">
                  <span className="text-gray-600">Sort By:</span>
                  <select className="focus:outline-none cursor-pointer text-sm">
                    <option>Last Active</option>
                    <option>Newest</option>
                    <option>Oldest</option>
                  </select>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-gray-600">Filter:</span>
                  <select className="text-sm focus:outline-none">
                    <option>Free</option>
                    <option>Paid</option>
                  </select>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <div>
        <h1 className="text-2xl font-bold mb-4">Courses</h1>
        <div className={`grid gap-5  ${isTablet1 ? "grid-cols-1" : " grid-cols-3"} ${isMobile ? "" : ""}`}>
          {courses.map((course) => (
            <Link
              key={course._id}
              to="/course/coursePage"
              state={{ course: course }}
            >
              <UserCourseCard course={course} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminCourse;
