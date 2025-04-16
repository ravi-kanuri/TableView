import React, { useState } from "react";
import {
  User,
  Calendar,
  Mail,
  Lock,
  CircleUserRound,
} from "lucide-react";
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../slices/authSlice';

const Signup = () => {
  const dispatch = useDispatch();
  const { isSigningUp } = useSelector((state) => state.auth);
  const [formData, setFormData] = useState({
    name: "",
    dateOfBirth: "",
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

  const handleSignup = (e) => {
    e.preventDefault(); // prevent page refresh
    dispatch(signup(formData));
    setFormData({ name: "", email: "", password: "" , dateOfBirth: ""});
  };

  return (
    <div>
      {/* Header */}
      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-cyan-300 text-slate-900 font-semibold px-6 py-1.5 rounded-md shadow-md">
        SIGN UP
      </div>

      {/* Profile Icon */}
      <div className="flex justify-center mt-6 mb-4">
        <div className="w-20 h-20 bg-slate-700 rounded-full flex items-center justify-center">
          <CircleUserRound className="w-10 h-10 text-gray-300" />
        </div>
      </div>

      {/* Form */}
      <form className="space-y-4" onSubmit={handleSignup}>
        {/* Name */}
        <div>
          <label className="text-sm text-gray-300">Name</label>
          <div className="flex items-center bg-slate-700 rounded-md px-3 py-2 mt-1">
            <User className="w-4 h-4 text-gray-400 mr-2" />
            <div className="h-5 border-l border-gray-500 mx-2" />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full name"
              className="bg-transparent outline-none text-gray-100 w-full placeholder-gray-400"
            />
          </div>
        </div>

        {/* Date of Birth */}
        <div>
          <label className="text-sm text-gray-300">Date of Birth</label>
          <div className="flex items-center bg-slate-700 rounded-md px-3 py-2 mt-1">
            <Calendar className="w-4 h-4 text-gray-400 mr-2" />
            <div className="h-5 border-l border-gray-500 mx-2" />
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              className="bg-transparent outline-none text-gray-100 w-full placeholder-gray-400"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="text-sm text-gray-300">Email</label>
          <div className="flex items-center bg-slate-700 rounded-md px-3 py-2 mt-1">
            <Mail className="w-4 h-4 text-gray-400 mr-2" />
            <div className="h-5 border-l border-gray-500 mx-2" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
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
              placeholder="••••••••"
              className="bg-transparent outline-none text-gray-100 w-full placeholder-gray-400"
            />
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-cyan-400 text-slate-900 font-semibold py-2 rounded-md mt-2 hover:bg-cyan-300 transition duration-300"
        >
          {isSigningUp ? 'Signing Up' : 'SIGN UP'}
        </button>
      </form>
    </div>
  );
};

export default Signup;
