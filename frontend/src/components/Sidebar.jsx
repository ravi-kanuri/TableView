import React from "react";
import { PanelLeft, LogOut,Star } from "lucide-react";
import { useDispatch } from "react-redux";
import { logout } from "../slices/authSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div className="w-64 h-lvh transition-all duration-300 bg-white border-r flex flex-col overflow-hidden">
      {/* Logo */}
      <div className="p-5">
        <div className="flex items-center space-x-2 p-2 rounded-md cursor-pointer" role="button" tabIndex={0}>
        <img className="w-10 h-10" src="/logo.jpeg" alt="Logo" />
        <span className="text-4xl pl-1 font-semibold text-black">TableView</span>
        </div>
      </div>

     
      <div className="flex-1 overflow-y-auto">
        <div className="p-2">
          <button className="flex items-center justify-between p-3 w-full hover:bg-blue-300 rounded-md cursor-pointer" role="button" tabIndex={0} >
            <div className="flex items-center space-x-2">
              <PanelLeft className="w-6 h-6" />
              <span className="font-medium">Home</span>
            </div>
          </button>
        </div>

      </div>

      {/* Log Out */}
      <div className="p-4 border-t border-black space-y-2">
        <div className="flex items-center justify-between p-2 hover:bg-blue-300 rounded-md cursor-pointer" role="button" tabIndex={0} onClick={handleLogout} >
          <div className="flex items-center space-x-2">
            <LogOut className="w-7 h-7" />
            <span className="text-md font-semibold">Log Out</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;