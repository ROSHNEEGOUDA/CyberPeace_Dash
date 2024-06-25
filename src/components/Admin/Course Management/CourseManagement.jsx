import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faChevronDown, faChevronUp, faPlus, faSearch, faBell, faPencil } from '@fortawesome/free-solid-svg-icons';
import image01 from "../../../assets/01.jpg";
import ProfileBoy from "../../../assets/Profile.webp";
import Notification from '../Notification';

const CourseManagementPage = () => {
    const [photo, setPhoto] = useState(image01);
    const [showNotifications, setShowNotifications] = useState(false);

    const handleNotification = () => {
        setShowNotifications(!showNotifications);
    };

    const [sections, setSections] = useState([
        { title: "Week 1 - Introduction", content: ["Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet"] },
        { title: "Week 2 - Malware", content: ["Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet"] },
        { title: "Week 3 - Malware", content: ["Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet"] },
    ]);
    const [expandedSection, setExpandedSection] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState(null);
    const [newFiles, setNewFiles] = useState([]);

    const toggleSection = (index) => {
        setExpandedSection(expandedSection === index ? null : index);
    };

    const addSection = () => {
        setSections([...sections, { title: "New Section", content: [] }]);
    };

    const handlePhotoChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPhoto(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const openModal = (content) => {
        setModalContent(content);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setModalContent(null);
        setNewFiles([]);
    };

    const handleFileChange = (event) => {
        const files = Array.from(event.target.files);
        setNewFiles([...newFiles, ...files.map(file => file.name)]);
    };

    return (
        <div className="max-w-7xl mx-auto p-6 bg-gray-100">
            <div className='flex justify-center mb-10'>
                <div className='bg-white px-2 rounded-3xl py-2 w-4/5 flex items-center justify-between absolute top-11 shadow-xl'>
                    <div className="flex items-center bg-slate-200 rounded-full px-4 py-2 w-full max-w-md">
                        <FontAwesomeIcon icon={faSearch} className="text-gray-500 mr-2" />
                        <input
                            type="text"
                            placeholder="Search"
                            className="w-full bg-transparent focus:outline-none"
                        />
                    </div>
                    <div className="relative flex items-center space-x-10 mr-10">
                        <Link onClick={handleNotification}>
                            <FontAwesomeIcon icon={faBell} className="text-gray-700 text-3xl cursor-pointer" />
                        </Link>
                        <Link to="/profile">
                            <img src={ProfileBoy} alt="Profile" className="w-10 h-10 rounded-full" />
                        </Link>
                        {showNotifications && (
                            <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-xl z-50">
                                <Notification />
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-2/3">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Basic Information</h2>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">Course Name</label>
                            <input type="text" className="w-full p-2 border border-gray-300 rounded" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">Description</label>
                            <textarea className="w-full p-2 border border-gray-300 rounded" rows="5"></textarea>
                        </div>
                    </div>
                    <div className="bg-white p-6 mt-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Content</h2>
                        <div className="mb-4">
                            <button onClick={addSection} className="flex items-center text-blue-500">
                                <FontAwesomeIcon icon={faPlus} className="mr-2" /> Add new section
                            </button>
                        </div>
                        {sections.map((section, index) => (
                            <div key={index} className="mb-4 bg-gray-100 p-4 rounded-lg">
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center cursor-pointer" onClick={() => toggleSection(index)}>
                                        <h3 className="font-semibold text-gray-800">{section.title}</h3>
                                        <FontAwesomeIcon icon={expandedSection === index ? faChevronUp : faChevronDown} className="ml-2" />
                                    </div>
                                    <FontAwesomeIcon icon={faPencil} className="cursor-pointer" onClick={() => openModal(section.title)} />
                                </div>
                                {expandedSection === index && (
                                    <ul className="mt-2">
                                        {section.content.map((item, idx) => (
                                            <li key={idx} className="flex items-center text-gray-600 mb-2">
                                                <FontAwesomeIcon icon={faFileAlt} className="mr-2" /> {item}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-full md:w-1/3">
                    <div className="bg-white p-6 rounded-lg shadow-md relative">
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handlePhotoChange}
                            className="hidden"
                            id="photo-upload"
                        />
                        <label htmlFor="photo-upload">
                            <img src={photo} alt="Course" className="w-full rounded-lg cursor-pointer mb-4" />
                        </label>
                        <p className="text-center text-gray-500 mb-4 cursor-pointer" onClick={() => document.getElementById('photo-upload').click()}>
                            Click to change
                        </p>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">Trainer</label>
                            <input type="text" className="w-full p-2 border border-gray-300 rounded" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">Level</label>
                            <select className="w-full p-2 border border-gray-300 rounded">
                                <option>Beginner</option>
                                <option>Intermediate</option>
                                <option>Advanced</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">Tools</label>
                            <input type="text" className="w-full p-2 border border-gray-300 rounded" />
                        </div>
                    </div>
                    <div className="mt-6 flex justify-between">
                        <button className="w-full bg-red-500 text-white py-2 rounded mr-2">Delete Course</button>
                        <button className="w-full bg-green-500 text-white py-2 rounded ml-2">Save</button>
                    </div>
                </div>
            </div>

            {showModal && (
                <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">{modalContent}</h2>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">Module Title</label>
                            <input type="text" className="w-full p-2 border border-gray-300 rounded" />
                        </div>
                        <div className="bg-gray-100 p-4 rounded-lg mb-4">
                            <label className="block text-gray-700 mb-2">Add new file</label>
                            <input type="file" onChange={handleFileChange} className="w-full p-2 border border-gray-300 rounded mb-2" />
                            <div className="mt-4">
                                {newFiles.length > 0 && (
                                    <div>
                                        {newFiles.map((file, index) => (
                                            <div key={index} className="flex items-center text-gray-600 mb-2">
                                                <FontAwesomeIcon icon={faFileAlt} className="mr-2" /> {file}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <button className="bg-red-500 text-white py-2 px-4 rounded mr-2" onClick={closeModal}>Cancel</button>
                            <button className="bg-green-500 text-white py-2 px-4 rounded">Save</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CourseManagementPage;
