import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

const EditCourse = () => {
  const [title, setTitle] = useState('Introduction to Cyber Security');
  const [description, setDescription] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum.');
  const [trainer, setTrainer] = useState('');
  const [level, setLevel] = useState('Beginner');
  const [tools, setTools] = useState('');
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [isEditingDescription, setIsEditingDescription] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with:", { title, description, trainer, level, tools });
    setTitle('Introduction to Cyber Security');
    setDescription('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum.');
    setTrainer('');
    setLevel('Beginner');
    setTools('');
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-5xl w-full space-y-8">
        <h2 className="text-2xl font-semibold mb-4 text-center">Edit Course</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-xl font-semibold">Basic Information</h3>
            <div className="relative flex items-center">
              <label htmlFor="title" className="block text-gray-700">Course Name</label>
              {isEditingTitle ? (
                <div className="relative w-full">
                  <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    placeholder="Enter course name"
                    required
                  />
                  <button onClick={() => setIsEditingTitle(false)} className="absolute right-8 top-8 text-green-500">
                    <FontAwesomeIcon icon={faCheck} />
                  </button>
                  <button onClick={() => setIsEditingTitle(false)} className="absolute right-14 top-8 text-red-500">
                    <FontAwesomeIcon icon={faTimes} />
                  </button>
                </div>
              ) : (
                <div className="flex items-center w-full">
                  <p className="w-full px-3 py-2 border border-gray-300 rounded">{title}</p>
                  <button onClick={() => setIsEditingTitle(true)} className="ml-2 text-gray-500">
                    <FontAwesomeIcon icon={faPencilAlt} />
                  </button>
                </div>
              )}
            </div>
            <div className="relative flex items-center">
              <label htmlFor="description" className="block text-gray-700">Description</label>
              {isEditingDescription ? (
                <div className="relative w-full">
                  <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    placeholder="Enter course description"
                    rows="4"
                    required
                  ></textarea>
                  <button onClick={() => setIsEditingDescription(false)} className="absolute right-8 top-8 text-green-500">
                    <FontAwesomeIcon icon={faCheck} />
                  </button>
                  <button onClick={() => setIsEditingDescription(false)} className="absolute right-14 top-8 text-red-500">
                    <FontAwesomeIcon icon={faTimes} />
                  </button>
                </div>
              ) : (
                <div className="flex items-center w-full">
                  <p className="w-full px-3 py-2 border border-gray-300 rounded">{description}</p>
                  <button onClick={() => setIsEditingDescription(true)} className="ml-2 text-gray-500">
                    <FontAwesomeIcon icon={faPencilAlt} />
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-gray-100 border border-gray-300 rounded p-4">
              <img src="path/to/your/image.jpg" alt="Course" className="w-full h-40 object-cover rounded" />
              <span className="block text-center text-gray-500 mt-2">Click to change</span>
            </div>
            <div>
              <label htmlFor="trainer" className="block text-gray-700">Trainer</label>
              <input
                type="text"
                id="trainer"
                value={trainer}
                onChange={(e) => setTrainer(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                placeholder="Enter trainer name"
                required
              />
            </div>
            <div>
              <label htmlFor="level" className="block text-gray-700">Level</label>
              <select
                id="level"
                value={level}
                onChange={(e) => setLevel(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                required
              >
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </div>
            <div>
              <label htmlFor="tools" className="block text-gray-700">Tools</label>
              <input
                type="text"
                id="tools"
                value={tools}
                onChange={(e) => setTools(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                placeholder="Enter tools used"
                required
              />
            </div>
          </div>
          <div className="md:col-span-3">
            <h3 className="text-xl font-semibold">Content</h3>
            <div className="bg-gray-100 p-4 border border-gray-300 rounded space-y-4">
              <button type="button" className="text-blue-500">+ Add new section</button>
              <div className="bg-white p-4 rounded shadow flex justify-between items-center">
                <span>Week 1 - Introduction</span>
                <button type="button" className="text-gray-500 hover:text-gray-700">
                  <FontAwesomeIcon icon={faPencilAlt} />
                </button>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="md:col-span-3 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditCourse;
