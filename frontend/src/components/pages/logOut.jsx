import React from 'react';
import { IoIosLogOut } from "react-icons/io";

const LogoutButton = () => {
  const handleLogout = () => {
    localStorage.removeItem('authToken');
    alert('Logged out successfully!');
    window.location.href = '/login';
  };

  return (
    <button onClick={handleLogout} className="logout-button">
      <IoIosLogOut />  Logout
    </button>
  );
};

export default LogoutButton;
