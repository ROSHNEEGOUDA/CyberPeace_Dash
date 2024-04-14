import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';
import courseImage from '../assets/course.png'; // Import the course image
import teacherImage from '../assets/teacher2.jpg'; // Import the teacher image
import QueriesSection from './QueriesSection';
import { useMediaQuery } from 'react-responsive';

const DashboardContent = () => {
  const [totalCourses, setTotalCourses] = useState(0);
  const [totalCoursesSold, setTotalCoursesSold] = useState(0);
  const [totalTeachers, setTotalTeachers] = useState(0);

  useEffect(() => {
    const courseInterval = setInterval(() => {
      if (totalCourses < 120) {
        setTotalCourses(prevCount => prevCount + 1);
      } else {
        clearInterval(courseInterval);
      }
    }, 50);

    const coursesSoldInterval = setInterval(() => {
      if (totalCoursesSold < 50) {
        setTotalCoursesSold(prevCount => prevCount + 1);
      } else {
        clearInterval(coursesSoldInterval);
      }
    }, 50);

    const teachersInterval = setInterval(() => {
      if (totalTeachers < 15) {
        setTotalTeachers(prevCount => prevCount + 1);
      } else {
        clearInterval(teachersInterval);
      }
    }, 50);

    return () => {
      clearInterval(courseInterval);
      clearInterval(coursesSoldInterval);
      clearInterval(teachersInterval);
    };
  }, [totalCourses, totalCoursesSold, totalTeachers]);

  // Media Query for different screen sizes
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1335 });
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1335 });

  return (
    <div className="h-full bg-slate-100 grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
      {/* Total Courses */}
      <div className={`bg-white rounded-lg shadow-md h-[150px] p-6 mt-4 ${isTabletOrMobile ? 'w-full' : 'w-[350px]'}`} style={{ backgroundImage: `url(${courseImage})`, backgroundSize: '110px', backgroundRepeat: 'no-repeat', backgroundPosition: 'right bottom', opacity: 0.9   }}>
        <h2 className="text-lg font-semibold mb-2 lg:mb-4">
          <FontAwesomeIcon icon={faBook} className="mr-2" />
          Total Courses
        </h2>
        <p className="text-2xl lg:text-3xl font-bold text-blue-600">
          {totalCourses}
        </p>
      </div>

      {/* Total Courses Sold */}
      <div className={`bg-white rounded-lg shadow-md h-[150px] p-6 mt-4 ${isTabletOrMobile ? 'w-full' : 'w-[350px]'}`} style={{ backgroundImage: `url(${courseImage})`, backgroundSize: '110px', backgroundRepeat: 'no-repeat', backgroundPosition: 'right bottom', opacity: 0.9 }}>
        <h2 className="text-lg font-semibold mb-2 lg:mb-4">
          <FontAwesomeIcon icon={faBook} className="mr-2" />
          Total Courses Sold
        </h2>
        <p className="text-2xl lg:text-3xl font-bold text-blue-600">
          {totalCoursesSold}
        </p>
      </div>

      {/* Total Teachers */}
      <div className={`bg-white rounded-lg shadow-md h-[150px] p-6 mt-4 ${isTabletOrMobile ? 'w-full' : 'w-[350px]'}`} style={{ backgroundImage: `url(${teacherImage})`, backgroundSize: '110px', backgroundRepeat: 'no-repeat', backgroundPosition: 'right bottom', opacity: 0.9 }}>
        <h2 className="text-lg font-semibold mb-2 lg:mb-4">
          <FontAwesomeIcon icon={faChalkboardTeacher} className="mr-2" />
          Total Teachers
        </h2>
        <p className="text-2xl lg:text-3xl font-bold text-blue-600">
          {totalTeachers}
        </p>
      </div>

      {/* Course Sales Graph */}
      <div className="bg-white rounded-lg shadow-md p-6 col-span-1 lg:col-span-2" style={{ opacity: 0.9 }}>
        <h2 className="text-lg font-semibold mb-4">Course Sales Graph</h2>
        {/* Placeholder for the graph */}
        <div className="h-40 bg-gray-200"></div>
      </div>

      {/* Queries Section */}
      <div className="bg-white rounded-lg shadow-md p-6 col-span-full lg:col-span-1" style={{ opacity: 0.9 }}>
        <QueriesSection />
      </div>
    </div>
  );
};

export default DashboardContent;
