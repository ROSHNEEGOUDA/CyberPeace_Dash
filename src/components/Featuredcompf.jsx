import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes, faTrash } from "@fortawesome/free-solid-svg-icons";
import course1 from "../assets/course1.png";
import course2 from "../assets/course2.png";
import course3 from "../assets/course3.png";
import '../index.css';

function Featuredcompf() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDiscussionForm, setShowDiscussionForm] = useState(false);
  const [showDeleteForm, setShowDeleteForm] = useState(false);
  const [courses, setCourses] = useState([]);

  const toggleDropdown = ()=>{
    setShowDropdown(!showDropdown);
    setShowDiscussionForm(false);
    setShowDeleteForm(false);
  }

  const handleOptionClick = (option) => {
    setShowDropdown(false);
    if (option === "New") {
      setShowDiscussionForm(true);
    } else if (option === "Delete") {
      setShowDeleteForm(true);
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const description = event.target.description.value;
    const image = event.target.image.files[0];

    const newCourse = {
      id: courses.length + 1, // Generate a unique id
      title,
      description,
      image: URL.createObjectURL(image)
    };

    setCourses([...courses, newCourse]);

    setShowDiscussionForm(false);

    event.target.reset();
  };

  const handleDeleteSubmit = (event) => {
    event.preventDefault();
    const courseId = parseInt(event.target.course.value);

    setCourses(courses.filter(course => course.id !== courseId));

    setShowDeleteForm(false);
  };

  useEffect(() => {
    document.title = 'Computer Fundamentals';
    const originalBackground = document.body.className;
    document.body.className = 'bg-gradient-animation';
    return () => {
      document.body.className = originalBackground;
    };
  }, []);

  useEffect(() => {
    // Dummy data for demonstration
    const dummyData = [
      {
        id: 1,
        title: "Module 1",
        description: "This is the First course that we want to sell to you",
        image: course1
      },
      {
        id: 2,
        title: "Module 2",
        description: "This is the Second course that we want to sell to you",
        image: course2
      },
      {
        id: 3,
        title: "Module 3",
        description: "This is the Third course that we want to sell to you",
        image: course3
      }
    ];

    setCourses(dummyData);
  }, []);

  return (
    <div>
      {/* Main Content */}

      <div className={`absolute top-16 right-6 z-10 mt-16 flex flex-col md:flex-row items-center justify-center`}>
        <button className="bg-blue-600 text-white py-1 px-4 rounded-md mx-7 hover:bg-blue-700 flex items-center transition-colors duration-300" onClick={toggleDropdown}>
          <FontAwesomeIcon icon={faPlus} className="mr-2" />
          Add Module
        </button>
        {showDropdown && (
          <div className="absolute top-12 md:top-12 bg-white shadow-md py-2 px-14 rounded-md z-20">
            <p className="cursor-pointer hover:text-blue-600 mb-2" onClick={() => handleOptionClick("New")}>New</p>
            <p className="cursor-pointer hover:text-blue-600 mb-2" onClick={() => handleOptionClick("Delete")}>Delete</p>
          </div>
        )}
      </div>

      {showDiscussionForm && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-md p-6 rounded-md z-20 border-black mt-8" style={{ width: "90%", maxWidth: "600px" }}>
          <button className="absolute top-2 right-2 text-gray-600 hover:text-gray-800" onClick={() => setShowDiscussionForm(false)}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <h2 className="text-lg font-semibold mb-4">Add Course</h2>
          <form onSubmit={handleFormSubmit}>
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

      {showDeleteForm && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-md p-6 rounded-md z-20 border-black mt-8" style={{ width: "90%", maxWidth: "600px" }}>
          <button className="absolute top-2 right-2 text-gray-600 hover:text-gray-800" onClick={() => setShowDeleteForm(false)}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <h2 className="text-lg font-semibold mb-4">Delete Course</h2>
          <form onSubmit={handleDeleteSubmit}>
            <div className="mb-4">
              <label htmlFor="course" className="block text-sm font-medium text-gray-700">Select Course</label>
              <select id="course" name="course" className="mt-1 p-2 border border-gray-300 rounded-md w-full">
                {courses.map(course => (
                  <option key={course.id} value={course.id}>{course.title}</option>
                ))}
              </select>
            </div>
            <button type="submit" className="bg-red-600 text-white py-1 px-4 rounded-md hover:bg-red-700">
              <FontAwesomeIcon icon={faTrash} className="mr-2" />
              Delete
            </button>
          </form>
        </div>
      )}

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

      <div className="container mx-auto mt-8 px-4 mb-8">
        <div className="grid grid-cols-1 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="w-11/12 ml-6 block bg-white shadow-md rounded-md overflow-hidden transform transition duration-300 hover:scale-105">
              <div className="p-4 flex items-center">
                <div className="flex-1">
                  <h2 className="text-xl font-bold mb-2">{course.title}</h2>
                  <p className="text-gray-700">{course.description}</p>
                </div>
                <img src={course.image} alt={course.title} className="w-32 h-32 object-cover" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Featuredcompf;
