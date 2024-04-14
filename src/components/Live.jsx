import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "/src/assets/800px-CyberPeace_Logo_2023.png";

const HomePage = () => {
  const [classCode, setClassCode] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (ev) => {
    ev.preventDefault();
    navigate(`/Liveroom/${classCode}`);
  };

  useEffect(() => {
    document.title = 'HOME:Learn';
    const originalBackground = document.body.className;
    document.body.className = 'bg-gradient-animation';
    return () => {
      document.body.className = originalBackground;
    };
  }, []);

  return (
    <div className="flex justify-center mt-16 h-[100vh]">
      <div className="text-center h-80">
        <img src={logo} className="w-54 h-44 mx-auto mb-4" alt="logo" />
        <form onSubmit={handleSubmit} className="max-w-xs mx-4">
          <label className="block mb-8 text-[27px] font-bold text-black "
          >Enter the class code</label>
          <input
            className="w-full px-6 py-2 mb-8 border border-blue-300 rounded-md focus:outline-none focus:border-blue-500 shadow-md"
            value={classCode}
            onChange={(e) => setClassCode(e.target.value)}
            type="text"
            required
            placeholder="Enter the class code.."
          />
          <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transform transition-transform hover:scale-105" type="submit">
            Enter Room
          </button>
        </form>
      </div>
    </div>
  );
};

export default HomePage;
