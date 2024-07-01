import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { useMediaQuery } from "react-responsive";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const MainLayout = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div className=" w-full min-h-screen bg-gray-200">
      <div className="flex flex-grow pt-8">
        <div className={`${isMobile ? "" : "w-88"}`}>
          <Sidebar className="" />
        </div>
        <main className={`flex-grow p-6 h-full ${ !isMobile ? "ml-64" : ""}`}>
          {children}
        </main>
      </div>
      {/* Uncomment if you want to include the Footer */}
      {/* <Footer /> */}
    </div>
  );
};

export default MainLayout;
