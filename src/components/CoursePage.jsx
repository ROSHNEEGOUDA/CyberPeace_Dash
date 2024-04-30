import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useLocation, useNavigate } from "react-router-dom";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  where,
  query,
} from "firebase/firestore";
import { firestore, storage } from "../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import LoadingAnimation from "./LoadingAnimation";
import { useMediaQuery } from "react-responsive";

function CourseDetails() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDiscussionForm, setShowDiscussionForm] = useState(false);
  const [modules, setModules] = useState([]);
  const [selectedModuleId, setSelectedModuleId] = useState(null);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const isTablet = useMediaQuery({ maxWidth: 940 });
  const isMobile = useMediaQuery({ maxWidth: 530 });
  const isMobile2 = useMediaQuery({ maxWidth: 344 });

  useEffect(() => {
    if (location.state && location.state.id) {
      fetchModules(location.state.id);
    }
  }, [location]);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
    setShowDiscussionForm(false);
  };

  const handleOptionClick = (option) => {
    setShowDropdown(false);
    if (option === "New") {
      setShowDiscussionForm(true);
    } else if (option === "Delete") {
      setShowDeleteConfirmation(true);
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const description = event.target.description.value;
    const image = event.target.image.files[0];

    try {
      if (location.state && location.state.id) {
        const imageUrl = await uploadImage(image);
        const docRef = await addDoc(collection(firestore, "modules"), {
          title,
          description,
          imageUrl,
          courseId: location.state.id,
        });

        setModules((prevModules) => [
          ...prevModules,
          { id: docRef.id, title, description, imageUrl },
        ]);
      } else {
        console.error("Course ID is undefined.");
      }

      event.target.reset();
      setShowDiscussionForm(false);
    } catch (error) {
      console.error("Error adding module:", error);
    }
  };

  const uploadImage = async (image) => {
    try {
      const imageRef = ref(storage, `images/${image.name}`);
      await uploadBytes(imageRef, image);
      return await getDownloadURL(imageRef);
    } catch (error) {
      console.error("Error uploading image:", error);
      return null;
    }
  };

  const fetchModules = async (courseId) => {
    try {
      console.log("Module ID:", courseId);
      const modulesQuery = query(
        collection(firestore, "modules"),
        where("courseId", "==", courseId)
      );
      const modulesSnapshot = await getDocs(modulesQuery);
      const modulesData = modulesSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setModules(modulesData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching modules:", error);
    }
  };

  const deleteModule = async () => {
    if (selectedModuleId !== null) {
      try {
        await deleteDoc(doc(firestore, "modules", selectedModuleId));

        setModules((prevModules) =>
          prevModules.filter((module) => module.id !== selectedModuleId)
        );

        setShowDeleteConfirmation(false);
        setSelectedModuleId(null);
      } catch (error) {
        console.error("Error deleting module:", error);
      }
    }
  };

  const handleModuleClick = (moduleId) => {
    // Navigate to a new page with the module details
    navigate(`/module/${moduleId}`);
  };

  if (loading) {
    return <LoadingAnimation />; // Render loading animation until courses are fetched
  }

  return (
    <div className="bg-slate-100 h-screen">
      <div className="absolute top-10 right-6 z-10 mt-16 flex flex-col md:flex-row items-center justify-center">
        <button
          className={`bg-blue-600 text-white py-1 px-4 rounded-md mx-7 hover:bg-blue-700 flex items-center transition-colors duration-300 ${
            isTablet ? "h-7 w-7" : ""
          } ${isMobile ? "absolute mr-16" : ""}`}
          onClick={toggleDropdown}
        >
          <FontAwesomeIcon
            icon={faPlus}
            className={`${isTablet ? "-ml-2" : "mr-2"}`}
          />
          {isTablet || isMobile ? null : "Add Modules"}
        </button>
        {showDropdown && (
          <div
            className={`absolute top-12 md:top-10 bg-blue-200 shadow-lg py-2 rounded-md z-20 ${
              isTablet ? "h-26 w-6 px-10" : "px-14"
            } ${isMobile ? "mr-12" : ""}`}
          >
            <p
              className={`cursor-pointer hover:text-blue-600 mb-2 ${
                isTablet ? "-ml-3" : ""
              }`}
              onClick={() => handleOptionClick("New")}
            >
              New
            </p>
            <p
              className={`cursor-pointer hover:text-blue-600 mb-2 ${
                isTablet ? "-ml-4" : ""
              }`}
              onClick={() => handleOptionClick("Delete")}
            >
              Delete
            </p>
          </div>
        )}
      </div>

      {showDiscussionForm && (
        <div
          className={`absolute  transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-md p-6 rounded-md z-20 border-black mt-8 ${
            isTablet ? " top-full left-2/4" : " top-1/2 left-1/2"
          }`}
          style={{ width: "90%", maxWidth: "600px" }}
        >
          <button
            className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
            onClick={() => setShowDiscussionForm(false)}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <h2 className="text-lg font-semibold mb-4">Add Module</h2>
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
              Select Module to Delete
            </h2>
            <div className="space-y-4">
              {modules.map((module) => (
                <label
                  key={module.id}
                  className="flex items-center space-x-2 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="module"
                    value={module.id}
                    className="form-radio h-4 w-4 text-blue-600"
                    onChange={() => setSelectedModuleId(module.id)}
                  />
                  <span className="text-gray-700">{module.title}</span>
                </label>
              ))}
            </div>
            <button
              className="bg-red-600 text-white py-2 px-8 rounded-md mt-6 hover:bg-red-700"
              onClick={deleteModule}
            >
              Delete
            </button>
          </div>
        </div>
      )}

      <div>
        <center>
          <div className={` relative top-10 font-Helvetica font-bold text-black ${isTablet ? "text-3xl" : "text-5xl"} ${isMobile2 ? " text-3xl top-20" : "text-5xl"}`}>
            {location.state && location.state.title}
          </div>
        </center>
      </div>

      <div
        className={`container mx-auto ${
          isTablet ? "mt-32" : "mt-32"
        } px-4 mb-8`}
      >
        <div className="grid grid-cols-1 gap-8">
          {modules.map((module) => (
            <div
              key={module.id}
              onClick={() => handleModuleClick(module.id)}
              className={` ${
                isMobile2 ? "bg-white shadow-md rounded-md" : "ml-6 block bg-white shadow-md rounded-md overflow-hidden transform transition duration-300 hover:scale-105 cursor-pointer"
              }`}
            >
              <div className="p-4 flex items-center">
                <div className="flex-1">
                  <h2 className="text-xl font-bold mb-2">{module.title}</h2>
                  <p className="text-gray-700">{module.description}</p>
                </div>
                {!isMobile2 && (
                  <img
                    src={module.imageUrl}
                    alt={module.title}
                    className=" w-28 h-28 object-cover"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CourseDetails;
