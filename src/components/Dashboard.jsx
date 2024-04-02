import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faChalkboardTeacher, faUpload } from '@fortawesome/free-solid-svg-icons';
import MiniCalendar from './calander';
import courseImage from '../assets/course.png'; // Import the course image
import teacherImage from '../assets/teacher2.jpg'; // Import the teacher image
import sprinkleSvg from '../assets/Sprinkle.svg';
import QueriesSection from './QueriesSection';

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

  return (
    <div className="h-screen bg-slate-100" >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full p-6">
        
        {/* Total Courses */}
        <div className="bg-white rounded-lg shadow-md p-6 mt-3 h-[150px] w-[350px]" style={{ backgroundImage: `url(${courseImage})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'right center', opacity: 0.9 }}>
          <h2 className="text-lg font-semibold mb-4">
            <FontAwesomeIcon icon={faBook} className="mr-2" />
            Total Courses
          </h2>
          <p className="text-3xl font-bold text-blue-600">
            {totalCourses}
          </p>
        </div>

        {/* Total Courses Sold */}
        <div className="bg-white rounded-lg shadow-md p-6 mt-3  h-[150px] w-[350px]" style={{ backgroundImage: `url(${courseImage})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'right center', opacity: 0.9 }}>
          <h2 className="text-lg font-semibold mb-4">
            <FontAwesomeIcon icon={faBook} className="mr-2" />
            Total Courses Sold
          </h2>
          <p className="text-3xl font-bold text-blue-600">
            {totalCoursesSold}
          </p>
        </div>

        {/* Total Teachers */}
        <div className="bg-white rounded-lg shadow-md p-6 mt-3  h-[150px] w-[350px]" style={{ backgroundImage: `url(${teacherImage})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'right center', opacity: 0.9 }}>
          <h2 className="text-lg font-semibold mb-4">
            <FontAwesomeIcon icon={faChalkboardTeacher} className="mr-2" />
            Total Teachers
          </h2>
          <p className="text-3xl font-bold text-blue-600">
            {totalTeachers}
          </p>
        </div>   

        {/* Course Sales Graph */}
        <div className="bg-white rounded-lg shadow-md p-6 col-span-full lg:col-span-2 h-[300px] w-[700px]" style={{ opacity: 0.9 }}>
          <h2 className="text-lg font-semibold mb-4">Course Sales Graph</h2>
          {/* Placeholder for the graph */}
          <div className="h-40 bg-gray-200"></div>
        </div> 

        {/* Calendar Section */}
        <QueriesSection />
      </div>
    </div>
  );
};

export default DashboardContent;
