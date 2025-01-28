import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import AboutUs from "./components/pages/Aboutus";
import Register from "./components/pages/Register";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Categories from "./components/pages/Categories";
import AddBusinessForm from "./components/pages/AddBusinessForm";
import Login from "./components/pages/Login";
import ResetPassword from "./components/pages/ResetPassword";
import Services from "./components/pages/Services";
import BusinessCard from "./components/layout/BusinessCard";
// import Dashboard from "./components/pages/dashboard";
import NavbarAuth from "./components/layout/NavbarAuth";
import AdminDashboard from "./components/pages/adminPanel";
import UserDashboard from "./components/pages/Admindashboard";
import ProtectedRoute from "./components/pages/protectedRoutes";

const App = () => {
  // State to track user authentication status
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check the token in localStorage to determine authentication status
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    setIsAuthenticated(!!token); // Set true if token exists, false if not
  }, []); 

  const handleCategoryChange = (category) => {
    console.log("Selected category:", category);
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Conditionally render Navbar or NavbarAuth */}
        {isAuthenticated ? (
          <NavbarAuth onCategoryChange={handleCategoryChange} />
        ) : (
          <Navbar onCategoryChange={handleCategoryChange} />
        )}

        <main className="flex-grow">
          <Routes>
            <Route path="/protected" element={<ProtectedRoute />} />
             {/* Protected Routes */}
             <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <UserDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
            <Route path="/home" element={<HomePage />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/resetPassword" element={<ResetPassword />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/addform" element={<AddBusinessForm />} />
            <Route path="/businesscard" element={<BusinessCard />} />
            <Route path="/services" element={<Services />} />
            <Route path="/" element={<Navigate to="/home" />} />
            {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
