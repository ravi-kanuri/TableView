import React from "react";
import { Settings, X } from "lucide-react";

const users = [
  {
    id: 1,
    name: "Michael Holz",
    date: "04/10/2013",
    role: "Admin",
    status: "Active",
    avatar: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    id: 2,
    name: "Paula Wilson",
    date: "05/08/2014",
    role: "Publisher",
    status: "Active",
    avatar: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    id: 3,
    name: "Antonio Moreno",
    date: "11/05/2015",
    role: "Publisher",
    status: "Suspended",
    avatar: "https://randomuser.me/api/portraits/men/13.jpg",
  },
  {
    id: 4,
    name: "Mary Saveley",
    date: "06/09/2016",
    role: "Reviewer",
    status: "Active",
    avatar: "https://randomuser.me/api/portraits/women/14.jpg",
  },
  {
    id: 5,
    name: "Martin Sommer",
    date: "12/08/2017",
    role: "Moderator",
    status: "Inactive",
    avatar: "https://randomuser.me/api/portraits/men/15.jpg",
  },
];

const getStatusColor = (status) => {
  switch (status) {
    case "Active":
      return "bg-green-500";
    case "Suspended":
      return "bg-red-500";
    case "Inactive":
      return "bg-yellow-500";
    default:
      return "bg-gray-500";
  }
};

const Table = () => {
  return (
    <div className="overflow-x-auto px-4 py-6">
      <table className="min-w-full bg-white rounded-md overflow-hidden">
        <thead>
          <tr className="text-left text-sm text-gray-600 bg-gray-100">
            <th className="py-3 px-4 font-semibold">#</th>
            <th className="py-3 px-4 font-semibold">Name</th>
            <th className="py-3 px-4 font-semibold">Date Created</th>
            <th className="py-3 px-4 font-semibold">Role</th>
            <th className="py-3 px-4 font-semibold">Status</th>
            <th className="py-3 px-4 font-semibold">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr
              key={user.id}
              className="border-b border-gray-200 text-sm hover:bg-gray-50"
            >
              <td className="py-3 px-4">{user.id}</td>
              <td className="py-3 px-4 flex items-center gap-2">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <span className="font-medium text-gray-800">{user.name}</span>
              </td>
              <td className="py-3 px-4">{user.date}</td>
              <td className="py-3 px-4">{user.role}</td>
              <td className="py-3 px-4">
                <span className="flex items-center gap-2">
                  <span
                    className={`h-2 w-2 rounded-full ${getStatusColor(
                      user.status
                    )}`}
                  ></span>
                  {user.status}
                </span>
              </td>
              <td className="py-3 px-4 flex gap-4 text-cyan-500">
                <Settings className="w-5 h-5 cursor-pointer hover:text-cyan-700 transition-all" />
                <X className="w-5 h-5 text-red-500 cursor-pointer hover:text-red-700 transition-all" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
