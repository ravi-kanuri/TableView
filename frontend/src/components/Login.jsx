import React, { useState } from "react";
import {
  User,
  Lock,
  CircleUserRound,
} from "lucide-react";
import { useDispatch, useSelector } from 'react-redux';
import { login } from "../slices/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const { isLoggingIn } = useSelector((state) => state.auth);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault(); 
    dispatch(login(formData));
    setFormData({ email: "", password: "" });
  };

  return (
    <div>
      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-cyan-300 text-slate-900 font-semibold px-6 py-1.5 rounded-md shadow-md">
        LOG IN
      </div>

      <div className="flex justify-center mt-6 mb-4">
        <div className="w-20 h-20 bg-slate-700 rounded-full flex items-center justify-center">
          <CircleUserRound className="w-10 h-10 text-gray-300" />
        </div>
      </div>

      <div className="space-y-4">
        {/* Username */}
        <div>
          <label className="text-sm text-gray-300">Email</label>
          <div className="flex items-center bg-slate-700 rounded-md px-3 py-2 mt-1">
            <User className="w-4 h-4 text-gray-400 mr-2" />
            <div className="h-5 border-l border-gray-500 mx-2" />
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="email"
              className="bg-transparent outline-none text-gray-100 w-full placeholder-gray-400"
            />
          </div>
        </div>

        {/* Password */}
        <div>
          <label className="text-sm text-gray-300">Password</label>
          <div className="flex items-center bg-slate-700 rounded-md px-3 py-2 mt-1">
            <Lock className="w-4 h-4 text-gray-400 mr-2" />
            <div className="h-5 border-l border-gray-500 mx-2" />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="password"
              className="bg-transparent outline-none text-gray-100 w-full placeholder-gray-400"
            />
          </div>
        </div>

        {/* Button */}
        <button
          onClick={handleLogin}
          className="w-full bg-cyan-400 text-slate-900 font-semibold py-2 rounded-md mt-2 hover:bg-cyan-300 transition duration-300"
        >
           {isLoggingIn ? 'Logging In' : 'LOG IN'}
        </button>
      </div>
    </div>
  );
};

export default Login;
