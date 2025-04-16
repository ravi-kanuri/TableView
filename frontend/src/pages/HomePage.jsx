import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Table from '../components/Table';
import { Menu } from 'lucide-react';

const HomePage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white">
      
      {/* Mobile Menu Icon */}
      <div className="md:hidden flex items-center justify-between px-4 py-3 bg-white shadow">
        <h1 className="text-lg font-semibold text-slate-800">Home</h1>
        <Menu 
          className="w-6 h-6 text-slate-800 cursor-pointer" 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)} 
        />
      </div>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-40 bg-white shadow-md w-64 transform transition-transform duration-300 ease-in-out 
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
        md:relative md:translate-x-0 md:block`}
      >
        <Sidebar />
      </div>

      {/* Overlay on mobile when sidebar is open */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-30 z-30 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Main content */}
      <div className="flex-1 p-4">
        <h2 className="text-xl font-semibold text-slate-800 mb-4">Table</h2>
        <Table />
      </div>



    </div>
  );
};

export default HomePage;
