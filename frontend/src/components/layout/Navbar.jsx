import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome, AiOutlineInfoCircle } from "react-icons/ai";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { FaSearch } from "react-icons/fa";

const Navbar = ({ onCategoryChange, onFilter, isLoggedIn }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);
    if (onCategoryChange) {
      onCategoryChange(category);
    }
  };

  const handleSearch = () => {
    if (onFilter) {
      onFilter({ searchQuery, selectedCategory });
    }
  };

  return (
    <nav className="bg-orange-700 text-orange-100 shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-xl font-bold">LocalDial</span>
        </div>

        {/* Search Bar */}
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-4 py-2 w-48 md:w-64 border border-orange-400 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <button
            className="bg-orange-500 text-white px-4 py-2 rounded-r-lg hover:bg-orange-600 transition duration-300 flex items-center"
            onClick={handleSearch}
          >
            <FaSearch className="mr-2" /> Search
          </button>
        </div>

        {/* Category Dropdown */}
        <select
          className="ml-4 px-4 py-2 bg-orange-500 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="All">All Cities</option>
          <option value="Grocery Shops">Delhi</option>
          <option value="Hospitals">Mumbai</option>
          <option value="Gyms">Pune</option>
          <option value="Restaurants">Bengaluru</option>
          <option value="Hotels">Hyderabad</option>
          <option value="Pharmacies">Kolkata</option>
        </select>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/home" className="hover:text-orange-200 transition duration-300 no-underline flex items-center">
            <AiOutlineHome className="mr-1" /> Home
          </Link>
          <Link to="/aboutus" className="hover:text-orange-200 transition duration-300 no-underline flex items-center">
            <AiOutlineInfoCircle className="mr-1" /> About Us
          </Link>
          <Link to="/services" className="hover:text-orange-200 transition duration-300 no-underline flex items-center">
            <MdOutlineMiscellaneousServices className="mr-1" /> Services
          </Link>
          <Link to="/register" className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition duration-300 shadow-md no-underline">
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;