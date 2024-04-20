import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import Introduction from "./Content/intoduction";
import History from "./Content/HistoryContent";
import CommonAttacks from "./Content/CommonAtt";
import Assessment from "./Content/Assessment";


const Cm1 = () => {
  const [activeModule, setActiveModule] = useState("Introduction");
  const handleModuleClick = (moduleName) => {
    setActiveModule(moduleName);
  };

  return (
    <div className="flex flex-col lg:flex-row ">
      <div className="lg:w-1/4 flex flex-col gap-4 items-center h-96  mt-12 mr-1 rounded-2xl border-gray-200 p-4">
        <div
          className={`bg-white border-blue-500 border-2 w-40 h-10 mb-6 mt-2  rounded-md justify-center items-center flex font-medium hover:bg-blue-500 hover:text-white hover:transition cursor-pointer transform transition-transform hover:scale-105`}
          onClick={() => handleModuleClick("Introduction")}
        >
          Introduction
        </div>
        <div
          className={`bg-white border-blue-500 border-2 w-40 h-10 mb-6  rounded-md justify-center items-center flex font-medium hover:bg-blue-500 hover:text-white hover:transition cursor-pointer transform transition-transform hover:scale-105`}
          onClick={() => handleModuleClick("Course plan")}
        >
          Course plan
        </div>
        <div
          className={`bg-white border-blue-500 border-2 w-40 h-10 mb-6  rounded-md justify-center items-center flex font-medium hover:bg-blue-500 hover:text-white hover:transition cursor-pointer transform transition-transform hover:scale-105`}
          onClick={() => handleModuleClick("History")}
        >
          History
        </div>
        <div
          className={`bg-white border-blue-500 border-2 w-40 h-10 mb-6  rounded-md justify-center items-center flex font-medium hover:bg-blue-500 hover:text-white hover:transition cursor-pointer transform transition-transform hover:scale-105`}
          onClick={() => handleModuleClick("Common attacks")}
        >
          Common attacks
        </div>
        <div
          className={`bg-white border-blue-500 border-2 w-40 h-10 mb-6  rounded-md justify-center items-center flex font-medium hover:bg-blue-500 hover:text-white hover:transition cursor-pointer transform transition-transform hover:scale-105`}
          onClick={() => handleModuleClick("Assessment")}
        >
          Assessment
        </div>
      </div>
      <div class=" w-0  bg-black"></div>
      <div className="lg:w-3/4 p-4">
        {activeModule === "Introduction" && (
          <div>
            <Introduction/>
          </div>
        )}
        {activeModule === "Course plan" && (
          <div>
            <p className="text-[23px] font-[600] text-purple-600 ">
              This is a video to demonstrate the various capabilities of the
              course plan and the integration of items inside it
            </p>
            <YouTube videoId="L1M7uxZ95t4" />
          </div>
        )}
        {activeModule === "History" && (
          <History/>
        )}
        {activeModule === "Common attacks" && (
          <CommonAttacks/>
        )}
        {activeModule === "Assessment" && (
          <div>
            <Assessment/>
          </div>
        )}
        
      </div>
      
    </div>
  );
};

export default Cm1;
