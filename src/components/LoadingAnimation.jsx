import React from "react";

function LoadingAnimation() {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-75 backdrop-blur-md">
      <div className="flex justify-center items-center bg-white p-6 rounded-lg shadow-lg">
        <div className="border-t-4 border-b-4 border-blue-500 rounded-full w-16 h-16 animate-spin"></div>
        <div className="ml-3 text-gray-700">Loading...</div>
      </div>
    </div>
  );
}

export default LoadingAnimation;
