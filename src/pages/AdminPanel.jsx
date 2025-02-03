import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';
import { TbBaselineDensityMedium } from "react-icons/tb";
const AdminPanel = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); 

  // Toggle the sidebar
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex h-screen">
      {/* Sidebar - Hidden on mobile */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <div className="flex-1 p-6 overflow-auto">
        {/* Hamburger icon for mobile view */}
        <div className="lg:hidden mb-4">
          <button
            onClick={toggleSidebar}
            className="text-white bg-gray-800 p-2 rounded-md"
          >
            <span className="material-icons"> <TbBaselineDensityMedium/> </span> 
          </button>
        </div>

        {/* Content */}
        <Outlet />
      </div>
    </div>
  );
};

export default AdminPanel;
