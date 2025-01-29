import React from "react";
import LogoutButton from "./logOut";
import { useNavigate } from "react-router-dom";
import { IoIosAddCircle } from "react-icons/io";

const UserDashboard = () => {
  const navigate = useNavigate();

  // Function to navigate to the Add Business Form
  const handleNavigateToAddForm = () => {
    navigate("/addform");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">User Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 bg-white shadow-md rounded-lg">
          <h2 className="text-lg font-semibold mb-2">My Profile</h2>
          <p>View and edit your profile information.</p>
          <button className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Edit Profile
          </button>
          <br />
              <LogoutButton />
        </div>
        <div className="p-4 bg-white shadow-md rounded-lg">
          <h2 className="text-lg font-semibold mb-2">My Services</h2>
          <p>View the services you’ve added.</p>
          <button
            className="mt-3 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 hover:text-orange-200 transition duration-300 no-underline flex items-center"
            onClick={handleNavigateToAddForm} // Trigger navigate on button click
          >
            <IoIosAddCircle />  Add Services
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
