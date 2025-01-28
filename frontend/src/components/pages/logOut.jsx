import React from 'react';

const LogoutButton = () => {
  const handleLogout = () => {
    localStorage.removeItem('authToken');
    alert('Logged out successfully!');
    window.location.href = '/login';
  };

  return (
    <button onClick={handleLogout} className="logout-button">
      Logout
    </button>
  );
};

export default LogoutButton;
