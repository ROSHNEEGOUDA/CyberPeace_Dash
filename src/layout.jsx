import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col flex-1">
      <Navbar />

      <div className="flex h-full">
        <Sidebar className="h-full" />
        <main className="flex-grow">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
