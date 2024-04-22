import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import course1 from "../assets/course1.png";
import course2 from "../assets/course2.png";
import course3 from "../assets/course3.png";
import '../index.css';

function Featuredcompf() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDiscussionForm, setShowDiscussionForm] = useState(false);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [discussions, setDiscussions] = useState([]); // State to hold discussions
  const [selectedCourseId, setSelectedCourseId] = useState(null); // State to hold the selected course for deletion

  const initialCourses = [
    { id: 1, title: "Module 1" },
    { id: 2, title: "Module 2" },
    { id: 3, title: "Module 3" },
  ];

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
    setShowDiscussionForm(false);
    setShowDeleteConfirmation(false);
  };

  const handleOptionClick = (option) => {
    setShowDropdown(false);
    if (option === "New") {
      setShowDiscussionForm(true);
    } else if (option === "Delete") {
      setShowDeleteConfirmation(true);
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const description = event.target.description.value;
    const image = event.target.image.files[0];

    const newDiscussion = {
      id: Date.now(), // Assign a unique ID based on timestamp
      title,
      description,
      image: URL.createObjectURL(image)
    };

    setDiscussions([newDiscussion, ...discussions]);

    setShowDiscussionForm(false);

    event.target.reset();
  };

  const deleteCourse = () => {
    if (selectedCourseId !== null) {
      setDiscussions(discussions.filter(course => course.id !== selectedCourseId));
      setShowDeleteConfirmation(false);
      setSelectedCourseId(null);
    }
  };

  const allCourses = [...initialCourses, ...discussions];

  return (
    <div className="bg-slate-100 min-h-screen">
      {/* Main Content */}
      <div className={`absolute top-10 right-6 z-10 mt-16 flex flex-col md:flex-row items-center justify-center `}>
        <button className="bg-blue-600 text-white py-1 px-4 rounded-md mx-7 hover:bg-blue-700 flex items-center transition-colors duration-300" onClick={toggleDropdown}>
          <FontAwesomeIcon icon={faPlus} className="mr-2" />
          Add Module
        </button>
        {showDropdown && (
          <div className="absolute top-12 md:top-10 bg-blue-200 shadow-lg py-2 px-14 rounded-md z-20">
            <p className="cursor-pointer hover:text-blue-600 mb-2" onClick={() => handleOptionClick("New")}>New</p>
            <p className="cursor-pointer hover:text-blue-600 mb-2" onClick={() => handleOptionClick("Delete")}>Delete</p>
          </div>
        )}
      </div>

      {/* Discussion Form */}
      {showDiscussionForm && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-md p-6 rounded-md z-20 border-black mt-8" style={{ width: "90%", maxWidth: "600px" }}>
          <button className="absolute top-2 right-2 text-gray-600 hover:text-gray-800" onClick={() => setShowDiscussionForm(false)}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <h2 className="text-lg font-semibold mb-4">Add Module</h2>
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

      {/* Delete Confirmation */}
      {showDeleteConfirmation && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-md p-6 rounded-md z-20 border-black mt-8" style={{ width: "90%", maxWidth: "600px" }}>
          <button className="absolute top-2 right-2 text-gray-600 hover:text-gray-800" onClick={() => setShowDeleteConfirmation(false)}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-xl font-semibold mb-4">Select Module to Delete</h2>
            <div className="space-y-4">
              {allCourses.map(course => (
                <label key={course.id} className="flex items-center space-x-2 cursor-pointer">
                  <input type="radio" name="course" value={course.id} className="form-radio h-4 w-4 text-blue-600" onChange={() => setSelectedCourseId(course.id)} />
                  <span className="text-gray-700">{course.title}</span>
                </label>
              ))}
            </div>
            <button className="bg-red-600 text-white py-2 px-8 rounded-md mt-6 hover:bg-red-700" onClick={deleteCourse}>Delete</button>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div>
        <center>
          <h1 className="text-5xl mt-10 font-Helvetica font-bold text-black">
            Computer Fundamentals
          </h1>
          <h2 className="text-2xl mt-5 font-Helvetica text-black font-[500]">
            Featured Courses
          </h2>
        </center>
      </div>

      {/* Course Cards */}
      <div className="container mx-auto mt-8 px-4 mb-8">
        <div className="grid grid-cols-1 gap-8">
          {discussions.map((course, index) => (
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

          {/* Hardcoded Course Cards */}
          <Link to="/cm1" className="w-11/12 ml-6 block bg-blue-200 shadow-md rounded-md overflow-hidden transform transition duration-300 hover:scale-105">
            <div className="p-4 flex items-center">
              <div className="flex-1">
                <h2 className="text-xl font-bold mb-2">Module 1</h2>
                <p className="text-gray-700">This is the First course that we want to sell to you</p>
              </div>
              <img src={course1} alt="Course1" className="w-32 h-32 object-cover" />
            </div>
          </Link>

          {/* Card 2 */}
          <Link to="/cm" className="w-11/12 ml-6 block bg-blue-200 shadow-md rounded-md overflow-hidden transform transition duration-300 hover:scale-105">
            <div className="p-4 flex items-center">
              <div className="flex-1">
                <h2 className="text-xl font-bold mb-2">Module 2</h2>
                <p className="text-gray-700">This is the Second course that we want to sell to you</p>
              </div>
              <img src={course2} alt="Course2" className="w-32 h-32 object-cover" />
            </div>
          </Link>

          {/* Card 3 */}
          <Link to="/cm" className="w-11/12 ml-6 block bg-blue-200 shadow-md rounded-md overflow-hidden transform transition duration-300 hover:scale-105">
            <div className="p-4 flex items-center">
              <div className="flex-1">
                <h2 className="text-xl font-bold mb-2">Module 3</h2>
                <p className="text-gray-700">This is the Second course that we want to sell to you</p>
              </div>
              <img src={course3} alt="Course2" className="w-32 h-32 object-cover" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Featuredcompf;
