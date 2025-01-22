

// import React from 'react'
// import Sidebar from '../components/Sidebar'
// import { Outlet } from 'react-router-dom'

// const AdminPanel = () => {
//   return (
//     <div className="flex h-screen flex-col lg:flex-row">
  
//       <Sidebar />

//       <div className="flex-1 p-6 overflow-auto">
        
//         <Outlet />
//       </div>
//     </div>
//   )
// }

// export default AdminPanel




import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';

const AdminPanel = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to control sidebar visibility

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
            <span className="material-icons">menu</span> {/* You can use any icon library */}
          </button>
        </div>

        {/* Content */}
        <Outlet />
      </div>
    </div>
  );
};

export default AdminPanel;
