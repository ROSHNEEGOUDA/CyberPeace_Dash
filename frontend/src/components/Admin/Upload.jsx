import React, { useState } from "react";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

const Upload = () => {
  const [courseName, setCourseName] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState(null);
  const [trainerName, setTrainerName] = useState("");
  const [level, setLevel] = useState("Medium");
  const [tools, setTools] = useState("");
  const [content, setContent] = useState([
    {
      title: "Week 1 - Introduction",
      description: "Lorem ipsum dolor sit amet",
      doc: null,
      video: null,
      submodules: [],
    },
  ]);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImg(file);
    }
  };

  const addNewModule = () => {
    setContent([
      ...content,
      { title: "", description: "", doc: null, video: null, submodules: [] },
    ]);
  };

  const addNewSubmodule = (sectionIndex) => {
    const newContent = [...content];
    newContent[sectionIndex].submodules.push({
      title: "",
      description: "",
      doc: null,
      video: null,
    });
    setContent(newContent);
  };

  const uploadFile = async (type, file) => {
    try {
      const data = new FormData();
      data.append("file", file);
      data.append(
        "upload_preset",
        type === "image"
          ? "images_preset"
          : type === "video"
          ? "videos_preset"
          : "samples_preset"
      );

      const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
      const resourceType =
        type === "image" ? "image" : type === "video" ? "video" : "raw";
      const api = `https://api.cloudinary.com/v1_1/${cloudName}/${resourceType}/upload`;

      const res = await axios.post(api, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (res.status !== 200) {
        throw new Error(
          `Failed to upload file to Cloudinary: ${res.statusText}`
        );
      }

      const { secure_url } = res.data;
      return secure_url;
    } catch (error) {
      console.error("Error uploading file to Cloudinary:", error);
      throw new Error("Failed to upload file to Cloudinary");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      // Upload course image
      const imgUrl = await uploadFile("image", img);

      // Upload module content with submodules
      const contentWithUrls = await Promise.all(
        content.map(async (section) => {
          // Upload module document and video
          const docUrl = section.doc ? await uploadFile("doc", section.doc) : null;
          const videoUrl = section.video ? await uploadFile("video", section.video) : null;

          // Upload submodules documents and videos
          const submodulesWithUrls = await Promise.all(
            section.submodules.map(async (submodule) => {
              const submoduleDocUrl = submodule.doc ? await uploadFile("doc", submodule.doc) : null;
              const submoduleVideoUrl = submodule.video ? await uploadFile("video", submodule.video) : null;
              return {
                title: submodule.title,
                description: submodule.description,
                docUrl: submoduleDocUrl,
                videoUrl: submoduleVideoUrl,
              };
            })
          );

          return {
            title: section.title,
            description: section.description,
            docUrl,
            videoUrl,
            submodules: submodulesWithUrls,
          };
        })
      );

      // Construct course data with all uploaded URLs
      const courseData = {
        courseName,
        description,
        trainerName,
        level,
        tools,
        imgUrl,
        content: contentWithUrls,
      };

      // Send courseData to backend API to save in MongoDB
      await axios.post(
        `${import.meta.env.VITE_BACKEND_BASEURL}/api/courses`,
        courseData
      );

      // Display success message, reset form and loading state
      setSuccessMessage("Course created successfully!");
      setLoading(false);
      resetForm();

      setTimeout(() => setSuccessMessage(""), 5000);
    } catch (error) {
      console.error(error);
      setLoading(false);
      setSuccessMessage("Error creating course. Please try again.");
      setTimeout(() => setSuccessMessage(""), 5000);
    }
  };

  const resetForm = () => {
    setImg(null);
    setCourseName("");
    setDescription("");
    setTrainerName("");
    setLevel("Medium");
    setTools("");
    setContent([
      {
        title: "Week 1 - Introduction",
        description: "Lorem ipsum dolor sit amet",
        doc: null,
        video: null,
        submodules: [],
      },
    ]);
  };

  const handleFileChange = (e, sectionIndex, type, submoduleIndex = null) => {
    const file = e.target.files[0];
    if (file) {
      const newContent = [...content];
      if (submoduleIndex === null) {
        newContent[sectionIndex][type] = file;
      } else {
        newContent[sectionIndex].submodules[submoduleIndex][type] = file;
      }
      setContent(newContent);
    }
  };

  const deleteSection = (index) => {
    const newContent = content.filter((_, i) => i !== index);
    setContent(newContent);
  };

  const deleteSubmodule = (sectionIndex, submoduleIndex) => {
    const newContent = [...content];
    newContent[sectionIndex].submodules = newContent[sectionIndex].submodules.filter(
      (_, i) => i !== submoduleIndex
    );
    setContent(newContent);
  };

  const getLevelClasses = (level) => {
    switch (level) {
      case "Easy":
        return "bg-green-300 text-green-800";
      case "Medium":
        return "bg-yellow-300 text-yellow-800";
      case "Hard":
        return "bg-red-300 text-red-800";
      default:
        return "bg-gray-300 text-gray-800";
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 relative">
      {successMessage && (
        <div className="fixed top-5 right-5 bg-green-500 text-white px-4 py-2 rounded shadow-lg z-50">
          {successMessage}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        {/* Basic Information */}
        <h2 className="text-xl font-bold mb-4">Basic Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <input
            type="text"
            placeholder="Enter course name"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <textarea
            placeholder="Enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded h-24 resize-none"
          />
        </div>

        {/* Course Image */}
        <h2 className="text-xl font-bold mb-4">Course Image</h2>
        <div className="mb-6">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full"
          />
        </div>

        {/* Additional Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <input
            type="text"
            placeholder="Enter trainer name"
            value={trainerName}
            onChange={(e) => setTrainerName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <select
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>

        <input
          type="text"
          placeholder="Enter tools"
          value={tools}
          onChange={(e) => setTools(e.target.value)}
          className="w-full p-2 mb-6 border border-gray-300 rounded"
        />

        {/* Content Modules */}
        <h2 className="text-xl font-bold mb-4">Content Modules</h2>
        {content.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-6 p-4 border border-gray-300 rounded">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">
                {section.title || `Module ${sectionIndex + 1}`}
              </h3>
              <button
                type="button"
                onClick={() => deleteSection(sectionIndex)}
                className="text-red-600"
              >
                Delete
              </button>
            </div>
            <input
              type="text"
              placeholder="Enter title"
              value={section.title}
              onChange={(e) => {
                const newContent = [...content];
                newContent[sectionIndex].title = e.target.value;
                setContent(newContent);
              }}
              className="w-full p-2 mb-4 border border-gray-300 rounded"
            />
            <textarea
              placeholder="Enter description"
              value={section.description}
              onChange={(e) => {
                const newContent = [...content];
                newContent[sectionIndex].description = e.target.value;
                setContent(newContent);
              }}
              className="w-full p-2 mb-4 border border-gray-300 rounded h-24 resize-none"
            />
            <div className="mb-4">
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={(e) => handleFileChange(e, sectionIndex, "doc")}
                className="w-full"
              />
            </div>
            <div className="mb-4">
              <input
                type="file"
                accept="video/*"
                onChange={(e) => handleFileChange(e, sectionIndex, "video")}
                className="w-full"
              />
            </div>

            {/* Submodules */}
            <h4 className="text-md font-semibold mb-2">Submodules</h4>
            {section.submodules.map((submodule, submoduleIndex) => (
              <div key={submoduleIndex} className="mb-4 p-4 border border-gray-300 rounded">
                <div className="flex justify-between items-center mb-2">
                  <h5 className="text-md font-semibold">
                    {submodule.title || `Submodule ${submoduleIndex + 1}`}
                  </h5>
                  <button
                    type="button"
                    onClick={() => deleteSubmodule(sectionIndex, submoduleIndex)}
                    className="text-red-600"
                  >
                    Delete
                  </button>
                </div>
                <input
                  type="text"
                  placeholder="Enter title"
                  value={submodule.title}
                  onChange={(e) => {
                    const newContent = [...content];
                    newContent[sectionIndex].submodules[submoduleIndex].title =
                      e.target.value;
                    setContent(newContent);
                  }}
                  className="w-full p-2 mb-2 border border-gray-300 rounded"
                />
                <textarea
                  placeholder="Enter description"
                  value={submodule.description}
                  onChange={(e) => {
                    const newContent = [...content];
                    newContent[sectionIndex].submodules[submoduleIndex].description =
                      e.target.value;
                    setContent(newContent);
                  }}
                  className="w-full p-2 mb-2 border border-gray-300 rounded h-16 resize-none"
                />
                <div className="mb-2">
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={(e) =>
                      handleFileChange(e, sectionIndex, "doc", submoduleIndex)
                    }
                    className="w-full"
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="file"
                    accept="video/*"
                    onChange={(e) =>
                      handleFileChange(e, sectionIndex, "video", submoduleIndex)
                    }
                    className="w-full"
                  />
                </div>
              </div>
            ))}
            <button
              type="button"
              onClick={() => addNewSubmodule(sectionIndex)}
              className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
            >
              Add Submodule
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={addNewModule}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Module
        </button>

        {/* Level Indicator */}
        <div className="mt-6 flex items-center">
          <span
            className={`px-4 py-2 rounded ${getLevelClasses(level)}`}
          >
            {level}
          </span>
        </div>

        {/* Submit Button */}
        <div className="mt-6">
          <button
            type="submit"
            className="bg-green-500 text-white px-6 py-2 rounded"
            disabled={loading}
          >
            {loading ? (
              <ThreeDots color="#fff" height={20} width={20} />
            ) : (
              "Create Course"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Upload;
