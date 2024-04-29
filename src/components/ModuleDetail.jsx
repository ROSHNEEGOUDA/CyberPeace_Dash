import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";
import Introduction from "./Content/intoduction";
import History from "./Content/HistoryContent";
import CommonAttacks from "./Content/CommonAtt";
import Assessment from "./Content/Assessment";
import Video from "./Content/video"


const Module = () => {
    const [activeModule, setActiveModule] = useState("Introduction");
    const [activeModuleId, setActiveModuleId] = useState(null); // State to store active module id
    const { moduleId } = useParams();
  
    const handleModuleClick = (moduleName, moduleId) => {
      setActiveModule(moduleName);
      setActiveModuleId(moduleId); // Set active module id
    };

  return (
    <div className="flex flex-col lg:flex-row bg-slate-100 ">
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
          Content Videos
        </div>
        {/* <div
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
        </div> */}
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
             <Introduction moduleId={moduleId} /> 
          </div>
        )}
        {activeModule === "Course plan" && (
          <Video moduleId={moduleId}/>
        )}
        {/* {activeModule === "History" && (
          <History/>
        )}
        {activeModule === "Common attacks" && (
          <CommonAttacks/>
        )} */}
        {activeModule === "Assessment" && (
          <div>
            <Assessment moduleId={moduleId}/>
          </div>
        )}
        
      </div>
      
    </div>
  );
};

export default Module;
