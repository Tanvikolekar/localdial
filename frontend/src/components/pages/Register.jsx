import React, { useState } from "react";
import { registerUser } from "../apiCalls";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    favoritecolor: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Object.values(formData).some((field) => !field)) {
      setError("All fields are required.");
      return;
    }

    try {
      setLoading(true);
      setError("");
      const response = await registerUser(formData);

      if (response.success) {
        alert("Registration successful! Please log in.");
        navigate("/login");
      } else {
        setError(response.message || "Registration failed.");
      }
    } catch (err) {
      setError("Error during registration. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="p-8 rounded-xl shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-extrabold mb-6 text-center text-orange-700">
          Create Your Account
        </h2>
        <form className="space-y-5" onSubmit={handleSubmit}>
          {["name", "email", "password", "favoritecolor"].map((field) => (
            <div className="relative" key={field}>
              <input
                type={field === "password" ? "password" : "text"}
                name={field}
                placeholder={
                  field === "favoritecolor"
                    ? "Favorite Color"
                    : field.charAt(0).toUpperCase() + field.slice(1)
                }
                value={formData[field]}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg focus:ring-orange-500"
                required
              />
            </div>
          ))}
          {error && (
            <div className="text-red-500 text-sm text-center">{error}</div>
          )}
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-3 rounded-lg"
            disabled={loading}
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>
        <p className="mt-6 text-center">
          Already have an account?{" "}
          <a href="/login" className="text-orange-500 hover:underline">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
