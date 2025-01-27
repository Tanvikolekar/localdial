import React from "react";
import { Navigate } from "react-router-dom";

const Dashboard = () => {
  // Retrieve the user role from localStorage or a global state
  const userRole = localStorage.getItem("role"); // Example: "admin" or "user"

  // Redirect to login if no role is set
  if (!userRole) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Welcome to the {userRole} Dashboard</h1>
      {userRole === "admin" ? <AdminDashboard /> : <UserDashboard />}
    </div>
  );
};

const AdminDashboard = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <Card title="Total Users" value="1200" />
    <Card title="Pending Requests" value="32" />
    <Card title="Revenue" value="$24,000" />
    {/* Add more admin-specific widgets */}
  </div>
);

const UserDashboard = () => (
  <div className="grid grid-cols-1 gap-6">
    <Card title="My Listings" value="15" />
    <Card title="Active Listings" value="10" />
    <Card title="Messages" value="5" />
    {/* Add more user-specific widgets */}
  </div>
);

const Card = ({ title, value }) => (
  <div className="border p-4 rounded-lg shadow-lg text-center">
    <h3 className="text-lg font-medium">{title}</h3>
    <p className="text-2xl font-bold">{value}</p>
  </div>
);

export default Dashboard;
