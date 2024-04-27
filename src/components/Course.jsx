import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from "react-responsive";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { firestore, storage } from "../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import cf from "../assets/cf.avif";
import cybsec from "../assets/cybsec.jpg";

function Course() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDiscussionForm, setShowDiscussionForm] = useState(false);
  const [discussions, setDiscussions] = useState([]);
  const [selectedCourseId, setSelectedCourseId] = useState(null);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCourses();
  }, []);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
    setShowDiscussionForm(false);
  };

  const handleOptionClick = (option, courseId) => {
    setShowDropdown(false);
    if (option === "New") {
      setShowDiscussionForm(true);
    } else if (option === "Delete") {
      setShowDeleteConfirmation(true);
      setSelectedCourseId(courseId);
    }
  };

  const fetchCourses = async () => {
    try {
      const coursesCollection = collection(firestore, "courses");
      const coursesSnapshot = await getDocs(coursesCollection);
      const coursesData = [];

      for (const doc of coursesSnapshot.docs) {
        const course = doc.data();
        const imageUrl = await getImageUrl(course.imageUrl);
        coursesData.push({ id: doc.id, ...course, imageUrl });
      }

      setDiscussions(coursesData);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  const getImageUrl = async (path) => {
    try {
      const url = await getDownloadURL(ref(storage, path));
      return url;
    } catch (error) {
      console.error("Error fetching image URL:", error);
      return null;
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const description = event.target.description.value;
    const image = event.target.image.files[0];

    try {
      const imageRef = ref(storage, `images/${image.name}`);
      const uploadResult = await uploadBytes(imageRef, image);
      const imageUrl = uploadResult.ref.fullPath;
      const newCourse = {
        title,
        description,
        imageUrl,
      };

      const docRef = await addDoc(collection(firestore, "courses"), newCourse);
      const courseId = docRef.id; // Get the generated course ID

      setDiscussions((prevDiscussions) => [
        ...prevDiscussions,
        { id: courseId, ...newCourse }, // Include the generated course ID in the course data
      ]);

      event.target.reset();
      setShowDiscussionForm(false);
    } catch (error) {
      console.error("Error adding course:", error);
    }
  };

  const deleteCourse = async () => {
    if (selectedCourseId !== null) {
      try {
        await deleteDoc(doc(firestore, "courses", selectedCourseId));

        setDiscussions((prevDiscussions) =>
          prevDiscussions.filter((course) => course.id !== selectedCourseId)
        );

        setShowDeleteConfirmation(false);
        setSelectedCourseId(null);
      } catch (error) {
        console.error("Error deleting course:", error);
      }
    }
  };

  const isTabletOrMobile = useMediaQuery({ maxWidth: 1024 });

  return (
    <div className="flex flex-col relative mb-5 bg-slate-100 h-full">
      <div
        className={`absolute top-${
          isTabletOrMobile ? "5" : "9"
        } right-5 md:right-${
          isTabletOrMobile ? "5" : "9"
        } z-10 mt-4 flex flex-col md:flex-row items-center justify-center`}
      >
        <button
          className="bg-blue-600 text-white py-1 px-4 rounded-md mx-7 hover:bg-blue-700 flex items-center transition-colors duration-300"
          onClick={toggleDropdown}
        >
          <FontAwesomeIcon icon={faPlus} className="mr-2" />
          Add Course
        </button>
        {showDropdown && (
          <div className="absolute top-12 md:top-12 bg-blue-200 shadow-lg py-2 px-14 rounded-md z-20">
            <p
              className="cursor-pointer hover:text-blue-600 mb-2"
              onClick={() => handleOptionClick("New", null)}
            >
              New
            </p>
            <p
              className="cursor-pointer hover:text-blue-600 mb-2"
              onClick={() => handleOptionClick("Update")}
            >
              Update
            </p>
            <p
              className="cursor-pointer hover:text-blue-600"
              onClick={() => handleOptionClick("Delete")}
            >
              Delete
            </p>
          </div>
        )}
      </div>

      {showDiscussionForm && (
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-md p-6 rounded-md z-20 border-black mt-8"
          style={{ width: "90%", maxWidth: "600px" }}
        >
          <button
            className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
            onClick={() => setShowDiscussionForm(false)}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <h2 className="text-lg font-semibold mb-4">Add Course</h2>
          <form onSubmit={handleFormSubmit}>
            <div className="mb-4">
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                rows="3"
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              ></textarea>
            </div>
            <div className="mb-4">
              <label
                htmlFor="image"
                className="block text-sm font-medium text-gray-700"
              >
                Image
              </label>
              <input
                type="file"
                id="image"
                name="image"
                accept="image/*"
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white py-1 px-4 rounded-md hover:bg-blue-700"
            >
              Submit
            </button>
          </form>
        </div>
      )}

      {showDeleteConfirmation && (
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-md p-6 rounded-md z-20 border-black mt-8"
          style={{ width: "90%", maxWidth: "600px" }}
        >
          <button
            className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
            onClick={() => setShowDeleteConfirmation(false)}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-xl font-semibold mb-4">
              Select Course to Delete
            </h2>
            <div className="space-y-4">
              {discussions.map((course) => (
                <label
                  key={course.id}
                  className="flex items-center space-x-2 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="course"
                    value={course.id}
                    className="form-radio h-4 w-4 text-blue-600"
                    onChange={() => setSelectedCourseId(course.id)}
                  />
                  <span className="text-gray-700">{course.title}</span>
                </label>
              ))}
            </div>
            <button
              className="bg-red-600 text-white py-2 px-8 rounded-md mt-6 hover:bg-red-700"
              onClick={deleteCourse}
            >
              Delete
            </button>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 relative z-0 flex flex-col justify-center items-center">
        <div className="text-center mb-14">
          <h1 className="text-3xl md:text-4xl font-bold font-Helvetica text-black mt-16">
            Start your cybersecurity learning
          </h1>
          <h2 className="text-lg md:text-xl font-bold font-Arial text-black mt-3">
            Choose your path from the courses offered by Cyberpeace Foundation
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-2 md:mt-3">
          {discussions.map((discussion, index) => (
            <div
              key={index}
              className="block"
              onClick={() =>
                navigate(`/course/${discussion.id}`, {
                  state: { id: discussion.id, title: discussion.title },
                })
              }
            >
              <div className="overflow-hidden bg-blue-300 shadow-md rounded-md transition duration-300 ease-in-out transform hover:scale-105 group cursor-pointer">
                <img
                  src={discussion.imageUrl}
                  alt={discussion.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-bold mb-2">{discussion.title}</h2>
                  <p className="text-gray-700">{discussion.description}</p>
                </div>
              </div>
            </div>
          ))}
          <Link to="/Featuredcompf" className="block">
            <div className="overflow-hidden bg-blue-300 shadow-md rounded-md transition duration-300 ease-in-out transform hover:scale-105 group cursor-pointer">
              <img src={cf} alt="Computer Fundamentals" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">Computer Fundamentals</h2>
                <p className="text-gray-700">Course to get you ready with computers</p>
              </div>
            </div>
          </Link>
          <Link to="/Featuredcyber" className="block">
            <div className="overflow-hidden bg-blue-300 shadow-md rounded-md transition duration-300 ease-in-out transform hover:scale-105 group cursor-pointer">
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

export default Course;
